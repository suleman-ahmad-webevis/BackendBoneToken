import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function generatePdf(elemId) {
  html2canvas(document.querySelector(`#${elemId}`)).then((canvas) => {
    const imgData = canvas.toDataURL("image/png", 1.0);
    //pdf document
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });
    pdf.internal.scaleFactor = 1;
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    // const pdfHeight = (1600 * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("DogDataOwnerCertificate.pdf");
  });
}

export default generatePdf;
