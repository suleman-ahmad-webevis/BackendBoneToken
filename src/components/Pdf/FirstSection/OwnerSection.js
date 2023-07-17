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
          <Img src={owner?.ownerPic ? owner?.ownerPic : Owner} alt="owner" />
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
          <h5>Name</h5>
          <h5>Breeder Kennel name</h5>
          <h5>Email</h5>
          <h5>Telephone</h5>
        </OwnerItems>
        <PawItems>
          <Img src={OwnerPaw} alt="OwnerPaw" />
          <Img src={OwnerPaw} alt="OwnerPaw" />
          <Img src={OwnerPaw} alt="OwnerPaw" />
          <Img src={OwnerPaw} alt="OwnerPaw" />
        </PawItems>
        <OwnerValues>
          <h5>{owner?.ownerName ? owner?.ownerName : "-"}</h5>
          <h5>{owner?.breederKennelName ? owner?.breederKennelName : "-"}</h5>
          <h5>{owner?.email ? owner?.email : "-"}</h5>
          <h5>{owner?.phone ? owner?.phone : "-"}</h5>
        </OwnerValues>
      </OwnerInfo>
      <OwnerSites>
        <OwnerSite>
          <Img src={Site} alt="Site" />
          <h5>Breeder website :</h5>
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
          <h5> Owner website :</h5>
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
  width: 90%;
  display: flex;
  flex-direction: column;
  grid-gap: 15px;
`;

export const OSHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20%;
  h5 {
    font-weight: 900;
    font-size: 18px;
    line-height: 95%;
    color: #b1933c;
  }
`;

export const OwnerBasicInfo = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 10px;
  img {
    border-radius: 20px;
    width: 36%;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 10px;
  width: 100%;
  justify-content: center;
  img {
    height: 17px;
  }
`;

export const OwnerInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 60%;
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
