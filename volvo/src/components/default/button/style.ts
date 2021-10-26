import styled, { css } from 'styled-components';
import { color } from '../../../style';

export const Button = styled.button<{
  width?: number;
  height?: number;
  disable: boolean;
  margin?: string;
}>`
  cursor: pointer;
  ${({ width, height, disable, margin }) => css`
    width: ${width ? width : 78}px;
    height: ${height ? height : 40}px;
    border: 1px solid ${color.fail};
    background-color: ${disable ? '#f1f1f1' : color.backgorund};
    margin: ${margin ? margin : ''};
    border-radius: 8px;
    color: ${disable ? '#606060' : 'black'};
  `}
`;
