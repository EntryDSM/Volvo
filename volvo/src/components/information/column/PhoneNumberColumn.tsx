import React, { FC, useMemo } from 'react';
import * as S from '../style';
import Input from '../../default/input';

interface Props {
  title: string;
  inputName: string;
  schoolTel?: string;
  parentTel?: string;
  telephoneNumber?: string;
  setInput: (payload: { name: string; value: string }) => void;
}

const PhoneNumberColumn: FC<Props> = props => {
  const { title, inputName, setInput, schoolTel, parentTel, telephoneNumber } = props;
  const phoneNumberChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ name: e.target.name, value: e.target.value });
  };

  const phoneWithHyphen = (number: string) => {
    return number
      ? number
          .replace(/[^0-9]/g, '')
          .replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/, '$1-$2-$3')
          .replace('--', '-')
      : '';
  };

  const phoneNumberInput = useMemo(() => {
    let inputvalue = '';
    if (inputName === 'schoolTel') inputvalue = schoolTel as string;
    else if (inputName === 'parentTel') inputvalue = parentTel as string;
    else if (inputName === 'telephoneNumber') inputvalue = telephoneNumber as string;
    return (
      <Input
        width={260}
        height={41}
        inputChangeHandler={phoneNumberChangeHandler}
        name={inputName}
        value={phoneWithHyphen(inputvalue)}
        maxLength={13}
      />
    );
  }, [schoolTel, parentTel, telephoneNumber, inputName]);

  return (
    <S.InformationLine width={1220}>
      <S.InformationLineTitle>
        <span>{inputName === 'homeTel' ? '' : '*'}</span>
        {title}
      </S.InformationLineTitle>
      {phoneNumberInput}
      <S.Explain>
        <span>*</span>
        '-'문자를 제외한 숫자만 입력해주세요.
      </S.Explain>
    </S.InformationLine>
  );
};

export default PhoneNumberColumn;
