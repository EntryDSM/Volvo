import React, { FC, useMemo } from 'react';
import { isEmail } from '../../util/util/format';
import { isOneOfTextEmpty } from '../../util/util';
import SignUpForm from './form';
import SignUpRule from './rule';
import * as S from './style';
import { error } from '../../types';
import { currentYear } from '../../constance/default';

interface Props {
  name: string;
  phoneNumber: string;
  phoneCode: string;
  password: string;
  passwordCheck: string;
  ruleCheck: boolean;
  isCheckVertifyCode: boolean;
  isSendVertifyCode: boolean;
  setPassword: (payload: string) => void;
  setPhoneCode: (payload: string) => void;
  setName: (payload: string) => void;
  setPhoneNumber: (payload: string) => void;
  setRuleCheck: (payload: boolean) => void;
  setPasswordCheck: (payload: string) => void;
  sendVertifyCode: (payload: string) => void;
  checkVertifyCode: (payload: { phoneNumber: string; code: string }) => void;
  signup: (payload: { phoneNumber: string; password: string; name: string }) => void;
  error: error;
}

const SignUp: FC<Props> = props => {
  const { name, phoneNumber, phoneCode, password, signup, passwordCheck, ruleCheck } = props;

  const signupButtonClickHandler = () => {
    if (
      !isOneOfTextEmpty(name, phoneNumber, phoneCode, password) &&
      isSamePasswordAndPasswordCheck &&
      isEmail(phoneNumber) &&
      ruleCheck
    )
      signup({ phoneNumber, password, name });
  };

  const isSamePasswordAndPasswordCheck = useMemo(
    () => passwordCheck === password,
    [password, passwordCheck],
  );

  return (
    <S.SignUp>
      <div>
        <S.SignUpHeaderWrapper>
          <S.SignUpSubTitle>대덕소프트웨어마이스터고등학교</S.SignUpSubTitle>
          <S.SignUpTitle>{currentYear}학년도 지원자 회원가입</S.SignUpTitle>
        </S.SignUpHeaderWrapper>
        <SignUpRule setRuleCheck={props.setRuleCheck} ruleCheck={props.ruleCheck} />
        <SignUpForm {...props} />
        <S.SignUpSubmitButtonWrapper>
          <S.SignUpSubmitButton
            disable={
              isOneOfTextEmpty(name, phoneNumber, phoneCode, password) ||
              !isSamePasswordAndPasswordCheck ||
              !isEmail(phoneNumber) ||
              !ruleCheck
            }
            onClick={signupButtonClickHandler}
          >
            계정 생성
            <div />
          </S.SignUpSubmitButton>
        </S.SignUpSubmitButtonWrapper>
      </div>
    </S.SignUp>
  );
};

export default SignUp;
