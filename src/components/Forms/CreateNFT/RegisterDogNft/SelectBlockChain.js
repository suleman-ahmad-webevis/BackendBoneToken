import React from "react";
import {
  BChain,
  BChainsWrapper,
  SBCContainer,
  SBCHeading,
} from "./CreateNFT.style";
import Binance from "../../../../assets/images/CreateNFT/SBC/Binance.png";
import Solana from "../../../../assets/images/CreateNFT/SBC/Solana.png";
import Bitcoin from "../../../../assets/images/CreateNFT/SBC/Bitcoin.png";
import Ethereum from "../../../../assets/images/CreateNFT/SBC/Ethereum.png";
import Skip from "../../../../assets/images/CreateNFT/Skip.png";
import { Img } from "../../../../GlobalStyles";
import { NextButton } from "../../UserStyles";
import { useNavigate } from "react-router-dom";

const SelectBlockChain = () => {
  const navigate = useNavigate();
  return (
    <SBCContainer>
      <SBCHeading>Select Blockchain to create your Pet Dog NFT</SBCHeading>
      <BChainsWrapper>
        <BChain>
          <Img src={Solana} />
        </BChain>
        <BChain>
          <Img src={Bitcoin} />
        </BChain>
        <BChain>
          <Img src={Ethereum} />
        </BChain>
        <BChain>
          <Img src={Binance} />
        </BChain>
      </BChainsWrapper>
      <NextButton onClick={() => navigate("/create-dog-nft/register-dogData")}>
        <Img src={Skip} alt="skip" />
      </NextButton>
    </SBCContainer>
  );
};

export default SelectBlockChain;
