import styled, { css } from 'styled-components';
import { eye, eye_active } from '../../../../assets/default';
import { color } from '../../../style';

export const Input = styled.input<{
  width?: number;
  height?: number;
  disable?: boolean;
  margin?: string;
}>`
  border-radius: 5px;
  outline: none;
  box-sizing: border-box;
  border: 1px solid ${color.fail};
  padding: 0px 10px;
  font-size: 14px;
  ${({ width, height, margin }) => css`
    width: ${width}px;
    height: ${height ? height : 40}px;
    margin: ${margin ? margin : ''};
  `}
`;

export const PasswordInput = styled.div<{
  width: number;
  height?: number;
  margin?: string;
}>`
  border-radius: 5px;
  outline: none;
  box-sizing: border-box;
  ${({ width, height, margin }) => css`
    width: ${width}px;
    height: ${height ? height : 40}px;
    margin: ${margin ? margin : ''};
  `}
  border: 1px solid ${color.fail};
  padding: 0px 15px;
  display: flex;
  align-items: center;
  > input {
    width: ${({ width }) => width - 37}px;
    height: 100%;
    font-size: 14px;
    border: none;
    outline: none;
    padding: 0px;
  }
  > label {
    > input[type='checkbox'] {
      display: none;
    }
    > input[type='checkbox']:checked ~ div {
      background-image: url(${eye_active});
      background-position: 0px 1px;
    }
    > div {
      width: 20px;
      height: 16px;
      background-image: url(${eye});
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
`;
