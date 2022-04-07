import React, { FC, useEffect, useMemo } from 'react';
import * as S from '../style';
import Input from '../../default/input';
import useInformation from '../../../util/hooks/information';

interface Props {
  totalScore: number;
  setGedScore: (payload: number) => void;
}

const TotalScoreColumn: FC<Props> = props => {
  const { setGedScore, totalScore } = props;
  const { state } = useInformation();

  const totalScoreChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGedScore(Number(event.target.value));
  };

  useEffect(() => {
    if (state.isSuccessSaveGedScore === false)
      alert('검정고시 평균 점수는 60점과 100점 사이로 입력해주세요.');
  }, [state.isSuccessSaveGedScore]);

  const totalScoreInput = useMemo(() => {
    return (
      <Input
        width={114}
        height={42}
        inputChangeHandler={totalScoreChangeHandler}
        value={totalScore}
        name='totalScore'
      />
    );
  }, [totalScore]);

  return (
    <S.InformationLine width={904}>
      <S.InformationLineTitle>
        <span>*</span>검정고시 평균
      </S.InformationLineTitle>
      {totalScoreInput}
      <S.Unit>점</S.Unit>
    </S.InformationLine>
  );
};

export default TotalScoreColumn;
