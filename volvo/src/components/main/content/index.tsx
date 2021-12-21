import React, { FC } from 'react';
import { currentYear } from '../../../constance/default';
import { usePreview } from '../../../util/hooks/preview';
import * as S from '../style';
import MainButton from './MainButton';
interface Props {
  title: string | React.ReactNode;
  getDescription: (date: string) => React.ReactNode;
  buttonText: string;
  isButtonAble: boolean;
  isHaveTerm: boolean;
  isLogin: boolean;
  isFinalSubmitDone: boolean;
  date: string;
  buttonClickHandler: () => void;
}

const MainContent: FC<Props> = ({
  title,
  buttonText,
  getDescription,
  isButtonAble,
  isFinalSubmitDone,
  isLogin,
  date,
  buttonClickHandler,
}) => {
  const preview = usePreview();
  const getStringDate = (date: string) => {
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = ('0' + (1 + dateObj.getMonth())).slice(-2);
    const day = ('0' + dateObj.getDate()).slice(-2);
    const hour = dateObj.getHours();
    const minute = dateObj.getMinutes();

    return `${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분`;
  };

  const finalBtnClickHandler = () => {
    preview.setState.getFinalPdf();
  };

  return (
    <S.MainContentWrapper>
      <S.MainSubTitle>대덕소프트웨어마이스터고등학교</S.MainSubTitle>
      <S.MainTitle>{currentYear}년 신입생 모집</S.MainTitle>
      <S.MainDescription className='mainDescription'>{title}</S.MainDescription>
      <S.MainDescription className={'subDescription'}>
        {getDescription(getStringDate(date))}
      </S.MainDescription>
      {isLogin ? (
        isFinalSubmitDone && buttonText === '원서 작성' ? (
          <MainButton onClick={finalBtnClickHandler} isAble={isButtonAble}>
            {'제출 서류 다운로드'}
          </MainButton>
        ) : (
          <MainButton onClick={buttonClickHandler} isAble={isButtonAble}>
            {buttonText}
          </MainButton>
        )
      ) : (
        <MainButton onClick={buttonClickHandler} isAble={true}>
          로그인
        </MainButton>
      )}
    </S.MainContentWrapper>
  );
};

export default MainContent;
