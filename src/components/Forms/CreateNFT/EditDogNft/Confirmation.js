import React, { useEffect } from "react";
import styled from "styled-components";
import { Img } from "../../../../GlobalStyles";
import Congratulation from "../../../../assets/images/CreateNFT/Congratulation.png";
import Facebook from "../../../../assets/images/CreateNFT/Facebook.png";
import Mail from "../../../../assets/images/CreateNFT/Mail.png";
import Copy from "../../../../assets/images/CreateNFT/Copy.png";
import URL from "../../../../assets/images/CreateNFT/URL.png";
import { useNavigate } from "react-router-dom";
// import QRCode from "../../../../assets/images/CreateNFT/QRCode.png";
import Download from "../../../../assets/images/CreateNFT/Download.png";
import Tag from "../../../../assets/images/CreateNFT/Tags.png";
import useBreakpoint from "../../../../hooks/useBreakPoint";
// import { FormFooter } from "../../UserStyles";
import QRCode from "react-qr-code";
import { getDogNft } from "../../../../redux/createDogNft/createDogNftSlice";
import { useDispatch } from "react-redux";

const Confirmation = () => {
  const navigate = useNavigate();
  const { isDesktop, isTablet, isSmallMobile, isMobile } = useBreakpoint();
  const dispatch = useDispatch();
  const nftIdIs = sessionStorage?.getItem("nftId");
  useEffect(() => {
    dispatch(getDogNft({ dogId: nftIdIs }));
  }, []);

  return (
    <ConfirmationContainer>
      <CertificateInfo>
        <QR>
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value="https://kennel.ai/view-pdf"
            viewBox={`0 0 256 256`}
          />
        </QR>
        <CertificateTitle>
          <p style={{ color: "#000" }}>QR code </p>
        </CertificateTitle>
        <CombinedTitle>
          <p style={{ color: "#455B96" }}>Erc721 certificate number </p>{" "}
          <p style={{ color: "rgba(0, 0, 0, 0.7)" }}>00000001</p>
        </CombinedTitle>
      </CertificateInfo>
      <Title>
        <Img src={Congratulation} alt="Congratulations" />
      </Title>
      <Combined>
        <input type="text" placeholder="Type Email address" />
        <ConfirmationButton Differ BGColor="#0E626D">
          Send me Certificate by Email <Img src={Mail} alt="Mail" />
        </ConfirmationButton>
      </Combined>
      <ConfirmationButton BGColor="#19517D">
        Share Dog Certificate to Facebook <Img src={Facebook} alt="Facebook" />
      </ConfirmationButton>
      <ConfirmationButton BGColor="#3F197D">
        View Blockchain Certificate
      </ConfirmationButton>
      <ConfirmationButton BGColor="#0E626D" onClick={() => navigate("/pdf")}>
        <p>Download Certificate</p>
        <Img src={Download} />
      </ConfirmationButton>
      {isDesktop ? (
        <ConfirmationButton>
          <Img src={URL} alt="URL" />{" "}
          <a href="google.com">
            https://bscscan.com/token/0x438fc473ba340d0734e2d05acdf.....
          </a>
          <Img src={Copy} alt="Copy" />
        </ConfirmationButton>
      ) : (
        (isTablet || isMobile || isSmallMobile) && (
          <ConfirmationButton>View BSC SCAN</ConfirmationButton>
        )
      )}
      <Title>
        <Img src={Tag} alt="Tag" />
      </Title>
      <ConfirmationButton BGColor="#197D2F">
        Order DogData QR Code Tag
      </ConfirmationButton>
      {/*<FormFooter>
        <Img src={image1} alt="img" />
        <Img src={image2} alt="img" />
      </FormFooter>  */}
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
  /* width: 690px; */
  width: 100%;
`;

const CertificateInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 15px;
`;

const QR = styled.div`
  width: 10%;
`;

const CertificateTitle = styled.div`
  p {
    color: "#000";
  }
`;

const Title = styled.div`
  align-self: center;
  margin-bottom: 30px;
`;

const CombinedTitle = styled.div`
  display: flex;
  justify-content: center;
  grid-gap: 10px;
  p {
    font-size: 14px;
    font-weight: 600;
  }
`;

const Combined = styled.div`
  display: flex;
  gap: 10px;
  input {
    background: #ffffff;
    border: 2px solid rgba(121, 153, 157, 0.15);
    border-radius: 8px;
    height: 50px;
    width: 50%;
    padding: 10px 15px;
    font-size: 14px;
    line-height: 17px;
    font-weight: 700;
    color: #b7b7b7;
    outline: none;
    @media screen and (max-width: 1110px) {
      width: 100%;
    }
    ::placeholder {
      font-size: 14px;
      line-height: 17px;
      color: #b7b7b7;
      font-weight: 700;
    }
  }

  @media screen and (max-width: 1110px) {
    flex-wrap: wrap;
  }
`;

const ConfirmationButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 15px;
  height: 50px;
  background: ${({ BGColor }) => BGColor ?? "#19517d"};
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
  word-break: break-all;
  word-break: break-word;
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
  white-space: nowrap;
  a {
    font-size: 17px;
  }
  @media screen and (max-width: 1110px) {
    width: 100%;
  }
  @media screen and (max-width: 600px) {
    font-size: 15px;
  }
`;

export default Confirmation;
