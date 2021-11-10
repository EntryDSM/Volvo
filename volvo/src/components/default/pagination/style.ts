import { color } from '../../../style';
import styled, { css } from 'styled-components';

export const Pagination = styled.div`
  width: 1220px;
  height: 50px;
  margin: 130px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > div:nth-child(2) {
    width: 240px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Circle = styled.div`
  width: 28px;
  height: 28px;
  background-color: ${color.main};
  border-radius: 15px;
`;

export const SmallCircle = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${color.light};
  border-radius: 11px; ;
`;

export const PageBtn = styled.div<{
  disabled: boolean;
}>`
  width: 140px;
  height: 100%;
  border-radius: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  ${({ disabled }) => css`
    border: 2px solid ${disabled ? color.disable : 'black'};
    > p {
      font-size: 17.5px;
      font-weight: 500;
      color: ${disabled ? color.disable : 'black'};
    }
  `}
`;

export const ArrowImg = styled.img`
  width: 12.3px;
  height: 20px;
`;
