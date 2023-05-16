import React from "react";
import styled from "styled-components";
import BoxBGL from "../../assets/images/RoadMap/BoxBGL.png";
import BoxBGR from "../../assets/images/RoadMap/BoxBGR.png";
import useBreakpoint from "../../hooks/useBreakPoint";

const RMComp = () => {
  const { isTablet, isSmallMobile, isMobile } = useBreakpoint();
  const boxData = [
    {
      bgImg: BoxBGR,
      heading: "2022",
      desc: "Design Platform UI UX Develop Platform Front End Develop Platform admin panel",
      bgPos: "100% 0%",
      vlHeight: "28px",
    },
    {
      bgImg: BoxBGL,
      heading: "2023 Q1",
      desc: "Develop 2000 Product WebShop Integrate Pet Dog NFT smart contract Factory Integrate Ecosystem Stabil TokenIntegrate Fiat and Crypto payment systems",
      bgPos: "0% 100%",
      vlHeight: "28px",
    },
    {
      bgImg: BoxBGR,
      heading: "2023 Q2",
      desc: "Launch Platform to pet Dog Breeders through European Interational Dog Shows (CACIB) Investment Round",
      bgPos: "100% 0%",
      vlHeight: "28px",
    },
    {
      bgImg: BoxBGL,
      heading: "2023 Q3",
      desc: "Smart Search AI development Kennel Club data platform integration Integrate Dog sale marketplace into Multi dimensional Pedigree Database",
      bgPos: "0% 100%",
      vlHeight: "28px",
    },
    {
      bgImg: BoxBGR,
      heading: "2023 Q4",
      desc: "Launch Dog breeders mating algorithm",
      bgPos: "100% 0%",
      vlHeight: "28px",
    },
    {
      bgImg: BoxBGL,
      heading: "2024 Q1",
      desc: "Launch PAW scan",
      bgPos: "0% 100%",
      vlHeight: "38px",
    },
  ];
  return (
    <>
      <RMWrapper>
        {boxData.map((value, index) => (
          <React.Fragment key={index}>
            <Box BGImg={value.bgImg} BGPos={value.bgPos}>
              <BoxContent>
                <h1>{value.heading}</h1>
                <p>{value.desc}</p>
              </BoxContent>
              {(isTablet || isSmallMobile || isMobile) && (
                <VL VLHeight={value.vlHeight} />
              )}
            </Box>
            {(isTablet || isSmallMobile || isMobile) &&
              boxData.length - 1 === index && (
                <ThanksHeading>Thanks for reading</ThanksHeading>
              )}
          </React.Fragment>
        ))}
      </RMWrapper>
    </>
  );
};

export default RMComp;

export const RMWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  grid-gap: 30px;
  width: 100%;
  position: relative;
  padding: 10px 0px 60px 0px;
  @media screen and (max-width: 1110px) {
    justify-content: flex-start;
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const Box = styled.div`
  background-image: ${({ BGImg }) => `url(${BGImg})`};
  background-repeat: no-repeat;
  background-position: ${({ BGPos }) => BGPos};
  height: 229px;
  width: 28%;
  border: 1px solid #dddfe3;
  border-radius: 24px;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 1110px) {
    width: 70%;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const BoxContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  grid-gap: 10px;
  padding: 30px 35px;
  h1 {
    font-weight: 800;
    font-size: 24px;
    line-height: 28px;
    color: #0a0f1f;
  }
  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #3d414b;
  }
`;

export const VL = styled.div`
  border-left: 2px solid #0e626d4d;
  height: ${({ VLHeight }) => VLHeight};
  position: absolute;
  bottom: ${({ VLHeight }) => (VLHeight === "28px" ? "-30px" : "-38px")};
  right: 50%;
  z-index: 0;
`;

export const ThanksHeading = styled.h5`
  font-weight: 900;
  font-size: 30px;
  line-height: 100px;
  color: #000000;
`;
// export const RMImg = styled.img`
//   position: absolute;
//   top: 10px;
//   bottom: 10px;
//   right: 50%;
//   left: 50%;
//   z-index: 1;
//   height: auto;
// `;
