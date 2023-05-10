import React, { useState } from "react";
//ToShowPDF
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import styled from "styled-components";
import WhitePaper from "../../assets/pdf/Faq/Whitepaper.pdf";

const WPComp = () => {
  const [defaultPdfFile] = useState(WhitePaper);
  const defLayoutPlugin = defaultLayoutPlugin();

  return (
    <PDFContainer>
      {defaultPdfFile && (
        <>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
            <Viewer fileUrl={defaultPdfFile} plugins={[defLayoutPlugin]} />
          </Worker>
        </>
      )}
    </PDFContainer>
  );
};

export default WPComp;

export const PDFContainer = styled.div`
  height: 1780px;
  max-width: 1180px;
  margin: 0 auto;
`;
