import React from "react";
import Ethereum from "../../assets/images/ToEarn/Ethereum.png";
import silverBone from "../../assets/images/ToEarn/silverBone.png";
import Dino from "../../assets/images/ToEarn/Dino.png";
import M from "../../assets/images/ToEarn/M.png";
import smallEther from "../../assets/images/ToEarn/smallEther.png";
import probit from "../../assets/images/ToEarn/probit.png";
import uniSwap from "../../assets/images/ToEarn/uniSwap.png";
import kyberSwap from "../../assets/images/ToEarn/kyberSwap.png";
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
          <Img src={Ethereum} alt="ether" />
        </IconsTop>
        <IconsBottom>
          <Img src={silverBone} alt="bone" />
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
              <Img src={smallEther} alt="small" />
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
          <Img src={probit} alt="" />
          <Heading level={10} Black>
            Decentralised Exchanges
          </Heading>
          <Img src={uniSwap} alt="" />
          <Img src={kyberSwap} alt="" />
        </EarnCardRight>
      </EarnCard>
    </EarnCardContainer>
  );
};

export default ToEarnCard;
