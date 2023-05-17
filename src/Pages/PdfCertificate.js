import React, { useRef } from "react";
import GrayLPaw from "../assets/images/Certificate/GrayLPaw.png";
import GoldenLPaw from "../assets/images/Certificate/GoldenLPaw.png";
import styled from "styled-components";
import { Img } from "../GlobalStyles";
import generatePdf from "../utils/GeneratePdf";
import FirstCer from "../components/Certificate/FirstSec";
import CerHeader from "../components/Certificate/CerHeader/CerHeader";
// import SecSec from "../components/Certificate/SecSec";

const PdfCertificate = () => {
  const pdfContainerRef = useRef(null);

  return (
    <>
      <button onClick={() => generatePdf(pdfContainerRef.current.id)}>
        Generate Invoice
      </button>
      <CerContainer id="pdf" ref={pdfContainerRef}>
        <CerHeader />
        <CerSections>
          <FirstCer />
          {/* <SecSec /> */}
        </CerSections>
        <Img
          src={GoldenLPaw}
          style={{
            position: "absolute",
            bottom: "0px",
            left: "10px",
            width: "200px",
          }}
        />
        <Img
          src={GrayLPaw}
          style={{
            position: "absolute",
            bottom: "0px",
            right: "10px",
            width: "200px",
          }}
        />
      </CerContainer>
      {/* Second */}
      {/* <CerrContainer id="pdfff" ref={pdfContainerRef}>
          <CerHeader />
          <CerSections>
            <FirstCer />
            -----------
            <SecSec />
          </CerSections>
          <Img
            src={GoldenLPaw}
            style={{
              position: "absolute",
              bottom: "0px",
              left: "10px",
              width: "200px",
            }}
          />
          <Img
            src={GrayLPaw}
            style={{
              position: "absolute",
              bottom: "0px",
              right: "10px",
              width: "200px",
            }}
          />
        </CerrContainer> */}
    </>
  );
};

export default PdfCertificate;

export const CerContainer = styled.div`
  position: relative;
  height: 320vh;
  background: #f0f7fc;
  font-size: 24px;
`;

export const CerrContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 320vh; */
  background: #f0f7fc;
  font-size: 24px;
`;

export const CerSections = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 60px;
`;
