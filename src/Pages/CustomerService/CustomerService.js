import React, { useEffect } from "react";
import Heading from "../../components/Heading/Heading";
import { csBoxR, csBoxL, sCostOne, sCostTwo } from "./csData";
import {
  CSPage,
  CSLine,
  CSContainer,
  CSLeft,
  CSBoxes,
  CSBox,
  CSPolicy,
  CSRight,
  OrderUpdateSection,
  ShippingCostContainer,
  OrderUpdateInputs,
  ShippingSection,
  ShippingRight,
  ShippingLeft,
  Input,
  UpdateButton,
  Flag,
  CountryFlags,
  UpdateBtn,
  CSRSidebar,
  CsBoxWrapper,
  CSBoxesWrapper,
  CSBoxContent,
  CSBoxWrapper,
  ShippingContainer,
  ShippingSecL,
  ShippingSecR,
  ShippingSec,
  ShippingSecHeading,
  ShippingSecContent,
  ShippingBox,
  CSContentWrapper,
} from "./CustomerService.Style";
import { Img } from "../../GlobalStyles";
import DogProfileSmall from "../../assets/images/DogProfileSmall.png";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { FormInput } from "../../components/Forms/UserStyles";
import useBreakpoint from "../../hooks/useBreakPoint";
import CSTab from "./Tab/CSTab";

const CustomerService = () => {
  const { isDesktop, isTablet, isMobile, isSmallMobile } = useBreakpoint();
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
                  {csBoxL.map((value) => (
                    <CSBox>
                      <h5>{value.title}</h5>
                      <CSBoxContent>{value.text}</CSBoxContent>
                    </CSBox>
                  ))}
                </CSBoxWrapper>
                <CSBoxWrapper>
                  {csBoxR.map((value) => (
                    <CSBox>
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
                  {sCostOne.map((value) => (
                    <ShippingSecContent>
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
                  {sCostTwo.map((value) => (
                    <ShippingSecContent fontSize={value.fontSize}>
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
                <Heading level={1}>Disclaimer</Heading>
                <Heading level={1}>Privacy</Heading>
                <Heading level={1}>Terms and Conditions</Heading>
                {/* <Img
          src={WhitePaper}
          alt="WhitePaper"
          onClick={() => setActive(!active)}
        /> */}
              </CSPolicy>
            </CSContentWrapper>
          </CSContainer>
          {/* <PDFModal active={active} hideModal={() => setActive(false)}>
  //   <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
  //     <Viewer fileUrl={defaultPdfFile} plugins={[defLayoutPlugin]} />
  //   </Worker>
  // </PDFModal> */}
        </>
      ) : (
        (isTablet || isMobile || isSmallMobile) && <CSTab />
      )}
    </>
  );
};

export default CustomerService;
