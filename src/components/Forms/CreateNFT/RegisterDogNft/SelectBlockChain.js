import React, { useState } from "react";
import {
  AddQRSec,
  BChain,
  BChainsWrapper,
  EnterQR,
  SBCContainer,
  SBCHeading,
  QR,
} from "./CreateNFT.style";
import Binance from "../../../../assets/images/CreateNFT/SBC/Binance.png";
import Solana from "../../../../assets/images/CreateNFT/SBC/Solana.png";
import Bitcoin from "../../../../assets/images/CreateNFT/SBC/Bitcoin.png";
import Ethereum from "../../../../assets/images/CreateNFT/SBC/Ethereum.png";
import Skip from "../../../../assets/images/CreateNFT/Skip.png";
import { Img } from "../../../../GlobalStyles";
import { NextButton } from "../../UserStyles";
import { useNavigate } from "react-router-dom";
import QRCode from "react-qr-code";

const SelectBlockChain = () => {
  const navigate = useNavigate();

  const [blockChain, setBlockChain] = useState(null);

  const handleBlockChain = (param) => {
    setBlockChain(param);
  };
  return (
    <SBCContainer>
      <SBCHeading>Select Blockchain to create your Pet Dog NFT</SBCHeading>
      <BChainsWrapper>
        <BChain
          isSelected={blockChain === "solana"}
          onClick={() => handleBlockChain("solana")}
        >
          <Img src={Solana} />
        </BChain>
        <BChain
          isSelected={blockChain === "bitcoin"}
          onClick={() => handleBlockChain("bitcoin")}
        >
          <Img src={Bitcoin} />
        </BChain>
        <BChain
          isSelected={blockChain === "ethereum"}
          onClick={() => handleBlockChain("ethereum")}
        >
          <Img src={Ethereum} />
        </BChain>
        <BChain
          isSelected={blockChain === "binance"}
          onClick={() => handleBlockChain("binance")}
        >
          <Img src={Binance} />
        </BChain>
      </BChainsWrapper>
      <AddQRSec>
        <h5>Add a QR code...</h5>
      </AddQRSec>
      <EnterQR>
        <QR>
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value="https://kennel.ai/view-pdf"
            viewBox={`0 0 256 256`}
          />
        </QR>
        <input placeholder="Qr Code" />
      </EnterQR>
      <NextButton onClick={() => navigate("/create-dog-nft/register-dogData")}>
        <Img src={Skip} alt="skip" />
      </NextButton>
    </SBCContainer>
  );
};

export default SelectBlockChain;
