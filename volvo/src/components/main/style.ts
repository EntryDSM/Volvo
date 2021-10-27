import styled, { css } from 'styled-components';
import { color } from '../../style';
import { background } from '../../assets/main';

export const Main = styled.div`
  width: 100%;
  min-height: 100vh;
  min-width: 1320px;
  box-sizing: border-box;
`;

export const MainBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  min-height: 900px;
  overflow: hidden;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 110%;
  z-index: -100;
  @media (max-width: 1320px) {
    width: 1320px;
  }
`;

export const MainWrapper = styled.div`
  padding: 0px 250px;
  padding-top: 120px;
  box-sizing: border-box;
  justify-content: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const MainContentWrapper = styled.div`
  > .mainDescription {
    margin-bottom: 63px;
  }
  > .subDescription {
    margin-bottom: 160px;
    margin-top: 20px;
  }
`;

export const MainSubTitle = styled.h3`
  font-size: 20px;
  font-weight: 300;
`;

export const MainTitle = styled.h1`
  font-size: 35px;
  margin-bottom: 100px;
  font-weight: 400;
`;

export const MainDescription = styled.p`
  > p {
    font-size: 30px;
    > span {
      color: ${color.main};
      font-weight: 500;
      font-size: 34px;
    }
  }
`;

export const MainButton = styled.button<{ isAble: boolean }>`
  width: calc(360 * (4 / 5)) px;
  height: calc(100 * (4 / 5)) px;
  border-radius: 18px;
  background-color: ${props => (props.isAble ? color.main : color.fail)};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  border: none;
  box-sizing: content-box;
  flex-shrink: 0;
  transition: all 0.3s;
  outline: none;
  cursor: ${props => (props.isAble ? 'pointer' : 'not-allowed')};
  > div {
    width: 17px;
    height: 3px;
    border-radius: 15px;
    background-color: white;
    margin-left: 30px;
    transform: rotate(45deg) translate(-2px, -7px);
    ::after {
      display: block;
      width: 17px;
      height: 3px;
      border-radius: 15px;
      background-color: white;
      content: '';
      transform: rotate(90deg) translate(7px, -7px);
    }
  }
  > p {
    color: white;
    font-size: 30px;
  }
`;

export const Progress = styled.div`
  div:nth-child(1) > .Icon > .background {
    transition-delay: 200ms;
  }
  div:nth-child(3) > .Icon > .background {
    transition-delay: 400ms;
  }
  div:nth-child(5) > .Icon > .background {
    transition-delay: 600ms;
  }
  div:nth-child(7) > .Icon > .background {
    transition-delay: 800ms;
  }
`;

export const ProgressText = styled.p<{ isNow: boolean; isPassed: boolean }>`
  color: ${({ isNow, isPassed }) => (isNow ? color.main : isPassed ? 'black' : color.fail)};
  font-size: 25px;
  font-weight: 500;
`;

export const ProgressSubText = styled.p`
  font-size: 23px;
  > span {
    color: ${color.main};
  }
`;

export const ProgressContent = styled.div`
  display: flex;
  margin: 20px 0px 20px 0px;
`;

export const ProgressIcon = styled.div<{ isPassed: boolean }>`
  width: 95px;
  height: 95px;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.16);
  margin: 0px 65px;
  border-radius: 95px;
  background-color: white;
  overflow: hidden;
  position: relative;
  transition: all 1s;
  > .background {
    width: 100%;
    height: 100%;
    opacity: ${({ isPassed }) => (isPassed ? '1' : '0')};
    transition: all 0.5s;
    transition-timing-function: linear;
    position: absolute;
    background-color: ${color.main};
  }
  .iconWrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
    ${props =>
      props.isPassed
        ? css`
            > .icon {
              transform: translate(-2px, 10px);
              > div {
                background-color: ${color.backgorund};
                height: 4px;
              }
              > div:first-child {
                width: 21px;
                border-radius: 21px;
                transform: rotate(45deg);
              }
              > div:last-child {
                width: 44px;
                border-radius: 21px;
                transform: translate(10px, -11px) rotate(140deg);
              }
            }
          `
        : css`
            > .icon {
              > div {
                background-color: ${color.fail};
                height: 4px;
              }
              > div:first-child {
                width: 56px;
                border-radius: 21px;
                transform: rotate(45deg);
              }
              > div:last-child {
                border-radius: 21px;
                transform: translate(0px, -2px) rotate(135deg);
              }
            }
          `};
  }
`;

export const ProgressBlankBar = styled.div`
  width: 4px;
  height: 59px;
  border-radius: 1000px;
  background-color: ${color.middleBar};
  margin-left: 290px;
`;

export const ProgressTextWrapper = styled.div`
  width: 180px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  flex-shrink: 0;
`;
