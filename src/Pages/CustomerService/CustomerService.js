import React, { useState, useEffect } from "react";
import Heading from "../../components/Heading/Heading";
import { csBoxR, csBoxL, sCostOne, sCostTwo } from "./csData";
import {
  CSLine,
  CSContainer,
  CSBox,
  CSPolicy,
  OrderUpdateSection,
  OrderUpdateInputs,
  UpdateButton,
  UpdateBtn,
  CSBoxesWrapper,
  CSBoxContent,
  CSBoxWrapper,
  ShippingContainer,
  ShippingSec,
  ShippingSecHeading,
  ShippingSecContent,
  CSContentWrapper,
} from "./CustomerService.Style";
import { Img } from "../../GlobalStyles";
import DogProfileSmall from "../../assets/images/DogProfileSmall.png";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { FormInput } from "../../components/Forms/UserStyles";
import useBreakpoint from "../../hooks/useBreakPoint";
import CSTab from "./Tab/CSTab";
//ToShowPDF
import PDFModal from "../../components/pdfModal/pdfModal";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import CP from "../../assets/pdf/CS/CP.pdf";
import PP from "../../assets/pdf/CS/PP.pdf";
import TC from "../../assets/pdf/CS/TC.pdf";

const CustomerService = () => {
  const { isDesktop, isTablet, isMobile, isSmallMobile } = useBreakpoint();
  const [active, setActive] = useState(false);
  const [defaultPdfFile, setDefaultPdfFile] = useState();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {isDesktop ? (
        <>
          <CSContainer>
            <CSContentWrapper>
              <Heading level={1}>Customer Service</Heading>
              <CSLine />
              {/* Boxes */}
              <CSBoxesWrapper>
                <CSBoxWrapper>
                  {csBoxL.map((value, index) => (
                    <CSBox key={index}>
                      <h5>{value.title}</h5>
                      <CSBoxContent>{value.text}</CSBoxContent>
                    </CSBox>
                  ))}
                </CSBoxWrapper>
                <CSBoxWrapper>
                  {csBoxR.map((value, index) => (
                    <CSBox key={index}>
                      <h5>{value.title}</h5>
                      <CSBoxContent minHeight={value.boxMinHeight}>
                        {value.text}
                      </CSBoxContent>
                    </CSBox>
                  ))}
                </CSBoxWrapper>
              </CSBoxesWrapper>
              {/* Boxes */}
              <Heading level={1}>Order Update Request</Heading>
              <OrderUpdateSection>
                <OrderUpdateInputs>
                  <h5>Email</h5>
                  <FormInput type="text" placeholder="Enter your email" />
                  <h5>Order Number</h5>
                  <FormInput
                    type="text"
                    placeholder="Enter your order number"
                  />
                </OrderUpdateInputs>
                <UpdateButton>
                  <UpdateBtn>Update Me</UpdateBtn>
                  <Img src={DogProfileSmall} alt="DogProfileSmall" />
                </UpdateButton>
              </OrderUpdateSection>
              {/* ShippingCost */}
              <ShippingContainer>
                {/* LeftShippingSection */}
                <ShippingSec>
                  <ShippingSecHeading>
                    <div>Shipping costs </div>
                    <div>upto 5kg </div>
                    <div>upto 30kg</div>
                  </ShippingSecHeading>
                  {sCostOne.map((value, index) => (
                    <ShippingSecContent key={index}>
                      <div>
                        {" "}
                        <h5>{value.name}</h5>
                      </div>
                      <div>
                        {" "}
                        <h5>{value.fiveKg}</h5>
                      </div>
                      <div>
                        <h5>{value.thirtyKg}</h5>
                      </div>
                    </ShippingSecContent>
                  ))}
                </ShippingSec>
                {/* RightShippingSection */}
                <ShippingSec>
                  <ShippingSecHeading>
                    <div>Shipping costs </div>
                    <div>upto 5kg </div>
                    <div>upto 30kg</div>
                  </ShippingSecHeading>
                  {sCostTwo.map((value, index) => (
                    <ShippingSecContent fontSize={value.fontSize} key={index}>
                      <div>
                        {" "}
                        <h5>{value.name}</h5>
                      </div>
                      <div>
                        {" "}
                        <h5>{value.fiveKg}</h5>
                      </div>
                      <div>
                        <h5>{value.thirtyKg}</h5>
                      </div>
                    </ShippingSecContent>
                  ))}
                </ShippingSec>
              </ShippingContainer>
              {/* ShippingCost */}
              <CSPolicy>
                <Heading
                  level={1}
                  onClick={() => {
                    setActive(!active);
                    setDefaultPdfFile(CP);
                  }}
                >
                  Disclaimer
                </Heading>
                <Heading
                  level={1}
                  onClick={() => {
                    setActive(!active);
                    setDefaultPdfFile(PP);
                  }}
                >
                  Privacy
                </Heading>
                <Heading
                  level={1}
                  onClick={() => {
                    setActive(!active);
                    setDefaultPdfFile(TC);
                  }}
                >
                  Terms and Conditions
                </Heading>
              </CSPolicy>
              <PDFModal active={active} hideModal={() => setActive(false)}>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
                  <Viewer
                    fileUrl={defaultPdfFile}
                    plugins={[defaultLayoutPlugin]}
                  />
                </Worker>
              </PDFModal>
            </CSContentWrapper>
          </CSContainer>
        </>
      ) : (
        (isTablet || isMobile || isSmallMobile) && <CSTab />
      )}
    </>
  );
};

export default CustomerService;
