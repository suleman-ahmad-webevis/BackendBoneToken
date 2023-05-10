import React from "react";
import styled from "styled-components";
import { Img } from "../../../../GlobalStyles";
import Line from "../../../../assets/images/Earn/Line.png";
import C from "../../../../assets/images/Earn/C.png";
import S from "../../../../assets/images/Earn/S.png";
import SwapIcon from "../../../../assets/images/Earn/SwapIcon.png";
import Swap from "../../../../assets/images/Earn/Swap.png";

const SwapCardOne = () => {
  return (
    <SwapCardWrapper>
      <CardHeader>
        <CardHeading>Swap</CardHeading>
        <CardHeadImg>
          <Img src={Line} alt="" />
        </CardHeadImg>
      </CardHeader>
      <CardSwapSection>
        {/* FirstColumn */}
        <SwapContent>
          <One>
            <SwapContentText
              FontSize="15px"
              SmallLaptopFS="10px"
              FontWeight="800"
              Color="#637592"
            >
              From:
            </SwapContentText>
            <Img src={C} alt="C" />
            <SwapContentText
              FontSize="15px"
              SmallLaptopFS="12px"
              FontWeight="800"
              Color="#0E626D"
            >
              $DOG
            </SwapContentText>
          </One>
          <SwapContentText
            FontSize="22px"
            SmallLaptopFS="18px"
            FontWeight="900"
            Color="#0E626D"
          >
            $0.00
          </SwapContentText>
          <Two>
            <SwapContentText
              FontSize="15px"
              SmallLaptopFS="12px"
              FontWeight="800"
              Color="#0E626D"
            >
              Balance: 0.00
            </SwapContentText>
            <SwapContentText
              FontSize="12px"
              SmallLaptopFS="10px"
              FontWeight="800"
              Color="#3D6EFF"
            >
              MAX
            </SwapContentText>
          </Two>
        </SwapContent>
        {/* SecondColumn */}
        <Img src={SwapIcon} />
        {/* ThirdColumn */}
        <SwapContent>
          <One>
            <SwapContentText
              FontSize="15px"
              SmallLaptopFS="12px"
              FontWeight="800"
              Color="#637592"
            >
              To:
            </SwapContentText>
            <Img src={S} alt="S" />
            <SwapContentText
              FontSize="15px"
              SmallLaptopFS="12px"
              FontWeight="800"
              Color="#0E626D"
            >
              KC
            </SwapContentText>
          </One>
          <SwapContentText
            FontSize="22px"
            SmallLaptopFS="18px"
            FontWeight="900"
            Color="#0E626D"
          >
            $0.00
          </SwapContentText>
          <Two>
            <SwapContentText
              FontSize="15px"
              SmallLaptopFS="12px"
              FontWeight="800"
              Color="#0E626D"
            >
              Balance: 0.00
            </SwapContentText>
            <SwapContentText
              FontSize="12px"
              SmallLaptopFS="10px"
              FontWeight="800"
              Color="#3D6EFF"
            >
              MAX
            </SwapContentText>
          </Two>
        </SwapContent>
      </CardSwapSection>
      <CardSwapBtn>
        <Img src={Swap} alt="" />
      </CardSwapBtn>
    </SwapCardWrapper>
  );
};

export default SwapCardOne;

export const SwapCardWrapper = styled.div`
  /* width: 561px; */
  height: 278px;
  background: #ffffff;
  border: 1px solid #e6fafd;
  box-shadow: 0px 2px 4px #c4e9ee;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-gap: 32px;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 10px;
`;

export const CardHeading = styled.div`
  color: #0e626d;
  font-weight: 900;
  font-size: 21px;
  line-height: 95%;
`;

export const CardHeadImg = styled.div``;

export const CardSwapSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-gap: 65px;
`;

export const SwapContent = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 15px;
`;

export const One = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 4px;
`;

export const SwapContentText = styled.h5`
  font-size: ${({ FontSize }) => FontSize};
  font-weight: ${({ FontWeight }) => FontWeight};
  color: ${({ Color }) => Color ?? "#fff"};
  @media screen and (max-width: 1300px) {
    font-size: ${({ SmallLaptopFS }) => SmallLaptopFS};
  }
`;

export const Two = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 10px;
`;

export const CardSwapBtn = styled.div``;
