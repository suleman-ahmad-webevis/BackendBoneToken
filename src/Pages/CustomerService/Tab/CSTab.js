import React from "react";
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

const CSTab = () => {
  const { isTablet, isSmallMobile, isMobile } = useBreakpoint();
  return (
    <CSTabContainer>
      {(isSmallMobile || isMobile) && <CommonMobNav Width="100%" />}
      {(isTablet || isSmallMobile || isMobile) && <CommonTabNav Width="100%" />}
      <CSHeading>
        <h5>Customer Service</h5>
      </CSHeading>
      {csFirstBox.map((value) => (
        <CSCard>
          <h5>{value.title}</h5>
          {value.text}
        </CSCard>
      ))}
      {csSecondBox.map((value) => (
        <CSCard>
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
          {sCostOne.map(({ name, fiveKg, thirtyKg, fontSize }) => (
            <>
              <Country>
                <h5>Country</h5>
                <CountryName fontSize={fontSize}>{name}</CountryName>
              </Country>
              <Country>
                <h5>Country</h5>
                <CountryName fontSize={fontSize}>{fiveKg}</CountryName>
              </Country>
              <Country>
                <h5>Country</h5>
                <CountryName fontSize={fontSize}>{thirtyKg}</CountryName>
              </Country>
            </>
          ))}
          {sCostTwo.map(({ name, fiveKg, thirtyKg, fontSize }) => (
            <>
              <Country>
                <h5>Country</h5>
                <CountryName fontSize={fontSize}>{name}</CountryName>
              </Country>
              <Country>
                <h5>Country</h5>
                <CountryName fontSize={fontSize}>{fiveKg}</CountryName>
              </Country>
              <Country>
                <h5>Country</h5>
                <CountryName fontSize={fontSize}>{thirtyKg}</CountryName>
              </Country>
            </>
          ))}
        </CountriesSection>
      </ShippingCostSection>
      <CSPolicySection>
        <h5>Disclaimer</h5>
        <h5>Privacy</h5>
        <h5>Terms and Conditions</h5>
      </CSPolicySection>
    </CSTabContainer>
  );
};

export default CSTab;
