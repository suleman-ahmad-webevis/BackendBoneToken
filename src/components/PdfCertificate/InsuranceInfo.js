import React from "react";
import { Img } from "../../GlobalStyles";
import InsuranceLogo from "../../assets/images/Certificate/InsuranceLogo.png";
import styled from "styled-components";

const InsuranceInfo = () => {
  const title = ["Policy", "Start", "Expiry", "Contact number"];
  return (
    <InsuranceContainer>
      <Heading>
        <Img src={InsuranceLogo} />
      </Heading>
      <InsuranceInfoWrapper>
        <InsuranceInfoItem>
          <Title>
            {title.map((value, index) => (
              <p key={index}>{value}</p>
            ))}
          </Title>
          <Title>
            <p>Dummy</p>
          </Title>
        </InsuranceInfoItem>
      </InsuranceInfoWrapper>
    </InsuranceContainer>
  );
};

export default InsuranceInfo;

const InsuranceContainer = styled.div`
  width: 50%;
`;

const Heading = styled.div``;

const InsuranceInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 5px;
`;

const InsuranceInfoItem = styled.div`
  display: flex;
  grid-gap: 4px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  width: 24%;
`;
