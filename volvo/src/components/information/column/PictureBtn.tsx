import React, { FC, useEffect, useMemo } from 'react';
import * as S from '../style';
import { imgIcon } from '../../../assets/Information';

interface Props {
  width: number;
  height: number;
  paddingTop: number;
  paddingSide: number;
  top: number;
  pictureUrl: string;
  photoFileName: string;
  isSuccessSaveUserPicture: boolean | undefined;
  setImageUrl: (payload: string) => void;
  setUserPicture: (payload: File) => void;
}

const PictureBtn: FC<Props> = props => {
  const {
    setImageUrl,
    setUserPicture,
    pictureUrl,
    width,
    height,
    paddingTop,
    paddingSide,
    top,
    photoFileName,
    isSuccessSaveUserPicture,
  } = props;

  const fileChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let filedes: string = '';
    if (event.currentTarget.files) {
      filedes = URL.createObjectURL(event.currentTarget.files[0]);
    }
    if (event.currentTarget.files) setUserPicture(event.currentTarget.files[0]);
    setImageUrl(filedes);
  };

  useEffect(() => {
    if (isSuccessSaveUserPicture === false)
      alert('사진 저장을 실패하였습니다. 다시 시도해 주세요. 사진 용량은 10MB 이하여야 합니다.');
  }, [isSuccessSaveUserPicture]);

  const picture = useMemo(() => {
    if (photoFileName) {
      if (pictureUrl) {
        return <S.Picture src={pictureUrl} />;
      } else return <S.Picture src={photoFileName} />;
    } else if (pictureUrl) return <S.Picture src={pictureUrl} />;
    else
      return (
        <>
          <img src={imgIcon} alt='img' />
          <p>증명사진을 첨부해주세요</p>
          <p>(JPG,JPEG,JPEG2000,PNG)</p>
          <p>
            <span>*</span>
            용량 10MB이하
          </p>
        </>
      );
  }, [pictureUrl, photoFileName]);

  return (
    <>
      <S.PictureBtn
        width={width}
        height={height}
        paddingTop={paddingTop}
        paddingSide={paddingSide}
        top={top}
        htmlFor='img'
      >
        {picture}
      </S.PictureBtn>
      <input
        type='file'
        accept='.jpg, .jpge, .jpg2000, .png'
        id='img'
        style={{ display: 'none' }}
        onChange={fileChangeHandler}
      />
    </>
  );
};

export default PictureBtn;
