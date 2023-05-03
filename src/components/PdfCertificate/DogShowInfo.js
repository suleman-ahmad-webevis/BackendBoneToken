import React from "react";
import { Img } from "../../GlobalStyles";
import DogShowCertificate from "../../assets/images/Certificate/DogShowLogo.png";
import styled from "styled-components";

const DogShowInfo = () => {
  const title = ["Show name", "Country", "Date", "Judge", "Class", "Place"];
  return (
    <DogShowContainer>
      <Heading>
        <Img src={DogShowCertificate} />
      </Heading>
      <DogShowInfoWrapper>
        <DogShowInfoItem>
          <Title>
            {title.map((value, index) => (
              <p key={index}>{value}</p>
            ))}
          </Title>
          <Title>
            <p>Dummy</p>
          </Title>
        </DogShowInfoItem>
      </DogShowInfoWrapper>
    </DogShowContainer>
  );
};

export default DogShowInfo;

const DogShowContainer = styled.div`
  width: 50%;
`;

const Heading = styled.div``;

const DogShowInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 5px;
`;

const DogShowInfoItem = styled.div`
  display: flex;
  grid-gap: 4px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  width: 24%;
`;
