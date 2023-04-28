import React from "react";
import VeterinaryLogo from "../../assets/images/Certificate/VeterinaryLogo.png";
import styled from "styled-components";
import { Img } from "../../GlobalStyles";

const VeterinaryInfo = () => {
  return (
    <VeterinaryInfoContainer>
      <HeadingLogo>
        <Img src={VeterinaryLogo} />
      </HeadingLogo>
      <VeterinaryInfoWrapper>
        <VeterinaryInfoLR>
          <LeftRightItem>
            <h5>Rabies</h5>
            <ItemInfo>
              <h5>&bull;</h5>
              <p>Date Vaccination Expiry:</p>
              <p>18/04/2021 </p>
            </ItemInfo>
            <ItemInfo>
              <h5>&bull;</h5>
              <p>Vacination Serial Number: </p>
              <p>18/04/2021 </p>
            </ItemInfo>
          </LeftRightItem>
        </VeterinaryInfoLR>
      </VeterinaryInfoWrapper>
    </VeterinaryInfoContainer>
  );
};

export default VeterinaryInfo;

const VeterinaryInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
`;

const VeterinaryInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const VeterinaryInfoLR = styled.div`
  display: flex;
  width: 49%;
`;

const LeftRightItem = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 5px;
  padding: 10px 0px;
`;

const ItemInfo = styled.div`
  display: flex;
  grid-gap: 15px;
  p {
    &:nth-child(3) {
      color: #455b96;
    }
  }
`;
const HeadingLogo = styled.div``;
