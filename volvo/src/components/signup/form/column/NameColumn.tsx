import React, { FC } from 'react';
import SignUpColumn from './SignUpColumn';
import Input from '../../../default/input';

interface Props {
  disable: boolean;
  setName: (payload: string) => void;
}

const NameColumn: FC<Props> = ({ disable, setName }) => {
  const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return (
    <SignUpColumn text='이름' description={'이름을 다섯 자 이하로 작성해 주세요.'}>
      <Input width={400} maxLength={5} disable={disable} inputChangeHandler={nameChangeHandler} />
    </SignUpColumn>
  );
};

export default NameColumn;
