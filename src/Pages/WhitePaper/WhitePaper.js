import React, { useState } from "react";
//ToShowPDF
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import styled from "styled-components";
// import PDFModal from "../../components/pdfModal/pdfModal";
// import WhitePaperPDF from "../../assets/pdf/WhitePaper.pdf";
const WPComp = () => {
  // const [active, setActive] = useState(true);
  const [defaultPdfFile] = useState();
  const defLayoutPlugin = defaultLayoutPlugin();

  return (
    // <PDFModal active={active} hideModal={() => setActive(false)}>
    <WPContainer>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
        <Viewer fileUrl={defaultPdfFile} plugins={[defLayoutPlugin]} />
      </Worker>
    </WPContainer>
    // </PDFModal>
  );
};

export default WPComp;

export const WPContainer = styled.div`
  margin-top: 20px;
  width: 80%;
  margin: auto;
`;
