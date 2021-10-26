import React from 'react';
import * as s from '../style';
interface VolunteerColumnProps {
  text?: string;
  unit: string;
}

const VolunteerColumn: React.FC<VolunteerColumnProps> = props => {
  const { text, unit } = props;
  return (
    <s.VolunteerColumnWrapper>
      {text && <s.VolunteerColumnTitle>{text}</s.VolunteerColumnTitle>}
      <s.VolunteerColumnInputWrapper>
        <input type='number' defaultValue={0} />
        <p>{unit}</p>
      </s.VolunteerColumnInputWrapper>
    </s.VolunteerColumnWrapper>
  );
};

export default VolunteerColumn;
