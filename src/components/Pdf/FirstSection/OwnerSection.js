import React from "react";
import Owner from "../../../assets/images/Pdf/Owner.png";
import Facebook from "../../../assets/images/Pdf/Facebook.png";
import Twitter from "../../../assets/images/Pdf/Twitter.png";
import { Img } from "../../../GlobalStyles";
import styled from "styled-components";
import OwnerPaw from "../../../assets/images/Pdf/OwnerPaw.png";
import Site from "../../../assets/images/Pdf/Site.png";
// import { PdfImgHolder } from "../../../Pages/Pdf";

const OwnerSection = ({ owner }) => {
  return (
    <OSWrapper>
      <OSHead>
        <OwnerBasicInfo>
          <Img
            src={owner?.ownerPic ? owner?.ownerPic : Owner}
            alt="owner"
            style={{ borderRadius: "50px" }}
          />
          <h5>Owner</h5>
        </OwnerBasicInfo>
        <SocialIcons>
          <a href={owner?.fbPage} target="_blank" rel="noreferrer">
            <Img src={Facebook} alt="Facebook" />
          </a>
          <a href={owner?.fbPage} target="_blank" rel="noreferrer">
            <Img src={Twitter} alt="Twitter" />
          </a>
        </SocialIcons>
      </OSHead>
      <OwnerInfo>
        <OwnerItems>
          <h4>Name</h4>
          <h4>Breeder Kennel name</h4>
          <h4>Email</h4>
          <h4>Telephone</h4>
        </OwnerItems>
        <PawItems>
          <Img src={OwnerPaw} alt="OwnerPaw" />
          <Img src={OwnerPaw} alt="OwnerPaw" />
          <Img src={OwnerPaw} alt="OwnerPaw" />
          <Img src={OwnerPaw} alt="OwnerPaw" />
        </PawItems>
        <OwnerValues>
          <h4>{owner?.ownerName ? owner?.ownerName : "-"}</h4>
          <h4>{owner?.breederKennelName ? owner?.breederKennelName : "-"}</h4>
          <h4>{owner?.email ? owner?.email : "-"}</h4>
          <h4>{owner?.phone ? owner?.phone : "-"}</h4>
        </OwnerValues>
      </OwnerInfo>
      <OwnerSites>
        <OwnerSite>
          <Img src={Site} alt="Site" />
          <h4>Breeder website :</h4>
          <a
            href={owner?.breederWebsite ? owner?.breederWebsite : "-"}
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: owner?.breederWebsite ? "underline" : "none",
            }}
          >
            {owner?.breederWebsite ? owner?.breederWebsite : "-"}
          </a>
        </OwnerSite>
        <OwnerSite>
          <Img src={Site} alt="Site" />
          <h4> Owner website :</h4>
          <a
            href={owner?.website}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: owner?.website ? "underline" : "none" }}
          >
            {owner?.website ? owner?.website : "-"}
          </a>
        </OwnerSite>
      </OwnerSites>
    </OSWrapper>
  );
};

export default OwnerSection;

export const OSWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  grid-gap: 15px;
`;

export const OSHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  h5 {
    font-weight: 900;
    font-size: 25px;
    line-height: 95%;
    color: #b1933c;
  }
`;

export const OwnerBasicInfo = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 10px;
  img {
    border-radius: 20px solid transparent;
    width: 35%;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 10px;
  width: 100%;
  justify-content: center;
  img {
    height: 20px;
  }
`;

export const OwnerInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 80%;
  padding-left: 80px;
  font-size: 20px;
`;

export const OwnerDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h5 {
    align-self: flex-start;
  }
`;

export const OwnerItems = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
`;

export const OwnerValues = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
`;

export const PawItems = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
  height: 85%;
  justify-content: space-between;
`;

export const OwnerSites = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 5px;
  width: 60%;
  padding-left: 80px;
  font-size: 18px;
`;

export const OwnerSite = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 10px;
  h5 {
    color: #000000;
    white-space: nowrap;
  }
  span {
    color: rgba(47, 83, 182, 1);
  }
`;
