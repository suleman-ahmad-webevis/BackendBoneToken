import PirchDeck from "../../assets/pdf/Faq/Pirchdeck.pdf";
//ToShowPdf
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";

const PPComp = () => {
  return (
    <>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer fileUrl={PirchDeck} width="60" />
      </Worker>
    </>
  );
};

export default PPComp;
