import React, { Dispatch, FC, useEffect, useState } from 'react';
import { GRADUATION } from '../../../constance';
import { graduationType } from '../../../types';
import * as S from '../style';

interface Props {
  setIsProspective: Dispatch<React.SetStateAction<boolean>>;
  setGraduation: (payload: string) => void;
  setGraduationYear: (payload: number) => void;
  educationalStatus: string | null;
}

const isCheckInit = {
  prospective: false,
  graduate: false,
  qualification: false,
};

const ChooseGraduation: FC<Props> = props => {
  const { setIsProspective, setGraduation, educationalStatus, setGraduationYear } = props;
  const [isCheck, setIsCheck] = useState<{
    prospective: boolean;
    graduate: boolean;
    qualification: boolean;
  }>(isCheckInit);

  useEffect(() => {
    switch (educationalStatus) {
      case 'PROSPECTIVE_GRADUATE':
        setIsCheck({ ...isCheckInit, prospective: true });
        setIsProspective(true);
        break;
      case 'GRADUATE':
        setIsCheck({ ...isCheckInit, graduate: true });
        setIsProspective(false);
        setGraduationYear(2022);
        break;
      case 'QUALIFICATION_EXAM':
        setIsCheck({ ...isCheckInit, qualification: true });
        setIsProspective(false);
        setGraduationYear(2022);
        break;
      default:
        setIsCheck(isCheckInit);
        break;
    }
  }, [educationalStatus]);

  const onCheckBtnClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    let dataId = event.currentTarget.dataset.id as 'prospective' | 'graduate' | 'qualification';
    setIsCheck({ ...isCheckInit, [dataId]: true });
    switch (dataId) {
      case 'prospective':
        setIsProspective(true);
        setGraduation('PROSPECTIVE_GRADUATE');
        break;
      case 'graduate':
        setIsProspective(false);
        setGraduation('GRADUATE');
        break;
      case 'qualification':
        setIsProspective(false);
        setGraduation('QUALIFICATION_EXAM');
        break;
    }
  };

  return (
    <S.Line>
      <S.LineTitle>
        <span>*</span>졸업 구분
      </S.LineTitle>
      {GRADUATION.map((data: graduationType) => {
        return (
          <S.SelectBox margin={65} key={data.id}>
            <S.CheckCircle onClick={onCheckBtnClick} data-id={data.id}>
              {isCheck[data.id] && <S.CheckedCircle />}
            </S.CheckCircle>
            <p data-id={data.id} onClick={onCheckBtnClick}>
              {data.content}
            </p>
          </S.SelectBox>
        );
      })}
    </S.Line>
  );
};

export default ChooseGraduation;
