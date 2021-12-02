import React, { FC } from 'react';
import * as S from './style';
import DaumPostcode, { Address } from 'react-daum-postcode';
import { addressType } from '../../../types';

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
      <S.AddressModal>
        <DaumPostcode onComplete={onComplete} animation />
      </S.AddressModal>
    </S.AddressModalWrapper>
  );
};

export default AddressModal;
