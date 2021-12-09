import React, { FC } from 'react';
import * as S from './style';
import MainContent from './content';
import Progress from './progress';
import { processType } from '../../modules/redux/reducer/status/interface';
import { statusType } from '../../constance/main';
import { useNavigate } from 'react-router-dom';
import { error } from '../../types';

interface Props {
  status: statusType;
  process: processType;
  isLogin: boolean;
  date: string;
  error: error;
  defaultMainButtonClickHandler: () => void;
}

const Main: FC<Props> = ({ status, process, isLogin, date, defaultMainButtonClickHandler }) => {
  const navigate = useNavigate();
  const mainButtonClickHandler = () => {
    if (isLogin) {
      if (process.isOutsideUrl) {
        window.location.href = process.uri;
      } else {
        navigate(process.uri);
      }
    } else {
      defaultMainButtonClickHandler();
    }
  };
  return (
    <S.Main>
      <S.MainBackground />
      <S.MainWrapper>
        <MainContent
          {...process}
          isLogin={isLogin}
          buttonClickHandler={mainButtonClickHandler}
          date={date}
        />
        <Progress status={status} date={date} />
      </S.MainWrapper>
    </S.Main>
  );
};

export default Main;
