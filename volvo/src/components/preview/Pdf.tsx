import React, { FC, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import * as S from './style';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface Props {
  preview: Blob | null;
}

const Pdf: FC<Props> = props => {
  const { preview } = props;
  const [numPages, setNumPages] = useState<number>(0);

  const onDocumentLoadSuccess = (pdf: any) => {
    setNumPages(pdf.numPages);
  };

  return (
    <Document file={preview} onLoadSuccess={onDocumentLoadSuccess}>
      {Array.from(new Array(numPages), (el, index) => (
        <S.Pages key={`page_${index + 1}`} pageNumber={index + 1} width={680} />
      ))}
    </Document>
  );
};

export default Pdf;
