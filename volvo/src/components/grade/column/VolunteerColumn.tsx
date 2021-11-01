import React from 'react';
import * as s from '../style';
interface VolunteerColumnProps {
  text?: string;
  unit?: string;
  name: string;
  value: number;
  setInput: (paylode: { name: string; value: number }) => void;
}

const VolunteerColumn: React.FC<VolunteerColumnProps> = ({
  text,
  unit = '일',
  name,
  value,
  setInput,
}) => {
  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setInput({ name: name, value: Number(value) });
  };

  return (
    <s.VolunteerColumnWrapper>
      {text && <s.VolunteerColumnTitle>{`전체 미인정 ${text} 일수`}</s.VolunteerColumnTitle>}
      <s.VolunteerColumnInputWrapper>
        <input type='number' name={name} value={String(value)} onChange={changeValue} />
        <p>{unit}</p>
      </s.VolunteerColumnInputWrapper>
    </s.VolunteerColumnWrapper>
  );
};

export default VolunteerColumn;
