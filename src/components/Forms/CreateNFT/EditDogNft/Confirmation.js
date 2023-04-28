import React from "react";
import styled from "styled-components";
import { Img } from "../../../GlobalStyles";
import Congratulation from "../../../assets/images/CreateNFT/Congratulation.png";
import Facebook from "../../../assets/images/CreateNFT/Facebook.png";
import Mail from "../../../assets/images/CreateNFT/Mail.png";
import Copy from "../../../assets/images/CreateNFT/Copy.png";
import URL from "../../../assets/images/CreateNFT/URL.png";
import { FormFooter } from "../UserStyles";
import image1 from "../../../assets/images/pedigree.png";
import image2 from "../../../assets/images/database.png";
import image3 from "../../../assets/images/blockchain.png";

const Confirmation = () => {
  return (
    <ConfirmationContainer>
      <Title>
        <Img src={Congratulation} alt="Congratulations" />
      </Title>
      <Combined>
        <input type="text" placeholder="Type Email address" />
        <ConfirmationButton Differ>
          Send me Certificate by Email <Img src={Mail} alt="Mail" />
        </ConfirmationButton>
      </Combined>
      <ConfirmationButton>
        Share Dog Certificate to Facebook <Img src={Facebook} alt="Facebook" />
      </ConfirmationButton>
      <ConfirmationButton>View Blockchain Certificate</ConfirmationButton>
      <ConfirmationButton>Download Certificate</ConfirmationButton>
      <ConfirmationButton>
        <Img src={URL} alt="URL" />{" "}
        https://bscscan.com/token/0x438fc473ba340d0734e2d05acdf.....
      </ConfirmationButton>
      <BlockChainToken>
        0xdfe5e1064cEcDFeC111c3bDe9FD0A645f980e562 <Img src={Copy} alt="Copy" />
      </BlockChainToken>

      <FormFooter>
        <Img src={image1} alt="img" />
        <Img src={image2} alt="img" />
        <Img src={image3} alt="img" />
      </FormFooter>
    </ConfirmationContainer>
  );
};

const ConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px 20px;
  background: #ffffff;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);
  border-radius: 50px;
  width: 690px;

  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;

const Title = styled.div`
  align-self: center;
  margin-bottom: 30px;
`;

const Combined = styled.div`
  display: flex;
  gap: 10px;

  input {
    background: #ffffff;
    border: 2px solid rgba(144, 202, 249, 0.5);
    border-radius: 8px;
    height: 50px;
    font-size: 14px;
    line-height: 17px;
    color: #b7b7b7;
    padding: 10px 15px;
    width: 50%;

    ::placeholder {
      font-size: 14px;
      line-height: 17px;
      color: #b7b7b7;
    }
  }

  @media screen and (max-width: 760px) {
    flex-direction: column;
    input {
      width: 100%;
    }
  }
`;

const ConfirmationButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 15px;
  height: 50px;
  background: #19517d;
  border-radius: 8px;
  font-size: 18px;
  line-height: 21px;
  font-weight: 700;
  color: #ffffff;
  width: ${({ Differ }) => (Differ ? "50%" : "100%")};
  cursor: pointer;
  text-align: center;
  overflow-wrap: break-word;
  word-wrap: break-word;
  -ms-word-break: break-all;
  /* This is the dangerous one in WebKit, as it breaks things wherever */
  word-break: break-all;
  /* Instead use this non-standard one: */
  word-break: break-word;

  /* Adds a hyphen where the word breaks, if supported (No Blink) */
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;

  @media screen and (max-width: 760px) {
    width: 100%;
  }
  @media screen and (max-width: 560px) {
    font-size: 14px;
    line-height: 17px;
  }
  @media screen and (max-width: 460px) {
    font-size: 10px;
    line-height: 13px;
    img {
      height: 20px;
    }
  }
`;

const BlockChainToken = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 15px;
  height: 50px;
  background: #ffffff;
  border: 2px solid rgba(144, 202, 249, 0.5);
  border-radius: 8px;
  font-size: 14px;
  line-height: 17px;
  color: #b7b7b7;
  text-align: center;
  overflow-wrap: break-word;
  word-wrap: break-word;
  -ms-word-break: break-all;
  /* This is the dangerous one in WebKit, as it breaks things wherever */
  word-break: break-all;
  /* Instead use this non-standard one: */
  word-break: break-word;

  /* Adds a hyphen where the word breaks, if supported (No Blink) */
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;

  @media screen and (max-width: 460px) {
    font-size: 10px;
    line-height: 13px;
    img {
      height: 20px;
    }
  }
`;
export default Confirmation;
