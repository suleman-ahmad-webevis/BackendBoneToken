import React from "react";
import {
  BalanceWrapper,
  ChooseImg,
  ChooseSection,
  DataCol,
  From,
  FromTo,
  ImgText,
  Price,
  SwapBtn,
  SwapSection,
  SwapTitle,
  SwapWrapper,
  TTCardHeading,
  TTData,
  TTabCard,
  TTabCards,
  TTabContainer,
  TTabHeading,
  TokenTabNav,
} from "./TokenTab.style";
import { Img } from "../../GlobalStyles";
import { boneTokenData } from "../../Pages/Tokenomics/TokenomicsData";
import { ChooseBuy } from "./ChooseBuyData";
import Line from "../../assets/images/Tokenomics/Tab/Line.png";
import Swap from "../../assets/images/Tokenomics/Tab/Swap.png";
import SSmall from "../../assets/images/Tokenomics/Tab/SSmall.png";
import CSmall from "../../assets/images/Tokenomics/Tab/CSmall.png";
import useBreakpoint from "../../hooks/useBreakPoint";
import CommonMobNav from "../CommonMTNav/CommonMobNav";
import CommonTabNav from "../CommonMTNav/CommonTabNav";
import { CardData } from "./CardData";
import Back from "../Back/Back";

const TokenTab = () => {
  const { isTablet, isSmallMobile, isMobile } = useBreakpoint();
  return (
    <>
      <TTabContainer>
        <TokenTabNav>
          {(isSmallMobile || isMobile) && <CommonMobNav />}
          {(isTablet || isSmallMobile || isMobile) && <CommonTabNav />}
        </TokenTabNav>
        <Back />
        <TTabHeading>Tokenomics</TTabHeading>
        <TTabCards>
          {CardData.map(
            ({ imgOne, heading, imgTwo, bgColor, headBgColor }, index) => (
              <>
                <TTabCard bgColor={bgColor} key={index}>
                  <TTCardHeading headBgColor={headBgColor}>
                    <ImgText>
                      <Img src={imgOne} alt="imgOne" />
                      <h5>{heading}</h5>
                    </ImgText>
                    <Img src={imgTwo} alt="imgTwo" />
                  </TTCardHeading>
                  <TTData>
                    {boneTokenData.map(({ title, value }, index) => (
                      <>
                        <DataCol key={index}>
                          <h5 style={{ textAlign: "start" }}>{title}</h5>
                        </DataCol>
                        <DataCol>
                          {" "}
                          <h5 style={{ textAlign: "end", fontWeight: "700" }}>
                            {value}
                          </h5>
                        </DataCol>
                      </>
                    ))}
                  </TTData>
                </TTabCard>
              </>
            )
          )}
        </TTabCards>
        {ChooseBuy.map(
          (
            { titleOne, imgOne, two, titleTwo, imgThree, paddingTop },
            index
          ) => (
            <ChooseSection paddingTop={paddingTop} key={index}>
              <h5>{titleOne}</h5>
              <ChooseImg>
                <Img src={imgOne} alt="BitForex" />
                {two}
              </ChooseImg>
              <h5>{titleTwo}</h5>
              <Img
                src={imgThree}
                alt="BitForex"
                style={{ alignSelf: "center" }}
              />
            </ChooseSection>
          )
        )}
        <SwapSection>
          <SwapTitle>
            <h5>Swap</h5>
            <Img src={Line} alt="Line" />
          </SwapTitle>
          <SwapWrapper>
            <FromTo>
              <From>
                <h5>From:</h5> <Img src={SSmall} alt="SSmall" />{" "}
                <h5 style={{ color: "#0E626D" }}>KC</h5>
              </From>
              <Price>$0.00</Price>
              <BalanceWrapper>
                <h5 style={{ color: "#637592" }}>Balance: 0.00</h5>{" "}
                <h5 style={{ color: "#3D6EFF" }}>MAX</h5>
              </BalanceWrapper>
            </FromTo>
            <Img src={Swap} alt="Swap" />
            <FromTo style={{ paddingLeft: "10px" }}>
              <From>
                <h5>To:</h5> <Img src={CSmall} alt="CSmall" />{" "}
                <h5 style={{ color: "#0E626D" }}>$DOG</h5>
              </From>
              <Price>$0.00</Price>
              <BalanceWrapper>
                <h5 style={{ color: "#637592" }}>Balance: 0.00</h5>{" "}
                <h5 style={{ color: "#3D6EFF" }}>MAX</h5>
              </BalanceWrapper>
            </FromTo>
          </SwapWrapper>
          <SwapBtn>
            <h5>Swap</h5>
          </SwapBtn>
        </SwapSection>
      </TTabContainer>
    </>
  );
};

export default TokenTab;
