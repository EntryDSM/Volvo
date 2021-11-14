import React, { FC, useMemo } from 'react';
import PageBtn from './PageBtn';
import * as S from './style';

interface Props {
  isDisabled: boolean;
  nextPagePath: string;
  prevPagePath: string;
  currentPage: number;
  isQualification: boolean;
  isSuccess: boolean | undefined;
  setModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Pagination: FC<Props> = props => {
  const { currentPage, isQualification, isDisabled } = props;
  const numberArray = [1, 2, 3, 4, 5];
  const gedNumberArray = [1, 2, 3, 4];

  const paginationCircle = useMemo(() => {
    if (isQualification)
      return gedNumberArray.map(data => {
        if (data === currentPage) return <S.Circle key={data} />;
        else return <S.SmallCircle key={data} />;
      });
    else
      return numberArray.map(data => {
        if (data === currentPage) return <S.Circle key={data} />;
        else return <S.SmallCircle key={data} />;
      });
  }, [isQualification, currentPage]);

  return (
    <S.Pagination>
      <PageBtn isLeft={true} disabled={false} {...props} />
      <div>{paginationCircle}</div>
      <PageBtn isLeft={false} disabled={isDisabled} {...props} />
    </S.Pagination>
  );
};

export default Pagination;
