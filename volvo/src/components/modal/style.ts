import styled, { css } from 'styled-components';
import { color } from '../../style';
import {
  access_error,
  file_error,
  move,
  move_active,
  password_reset_success,
  submit,
} from '../../assets/modal';

const windowWidthRatio = window.innerWidth / 1920;
const windowHeightRatio = window.innerHeight / 1080;

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 100;
`;

export const Modal = styled.div`
  width: 420px;
  height: 580px;
  background-color: ${color.backgorund};
  padding: 12px;
  box-sizing: border-box;
`;

export const ModalMain = styled.div`
  padding: 0px 58px;
`;

export const ModalDeleteButton = styled.div`
  width: 12px;
  height: 12px;
  position: relative;
  cursor: pointer;
  > div {
    position: absolute;
    width: Math.sqrt(144 + 144) px;
    height: 2px;
    border-radius: 10px;
    background-color: #3d3d3d;
  }
  div:first-child {
    transform: rotate(45deg);
  }
  div:last-child {
    transform: rotate(135deg);
  }
`;

export const ModalDeleteButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const ModalDefaultButton = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.main};
  color: ${color.backgorund};
  font-size: 18px;
  cursor: pointer;
`;

export const ModalDefaultButtonWrapper = styled.div`
  width: 100%;
  margin-bottom: 18px;
  display: flex;
  > div.multiple:first-child {
    margin-right: 8px;
  }
  > div.multiple:last-child {
    margin-left: 8px;
  }
`;

export const ModalSubButton = styled.div`
  font-size: 13px;
  color: #5a5a5a;
  text-align: center;
  margin: 3px;
  cursor: pointer;
`;

export const ModalErrorText = styled.div`
  font-size: 14px;
  height: 20px;
  color: ${color.main};
  text-align: center;
  margin-bottom: 18px;
`;

export const ModalTitle = styled.h3<{ top?: number; bottom?: number }>`
  font-size: 32px;
  text-align: center;
  font-weight: 500;
  margin-top: ${props => (props.top ? props.top : 48)}px;
  margin-bottom: ${props => (props.bottom ? props.bottom : 100)}px;
`;

export const ModalSubTitle = styled.p`
  font-size: 14px;
  height: 20px;
  color: #5a5a5a;
  margin: 18px 0px;
  text-align: center;
`;

export const ModalNextButton = styled.div<{ disable: boolean }>`
  width: 100px;
  height: 45px;
  border-radius: 5px;
  display: flex;
  padding: 0px 13px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  > p {
    font-size: 17px;
  }
  > div {
    width: 12px;
    height: 20px;
  }
  > div.prev {
    transform: rotate(180deg);
  }
  ${({ disable }) =>
    disable
      ? css`
          > p {
            color: ${color.disable};
          }
          > div {
            background-image: url(${move});
          }
          cursor: not-allowed;
          border: solid 1px ${color.disable};
        `
      : css`
          > p {
            color: black;
          }
          > div {
            background-image: url(${move_active});
          }
          border: solid 1px black;
          cursor: pointer;
        `}
`;

export const ModalMoveButtonWrapper = styled.div`
  margin-top: 66px;
  display: flex;
  justify-content: space-between;
`;

export const ModalTimer = styled.div<{ top?: number; bottom?: number; left?: number }>`
  ${({ top, bottom, left }) => css`
    margin-top: ${typeof top === 'number' ? top : 0}px;
    margin-bottom: ${typeof bottom === 'number' ? bottom : 45}px;
    margin-left: ${typeof left === 'number' ? left : 0}px;
  `}
  display: flex;
  justify-content: center;
  > p {
    color: ${color.main};
    font-weight: 600;
    font-size: 19px;
  }
`;

export const ModalResetPasswordSuccessImage = styled.div`
  width: 90px;
  height: 105px;
  background-image: url(${password_reset_success});
  background-repeat: no-repeat;
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 90px;
`;

export const ModalFileErrorImage = styled(ModalResetPasswordSuccessImage)`
  background-image: url(${file_error});
`;

export const ModalAccessErrorImage = styled(ModalResetPasswordSuccessImage)`
  background-image: url(${access_error});
`;

export const ModalSubmitImage = styled(ModalResetPasswordSuccessImage)`
  background-image: url(${submit});
`;

export const ModalNotice = styled.div`
  width: 1200 * ${windowWidthRatio}px;
  height: 835 * ${windowHeightRatio}px;
  padding: 40px;
  background-color: white;
  overflow: scroll;
`;

export const ModalNoticeTitle = styled.div`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 12px;
`;

export const ModalNoticeSubTitle = styled.div`
  font-size: 20px;
  margin-top: 28px;
`;

export const ModalNoticeText = styled.div`
  font-size: 18px;
  margin: 8px;
`;
export const ModalNoticeCheckboxWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 68px;
`;

export const ModalNoticeCheckboxText = styled.div`
  margin-right: 15px;
`;

export const ModalNoticeButtonWrapper = styled.div`
  margin-top: 18px;
  display: flex;
  justify-content: flex-end;
  > div {
    width: 240px;
  }
`;
