import React from "react";
import Binance from "../../assets/images/ToEarn/Binance.png";
import goldenBone from "../../assets/images/ToEarn/goldenBone.png";
import Dino from "../../assets/images/ToEarn/Dino.png";
import M from "../../assets/images/ToEarn/M.png";
import smallBinance from "../../assets/images/ToEarn/smallBinance.png";
import bitForex from "../../assets/images/ToEarn/bitForex.png";
import hotbit from "../../assets/images/ToEarn/hotbit.png";
import pancake from "../../assets/images/ToEarn/pancake.png";
import { Img } from "../../GlobalStyles";
import {
  EarnCardContainer,
  IconsSidebar,
  IconsTop,
  IconsBottom,
  IconsBottomTwo,
  EarnCard,
  EarnCardLeft,
  EarnCardLeftHead,
  EarnCardLeftIconAndEther,
  EarnCardBody,
  BodyItems,
  EarnCardRight,
} from "./EarnCard.Style";
import Heading from "../Heading/Heading";

const ToEarnCard = () => {
  return (
    <EarnCardContainer>
      {/* LeftSection */}
      <IconsSidebar>
        <IconsTop>
          <Img src={Binance} alt="ether" />
        </IconsTop>
        <IconsBottom>
          <Img src={goldenBone} alt="bone" />
          <IconsBottomTwo>
            <Img src={M} alt="m" />
            <Img src={Dino} alt="dino" />
          </IconsBottomTwo>
        </IconsBottom>
      </IconsSidebar>
      {/* RightSection */}
      <EarnCard>
        <EarnCardLeft>
          <EarnCardLeftHead>
            <Heading level={10}>Bone Tokenomics</Heading>
            <EarnCardLeftIconAndEther>
              <Img src={smallBinance} alt="small" />
              <Heading level={10}>ERC20</Heading>
            </EarnCardLeftIconAndEther>
          </EarnCardLeftHead>
          <EarnCardBody>
            <BodyItems>
              <Heading level={10}>Blockchain</Heading>
              <Heading level={10}> Total Supply</Heading>
              <Heading level={10}> Circulating Supply</Heading>
              <Heading level={10}>Market Cap</Heading>
              <Heading level={10}>Price</Heading>
            </BodyItems>
            <BodyItems>
              <Heading level={10}>Ethereum</Heading>
              <Heading level={10}> 100,000,000 </Heading>
              <Heading level={10}> 100,000,000</Heading>
              <Heading level={10}>$348790 </Heading>
              <Heading level={10}> $0.0031</Heading>
            </BodyItems>
          </EarnCardBody>
        </EarnCardLeft>
        <EarnCardRight>
          <Heading level={10} Black>
            Centralised Exchanges
          </Heading>
          <Img src={bitForex} alt="" />
          <Img src={hotbit} alt="" />
          <Heading level={10} Black>
            Decentralised Exchanges
          </Heading>
          <Img src={pancake} alt="" />
        </EarnCardRight>
      </EarnCard>
    </EarnCardContainer>
  );
};

export default ToEarnCard;
