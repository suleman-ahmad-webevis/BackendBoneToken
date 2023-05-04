import React, { useState, useEffect } from "react";
//ToShowPDF
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import PirchDeck from "../../assets/pdf/PirchDeck.pdf";
import { PDFContainer } from "../WhitePaper/WhitePaper";

const PPComp = () => {
  const [defaultPdfFile] = useState(PirchDeck);
  const defLayoutPlugin = defaultLayoutPlugin();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <PDFContainer>
      {defaultPdfFile && (
        <>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
            <Viewer fileUrl={defaultPdfFile} plugins={[defLayoutPlugin]} />
          </Worker>
        </>
      )}
    </PDFContainer>
  );
};

export default PPComp;
