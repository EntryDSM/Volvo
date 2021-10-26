import styled from 'styled-components';
import { color } from '../../../style';

export const Checkbox = styled.label`
  display: flex;
  align-items: center;
  > p {
    margin-right: 18px;
  }
  > div {
    width: 18px;
    height: 18px;
    border-radius: 3px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    > input[type='checkbox'] {
      display: none;
    }
    > div {
      width: 10px;
      height: 10px;
      border-radius: 3px;
      background-color: ${color.main};
      display: none;
    }
    > input[type='checkbox']:checked ~ div {
      display: block;
    }
  }
`;
