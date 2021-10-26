import { color } from '../../style';
import styled, { css } from 'styled-components';

export const SignUp = styled.div`
  padding-top: 60px;
  width: 100%;
  min-width: 1320px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`;

export const SignUpSubTitle = styled.h3`
  font-size: 20px;
  font-weight: 300;
  text-align: left;
`;

export const SignUpTitle = styled.h1`
  font-size: 35px;
  font-weight: 400;
  text-align: left;
`;

export const SignUpHeaderWrapper = styled.div`
  width: 1270px;
  margin-bottom: 50px;
  margin-top: 90px;
  padding-left: 20px;
  box-sizing: border-box;
`;

export const SignUpRuleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 280px;
  border-top: 1px solid ${color.main};
  border-bottom: 1px solid ${color.main};
  background-color: ${color.light};
`;

export const SignUpRule = styled.div`
  padding: 20px 40px;
  box-sizing: border-box;
  width: 100%;
  height: calc(100% - 26px);
  background-color: white;
  overflow: scroll;
  > pre {
    margin: 10px 0px;
    font-size: 16px;
  }
  > h4 {
    font-size: 20px;
    margin-top: 5px;
    color: ${color.main};
  }
`;

export const SignUpCheckboxWrapper = styled.div`
  width: 100%;
  height: 75px;
  padding: 0px 30px;
  box-sizing: border-box;
  align-items: center;
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid ${color.main};
`;

export const SignUpCheckbox = styled.label`
  display: flex;
  cursor: pointer;
  align-items: center;
  > p {
    font-size: 16px;
  }
  > div {
    background-color: ${color.disable};
    width: 20px;
    height: 20px;
    border-radius: 10px;
    margin-right: 10px;
    position: relative;
    &:after {
      width: 8px;
      height: 3px;
      background-color: white;
      border-radius: 5px;
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-85%, 0%) rotate(45deg);
    }
    &:before {
      width: 10px;
      height: 3px;
      background-color: white;
      border-radius: 10px;
      content: '';
      display: block;

      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-25%, -60%) rotate(135deg);
    }
  }
  > input[type='checkbox']:checked ~ div {
    background-color: ${color.main};
  }
  > input[type='checkbox'] {
    display: none;
  }
`;

export const SignUpContent = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

export const SignUpItem = styled.div`
  width: 100%;
  > div {
    height: 75px;
    border-bottom: 1px solid ${color.disable};
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding-right: 40px;
    > p {
      font-size: 12px;
      > span {
        color: ${color.main};
      }
    }
    > div {
      display: flex;
      align-items: center;
      > div {
        display: flex;
        align-items: center;
      }
    }
  }
`;

export const SignUpItemText = styled.div`
  width: 220px;
  height: 100%;
  text-align: center;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SignUpSubmitButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 70px;
`;

export const SignUpSubmitButton = styled.div<{ disable: boolean }>`
  width: 150px;
  height: 50px;
  border-radius: 8px;
  font-size: 17.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${({ disable }) =>
    disable
      ? css`
          background-color: '#fcfcfc';
          border: 2px solid #e1e1e1;
          color: ${color.fail};
        `
      : css`
          background-color: ${color.backgorund};
          border: 2px solid #6d6d6d;
          color: black;
        `};
  > div {
    width: 12px;
    height: 3px;
    border-radius: 15px;
    background-color: ${props => (props.disable ? color.disable : 'black')};
    margin-left: 20px;
    transform: rotate(45deg) translate(0px, -5px);
    ::after {
      display: block;
      width: 12px;
      height: 3px;
      border-radius: 15px;
      background-color: ${props => (props.disable ? color.disable : 'black')};
      content: '';
      transform: rotate(90deg) translate(5px, -5px);
    }
  }
`;

export const SignUpFormDescription = styled.div`
  font-size: 12px;
  color: #606060;
  > span {
    color: #f57278;
  }
`;
