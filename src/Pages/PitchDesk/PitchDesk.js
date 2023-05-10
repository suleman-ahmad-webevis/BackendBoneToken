import React, { useState } from "react";
//ToShowPDF
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import PirchDeck from "../../assets/pdf/Faq/Pirchdeck.pdf";
import { PDFContainer } from "../WhitePaper/WhitePaper";

const PPComp = () => {
  const [defaultPdfFile] = useState(PirchDeck);
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

export default PPComp;
