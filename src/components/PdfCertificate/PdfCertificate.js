import React from "react";
import styled from "styled-components";
import CertificateBG from "../../assets/images/Certificate/CertificateBG.png";
import BasicInfo from "./BasicInfo";
import DogInfo from "./DogInfo";
import VeterinaryInfo from "./VeterinaryInfo";
import InsuranceInfo from "./InsuranceInfo";
import DogShowInfo from "./DogShowInfo";

const PdfCertificateComp = () => {
  const regDog = JSON.parse(sessionStorage.getItem("registerDog"));
  const regOwner = JSON.parse(sessionStorage.getItem("registerOwner"));
  return (
    <PdfCertificateComponent>
      <BasicInfo regDog={regDog} regOwner={regOwner} />
      <DogInfo regDog={regDog}/>
      <VeterinaryInfo />
      <div style={{ display: "flex" }}>
        <InsuranceInfo />
        <DogShowInfo />
      </div>
    </PdfCertificateComponent>
  );
};

export default PdfCertificateComp;

const PdfCertificateComponent = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 28px;
  width: 52%;
  /* margin-top: 270px; */
  background-image: url(${CertificateBG});
  background-repeat: no-repeat;
  background-position: center;
`;
