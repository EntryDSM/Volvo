import React, { FC, useEffect } from 'react';
import * as S from './style';
import { submit, XBtn } from '../../../assets/modal';
import { useDispatch } from 'react-redux';
import { FINAL } from '../../../modules/redux/action/preview/interface';
import { usePreview } from '../../../util/hooks/preview';
import { useNavigate } from 'react-router-dom';

interface Props {
  setIsOpenSubmitModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConfirmSubmissionModal: FC<Props> = ({ setIsOpenSubmitModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSuccessSaveFinal = usePreview().state.isSuccessSaveFinal;
  const closeBtnClickHandler = () => {
    setIsOpenSubmitModal(false);
  };

  const accessBtnClickHandler = () => {
    dispatch({ type: FINAL });
  };

  useEffect(() => {
    if (isSuccessSaveFinal) {
      navigate('/');
    } else if (isSuccessSaveFinal === false) {
      alert('실패');
    }
  }, [isSuccessSaveFinal]);

  return (
    <S.ModalWrapper>
      <S.ConfirmSubmissionModal>
        <S.CloseBtn src={XBtn} onClick={closeBtnClickHandler} />
        <S.ModalTitle>정말 제출하시겠습니까?</S.ModalTitle>
        <S.ModalExplain>제출하면 다시 수정할 수 없으니</S.ModalExplain>
        <S.ModalExplain>다시 한번 확인해 주세요.</S.ModalExplain>
        <S.SubmitImg src={submit} />
        <S.AccessBtn onClick={accessBtnClickHandler}>제출</S.AccessBtn>
      </S.ConfirmSubmissionModal>
    </S.ModalWrapper>
  );
};

export default ConfirmSubmissionModal;
