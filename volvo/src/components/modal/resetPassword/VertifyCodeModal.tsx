import Input from '../../default/input';
import React, { FC, useEffect, useState } from 'react';
import * as S from '../style';
import MoveButton from './moveButton';
import Timer from '../default/timer';
import useResetPassword from '../../../util/hooks/resetPassword/useResetPassword';

interface Props {
  goNext: () => void;
  goPrev: () => void;
}

type TimeOut = ReturnType<typeof setTimeout>;
const MAX_TIME = 180;

const VertifyCodeModal: FC<Props> = ({ goNext, goPrev }) => {
  const { state, setState } = useResetPassword();
  const [timer, setTimer] = useState<TimeOut>();
  const [time, setTime] = useState<number>(MAX_TIME);
  const vertifyCodeInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState.setVertifyCode(e.target.value);
  };
  const stopTimer = (timer: TimeOut) => {
    clearInterval(timer);
  };
  const vertifyButtonClickHandler = () => {
    setState.checkVertifyCode({
      email: state.vertifyPhoneNumber,
      code: state.vertifyCode,
    });
  };
  const reSendVertifyCodeButtonClickHandler = () => {
    setState.sendVertifyCode({
      email: state.vertifyPhoneNumber,
    });
    setTime(180);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(time => time - 1);
    }, 1000);
    setTimer(timer);
    setState.setResetPasswordError({ status: 0, message: '', type: '' });
    return () => {
      stopTimer(timer);
      setTime(MAX_TIME);
      setState.resetState();
    };
  }, []);
  useEffect(() => {
    if (time <= 0) {
      stopTimer(timer as TimeOut);
    }
  }, [time]);
  useEffect(() => {
    if (state.vertifyCodeChecked) setTime(0);
    stopTimer(timer as TimeOut);
  }, [state.vertifyCodeChecked]);

  return (
    <S.ModalMain>
      <S.ModalTitle bottom={25}>비밀번호 재설정</S.ModalTitle>
      {!!time ? (
        <Timer time={time} />
      ) : state.vertifyCodeChecked ? (
        <S.TimerNotBox>이메일 인증이 완료되었습니다.</S.TimerNotBox>
      ) : (
        <S.TimerNotBox>인증시간이 만료되었습니다.</S.TimerNotBox>
      )}
      <S.ModalSubTitle>전송된 인증코드를 입력해주세요</S.ModalSubTitle>
      <Input
        inputChangeHandler={vertifyCodeInputChangeHandler}
        width={280}
        height={48}
        margin='0px 0px 15px 0px'
        placeholder='인증코드'
        type='number'
      />
      <S.ModalDefaultButtonWrapper>
        <S.ModalDefaultButton className='multiple' onClick={reSendVertifyCodeButtonClickHandler}>
          재전송
        </S.ModalDefaultButton>
        <S.ModalDefaultButton className='multiple' onClick={vertifyButtonClickHandler}>
          인증
        </S.ModalDefaultButton>
      </S.ModalDefaultButtonWrapper>
      <S.ModalSubTitle>메일이 오지 않았다면, 이메일을 확인해 주세요.</S.ModalSubTitle>
      <S.ModalMoveButtonWrapper>
        <MoveButton text='이전' type='prev' buttonClickHandler={goPrev} disable={false} />
        <MoveButton
          text='다음'
          type='next'
          buttonClickHandler={goNext}
          disable={!state.vertifyCodeChecked}
        />
      </S.ModalMoveButtonWrapper>
    </S.ModalMain>
  );
};

export default VertifyCodeModal;
