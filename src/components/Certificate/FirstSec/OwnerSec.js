import React from "react";
import styled from "styled-components";
import Owner from "../../../assets/images/Certificate/Owner.png";
import Fb from "../../../assets/images/Certificate/Fb.png";
import Insta from "../../../assets/images/Certificate/Insta.png";
import { Img } from "../../../GlobalStyles";

const OwnerSec = () => {
  return (
    <OwnerWrapper>
      <OwnerHeader>
        <HeaderWrapper>
          <Img src={Owner} alt="ownerpic" />
          <h5>Owner</h5>
        </HeaderWrapper>
        <HeaderWrapper>
          <Img src={Fb} alt="ownerpic" />
          <Img src={Insta} alt="ownerpic" />
        </HeaderWrapper>
      </OwnerHeader>
      <OwnerContent>
        {/* <BasicInfo>
            </BasicInfo> */}
      </OwnerContent>
    </OwnerWrapper>
  );
};

export default OwnerSec;

export const OwnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
`;

export const OwnerHeader = styled.div`
  display: flex;
  grid-gap: 120px;
  align-items: center;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  grid-gap: 10px;
  align-items: center;
  h5 {
    font-weight: 900;
    font-size: 15px;
    line-height: 95%;
    color: #b1933c;
  }
`;

export const OwnerContent = styled.div`
  display: flex;
`;
