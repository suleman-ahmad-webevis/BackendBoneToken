import React, { useState } from "react";
import { csFirstBox, csSecondBox } from "./CSData";
import { Img } from "../../../GlobalStyles";
import UpdateMe from "../../../assets/images/CustomerService/UpdateMe.png";
import Chat from "../../../assets/images/CustomerService/Chat.png";
import CommonMobNav from "../../../components/CommonMTNav/CommonMobNav";
import useBreakpoint from "../../../hooks/useBreakPoint";
import CommonTabNav from "../../../components/CommonMTNav/CommonTabNav";
import {
  CSCard,
  CSHeading,
  CSPolicySection,
  CSTabContainer,
  CountriesSection,
  Country,
  CountryName,
  OInputSection,
  OrderUpdateSection,
  ShippingCostHeading,
  ShippingCostSection,
  UpdateSection,
} from "./CSTab.style";
import {
  sCostOne,
  sCostTwo,
} from "../../../components/CustomerService/Tab/CSTabData";
//ToShowPDF
import CP from "../../../assets/pdf/CS/CP.pdf";
import PP from "../../../assets/pdf/CS/PP.pdf";
import TC from "../../../assets/pdf/CS/TC.pdf";
import PDFModal from "../../../components/pdfModal/pdfModal";
//ToShowPdf
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import Back from "../../../components/Back/Back";

const CSTab = () => {
  const { isTablet, isSmallMobile, isMobile } = useBreakpoint();
  const [active, setActive] = useState(false);
  const [defaultPdfFile, setDefaultPdfFile] = useState();

  return (
    <CSTabContainer>
      {(isSmallMobile || isMobile) && <CommonMobNav />}
      {(isTablet || isSmallMobile || isMobile) && <CommonTabNav />}
      <Back />
      <CSHeading>
        <h5>Customer Service</h5>
      </CSHeading>
      {csFirstBox.map((value, index) => (
        <CSCard key={index}>
          <h5>{value.title}</h5>
          {value.text}
        </CSCard>
      ))}
      {csSecondBox.map((value, index) => (
        <CSCard key={index}>
          <h5>{value.title}</h5>
          {value.text}
        </CSCard>
      ))}
      <OrderUpdateSection>
        <h5>Order Update Request</h5>
        <OInputSection>
          <p>Email *</p>
          <input placeholder="Email" />
        </OInputSection>
        <OInputSection>
          <p>Order Number *</p>
          <input placeholder="************" />
        </OInputSection>
        <UpdateSection>
          <Img src={UpdateMe} alt="UpdateMe" />
          <Img src={Chat} alt="Chat" />
        </UpdateSection>
      </OrderUpdateSection>
      <ShippingCostSection>
        <ShippingCostHeading>
          <h5 style={{ width: "33%" }}> Shipping costs</h5>
          <h5 style={{ width: "33%" }}>up to 5kg</h5>
          <h5 style={{ width: "33%" }}>up to 30kg</h5>
        </ShippingCostHeading>
        <CountriesSection>
          {sCostOne.map(({ name, fiveKg, thirtyKg, fontSize }, index) => (
            <>
              <Country key={index}>
                <h5>Country</h5>
                <CountryName fontSize={fontSize}>{name}</CountryName>
              </Country>
              <Country key={index}>
                <h5>Country</h5>
                <CountryName fontSize={fontSize}>{fiveKg}</CountryName>
              </Country>
              <Country key={index}>
                <h5>Country</h5>
                <CountryName fontSize={fontSize}>{thirtyKg}</CountryName>
              </Country>
            </>
          ))}
          {sCostTwo.map(({ name, fiveKg, thirtyKg, fontSize }, index) => (
            <>
              <Country key={index}>
                <h5>Country</h5>
                <CountryName fontSize={fontSize}>{name}</CountryName>
              </Country>
              <Country key={index}>
                <h5>Country</h5>
                <CountryName fontSize={fontSize}>{fiveKg}</CountryName>
              </Country>
              <Country key={index}>
                <h5>Country</h5>
                <CountryName fontSize={fontSize}>{thirtyKg}</CountryName>
              </Country>
            </>
          ))}
        </CountriesSection>
      </ShippingCostSection>
      <CSPolicySection>
        <h5
          onClick={() => {
            setActive(!active);
            setDefaultPdfFile(CP);
          }}
        >
          Disclaimer
        </h5>
        <h5
          onClick={() => {
            setActive(!active);
            setDefaultPdfFile(PP);
          }}
        >
          Privacy
        </h5>
        <h5
          onClick={() => {
            setActive(!active);
            setDefaultPdfFile(TC);
          }}
        >
          Terms and Conditions
        </h5>
      </CSPolicySection>
      <PDFModal active={active} hideModal={() => setActive(false)}>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer fileUrl={defaultPdfFile} />;
        </Worker>
      </PDFModal>
    </CSTabContainer>
  );
};

export default CSTab;
