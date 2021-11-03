import React, { FC, useEffect, useState } from 'react';
import { REMARKS } from '../../../constance';
import * as S from '../style';

interface Props {
  setRemark: (payload: string) => void;
  applicationRemark: string | null;
  applicationType: string | null;
}

const ChooseRemark: FC<Props> = props => {
  const { setRemark, applicationRemark, applicationType } = props;
  const [isCheck, setIsCheck] = useState({ nationalMerit: false, specialAdmission: false });
  const [isBlock, setIsBlock] = useState<boolean>(false);

  useEffect(() => {
    if (applicationType === 'SOCIAL') {
      setIsCheck({ nationalMerit: true, specialAdmission: true });
      setIsBlock(true);
      if (applicationRemark === 'PRIVILEGED_ADMISSION' || applicationRemark === 'NATIONAL_MERIT')
        setRemark('');
    } else {
      setIsCheck({ nationalMerit: false, specialAdmission: false });
      setIsBlock(false);
    }
  }, [applicationType, applicationRemark]);

  useEffect(() => {
    switch (applicationRemark) {
      case 'PRIVILEGED_ADMISSION':
        setIsCheck({ nationalMerit: false, specialAdmission: true });
        break;
      case 'NATIONAL_MERIT':
        setIsCheck({ nationalMerit: true, specialAdmission: false });
        break;
      default:
        if (applicationType !== 'SOCIAL')
          setIsCheck({ nationalMerit: false, specialAdmission: false });
        break;
    }
  }, [applicationRemark, applicationType]);

  const onCheckBtnClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    let dataId = event.currentTarget.dataset.id;
    if (applicationType !== 'SOCIAL') {
      switch (dataId) {
        case 'nationalMerit':
          setIsCheck({ nationalMerit: !isCheck.nationalMerit, specialAdmission: false });
          if (!isCheck.nationalMerit) {
            setRemark('NATIONAL_MERIT');
          } else setRemark('');
          break;
        case 'specialAdmission':
          setIsCheck({ nationalMerit: false, specialAdmission: !isCheck.specialAdmission });
          if (!isCheck.specialAdmission) {
            setRemark('PRIVILEGED_ADMISSION');
          } else setRemark('');
          break;
      }
    }
  };
  return (
    <S.Line>
      <S.LineTitle>
        <span />
        특기사항
      </S.LineTitle>
      {REMARKS.map(data => {
        return (
          <S.SelectBox margin={65} key={data.id} isBlock={isBlock}>
            <S.CheckCircle onClick={onCheckBtnClick} data-id={data.id} isBlock={isBlock}>
              {isCheck[data.id] && (
                <S.CheckedCircle data-id={data.id} isBlock={isBlock} onClick={onCheckBtnClick} />
              )}
            </S.CheckCircle>
            <p onClick={onCheckBtnClick} data-id={data.id}>
              {data.content}
            </p>
          </S.SelectBox>
        );
      })}
      <S.Explain>
        <span>*</span>
        해당하는 특기사항에 체크해주세요
      </S.Explain>
    </S.Line>
  );
};

export default ChooseRemark;
