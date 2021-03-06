import React, { FC, useEffect, useState } from 'react';
import * as S from '../style';
import { TypeSelect } from '../Select';
import { CHOOSETYPEINFO } from '../../../constance';

interface Props {
  socialType: string;
  setType: (payload: string) => void;
  setSocialType: (payload: string) => void;
  setRemark: (payload: string) => void;
  applicationRemark: string | null;
  applicationType: string | null;
}

const ChooseType: FC<Props> = props => {
  const {
    socialType,
    setType,
    setSocialType,
    setRemark,
    applicationRemark,
    applicationType,
  } = props;
  const [isCheck, setIsCheck] = useState({ regular: false, meister: false, social: false });
  const [disabled, setDisabled] = useState('disabled');

  useEffect(() => {
    switch (applicationType) {
      case 'COMMON':
        setIsCheck({ regular: true, meister: false, social: false });
        break;
      case 'MEISTER':
        setIsCheck({ regular: false, meister: true, social: false });
        break;
      case 'SOCIAL':
        setIsCheck({ regular: false, meister: false, social: true });
        setDisabled('normal');
        break;
      default:
        setIsCheck({ regular: false, meister: false, social: false });
        break;
    }
    if (applicationType === 'SOCIAL') {
      if (applicationRemark === '') setSocialType('사회통합전형');
      if (applicationRemark !== '') {
        setDisabled('normal');
        switch (applicationRemark) {
          case 'BASIC_LIVING':
            setSocialType('기초생활수급자');
            break;
          case 'ONE_PARENT':
            setSocialType('한부모가족');
            break;
          case 'LOWEST_INCOME':
            setSocialType('차상위계층');
            break;
          case 'TEEN_HOUSEHOLDER':
            setSocialType('소년소녀가장');
            break;
          case 'FROM_NORTH':
            setSocialType('북한이탈주민');
            break;
          case 'MULTICULTURA':
            setSocialType('다문화가정');
            break;
          case 'PROTECTED_CHILDREN':
            setSocialType('보호대상아동');
            break;
        }
      }
    }
  }, [applicationType, applicationRemark]);

  const onCheckBtnClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    let dataId = event.currentTarget.dataset.id;
    switch (dataId) {
      case 'regular':
        setIsCheck({ regular: true, meister: false, social: false });
        setDisabled('disabled');
        setType('COMMON');
        setRemark('');
        break;
      case 'meister':
        setIsCheck({ regular: false, meister: true, social: false });
        setDisabled('disabled');
        setType('MEISTER');
        setRemark('');
        break;
      case 'social':
        setIsCheck({ regular: false, meister: false, social: true });
        setDisabled('normal');
        setType('SOCIAL');
        break;
    }
  };

  return (
    <S.Line>
      <S.LineTitle>
        <span>*</span>전형 선택
      </S.LineTitle>
      {CHOOSETYPEINFO.map(data => {
        return (
          <S.SelectBox margin={86} key={data.id}>
            <S.CheckCircle onClick={onCheckBtnClick} data-id={data.id}>
              {isCheck[data.id] && <S.CheckedCircle />}
            </S.CheckCircle>
            <p onClick={onCheckBtnClick} data-id={data.id}>
              {data.content}
            </p>
          </S.SelectBox>
        );
      })}
      <S.SelectBox margin={86}>
        <S.CheckCircle onClick={onCheckBtnClick} data-id={'social'}>
          {isCheck['social'] && <S.CheckedCircle />}
        </S.CheckCircle>
        <TypeSelect {...props} disabled={disabled} setDisabled={setDisabled} />
      </S.SelectBox>
    </S.Line>
  );
};

export default ChooseType;
