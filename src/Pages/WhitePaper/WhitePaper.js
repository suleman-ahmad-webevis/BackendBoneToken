import WhitePaper from "../../assets/pdf/Faq/Whitepaper.pdf";
//ToShowPdf
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";

const WPComp = () => {
  return (
    <>
      <div style={{ marginTop: "80px" }}>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer fileUrl={WhitePaper} />;
        </Worker>
      </div>
    </>
  );
};

export default WPComp;
