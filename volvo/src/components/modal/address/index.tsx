import React, { FC } from 'react';
import * as S from './style';
import DaumPostcode, { Address } from 'react-daum-postcode';
import { addressType } from '../../../constance/information';

interface Props {
  setAddress: (payload: addressType) => void;
  setIsClickAddressBtn: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddressModal: FC<Props> = ({ setAddress, setIsClickAddressBtn }) => {
  const onComplete = (data: Address) => {
    const { zonecode, roadAddress } = data;
    setAddress({
      address: roadAddress,
      postCode: zonecode,
    });
    setIsClickAddressBtn(false);
  };

  return (
    <S.AddressModalWrapper>
      <DaumPostcode width={438} height={629} onComplete={onComplete} animation />
    </S.AddressModalWrapper>
  );
};

export default AddressModal;
