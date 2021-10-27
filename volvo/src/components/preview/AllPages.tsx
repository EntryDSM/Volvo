import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

export default function AllPages(props: { pdf: any }) {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess(numPages: any) {
    setNumPages(numPages);
  }

  const { pdf } = props;

  return (
    <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
      {Array.from(new Array(numPages), (el, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1} width={680} />
      ))}
    </Document>
  );
}
