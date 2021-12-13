import React, { FC, useState } from 'react';
import { Document, Page } from 'react-pdf';

interface Props {
  preview: string;
}

const Pdf: FC<Props> = props => {
  const { preview } = props;
  const [page, setPage] = useState<number>(0);
  const array = new Array(page);

  const onDocumentLoadSuccess = (page: number) => {
    setPage(page);
  };

  return (
    <Document file={preview} onLoadSuccess={onDocumentLoadSuccess}>
      {array.map((data, index: number) => {
        return <Page key={index} pageNumber={index + 1} width={680} />;
      })}
    </Document>
  );
};

export default Pdf;
