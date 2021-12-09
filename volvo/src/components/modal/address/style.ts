import styled from 'styled-components';
import { pxToRem } from '../../../style';

export const AddressModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
  position: fixed;
  top: ${pxToRem(60)}rem;
  left: 0;
  z-index: 100;
  padding: 0;
`;

export const AddressModal = styled.div`
  width: 438px;
  height: 629px;
`;
