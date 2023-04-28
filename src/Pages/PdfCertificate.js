import React, { useRef } from "react";
import GrayLPaw from "../assets/images/Certificate/GrayLPaw.png";
import GoldenLPaw from "../assets/images/Certificate/GoldenLPaw.png";
import styled from "styled-components";
import { Img } from "../GlobalStyles";
import PdfCertificateComp from "../components/PdfCertificate/PdfCertificate";
import CertificateHead from "../assets/images/Certificate/CertificateHead.png";
import generatePdf from "../utils/GeneratePdf";

const PdfCertificate = () => {
  const pdfContainerRef = useRef(null);

  return (
    <>
      <button onClick={() => generatePdf(pdfContainerRef.current.id)}>
        Generate Invoice
      </button>
      <PdfContainer id="pdf" ref={pdfContainerRef}>
        <Img
          src={CertificateHead}
          style={{
            position: "absolute",
            top: "0px",
            width: "100%",
          }}
        />
        <Img
          src={GoldenLPaw}
          style={{
            position: "absolute",
            bottom: "0px",
            left: "0px",
            width: "200px",
          }}
        />
        <Img
          src={GrayLPaw}
          style={{
            position: "absolute",
            bottom: "0px",
            right: "0px",
            width: "200px",
          }}
        />
        <PdfCertificateComp />
      </PdfContainer>
    </>
  );
};

export default PdfCertificate;

export const PdfContainer = styled.div`
  height: 320vh;
  background: #f0f7fc;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;
