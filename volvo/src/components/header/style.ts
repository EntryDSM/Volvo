import { color } from '../../style';
import styled from 'styled-components';
import { logo } from '../../assets/main';

export const Header = styled.div`
  width: 100%;
  height: 60px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  padding: 0px 15%;
  box-sizing: border-box;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  top: 0;
  background-color: white;
  z-index: 10;
`;

export const HeaderIcon = styled.div`
  width: 96px;
  height: 30px;
  background-image: url(${logo});
  cursor: pointer;
`;

export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderDropDown = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  background-color: white;
  > input[type='checkbox'] {
    display: none;
  }
  > div {
    width: 337px;
    transform: translate(-133px, 0px);
    cursor: default;
  }
  > input:checked ~ div {
    height: 403px;
  }
  > input:checked ~ i {
    transform: rotate(0deg);
  }
`;

export const HeaderButton = styled.span`
  font-size: 16px;
  position: relative;
  cursor: pointer;
  transition: all 0.3s;
  outline: none;
  &:hover {
    color: ${color.sub};
  }
`;

export const HeaderMenuUser = styled.p`
  > span {
    font-weight: bold;
  }
  margin-right: 10px;
`;

export const HeaderPartition = styled.div`
  margin: 0px 15px;
`;

export const HeaderDropdownArrowButton = styled.i`
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 12px solid ${color.main};
  transition: all 0.3s;
  transform: rotate(180deg);
`;

export const HeaderDropdownContent = styled.div`
  position: absolute;
  width: 100%;
  z-index: 10;
  height: 0;
  transition: height 0.3s;
  background-color: ${color.backgorund};
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.16);
  top: 30px;
  border-radius: 6px;
  padding: 0px 35px;
  box-sizing: border-box;
  overflow: hidden;
`;

export const HeaderDropdownColumn = styled.div`
  height: 54px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #cbcbcb;
  &:last-child {
    border-bottom: none;
  }
`;

export const HeaderDropdownContentTitle = styled.p`
  width: 80px;
  margin: 0 22px 0px 0px;
  font-size: 16px;
  color: #000000;
`;

export const HeaderDropdownContentText = styled.p`
  margin: 18px 3px 18px 0;
  font-size: 13px;
  font-weight: 300;
`;

export const HeaderDropdownContentProcessText = styled.div<{ isComplete: boolean }>`
  font-size: 13px;
  font-weight: 500;
  color: ${({ isComplete }) => (isComplete ? 'black' : color.main)};
  display: flex;
  align-items: center;
`;

export const HeaderDropdownContentProcessSubText = styled.p`
  font-size: 10px;
  color: #606060;
  margin-top: 3px;
`;

export const HeaderDropdownContentProcessButton = styled.button`
  width: 60px;
  height: 25px;
  border-radius: 2px;
  background-color: ${color.main};
  font-size: 11px;
  font-weight: 500;
  color: #ffffff;
  border: none;
  margin-left: 72px;
  cursor: pointer;
`;

export const HeaderDropdownContentIntroduceText = styled.div`
  font-size: 13px;
`;
