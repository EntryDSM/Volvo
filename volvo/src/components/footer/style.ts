import { color } from '../../style';
import styled from 'styled-components';

export const FooterDiv = styled.div`
  > div {
    width: 100%;
    height: 204px;
    min-width: 1320px;
    background-color: ${color.sub};
    color: ${color.backgorund};
    padding: 20px 0px;
    display: flex;
    justify-content: space-between;
    padding: 0 15%;
    align-items: center;
    flex-shrink: 0;
    box-sizing: border-box;
    > div {
      box-sizing: content-box;
    }
    @media (max-width: 1120px) {
      width: auto;
      padding: 0px 5%;
      box-sizing: border-box;
    }
  }
`;
export const FooterTitle = styled.p`
  font-size: 33px;
  margin-bottom: 8px;
  font-weight: 500;
`;

export const FooterText = styled.div<{ margin?: string }>`
  font-size: 10px;
  margin-bottom: ${props => (props.margin ? `${props.margin}px` : '10px')};
`;

export const FooterButton = styled.p`
  width: 80px;
  font-size: 16px;
  margin: 16px;
  text-align: right;
  cursor: pointer;
`;

export const FooterImgButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 8px;
  box-sizing: border-box;
`;

export const FooterImgButton = styled.div`
  width: 20px;
  height: 20px;
  padding: 8px 8px 8px 0px;
  cursor: pointer;
`;
