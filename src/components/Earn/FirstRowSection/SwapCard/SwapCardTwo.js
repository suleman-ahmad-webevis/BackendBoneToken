import React from "react";
import { Img } from "../../../../GlobalStyles";
import Line from "../../../../assets/images/Earn/Line.png";
import S from "../../../../assets/images/Earn/S.png";
import SwapIcon from "../../../../assets/images/Earn/SwapIcon.png";
import Swap from "../../../../assets/images/Earn/Swap.png";
import T from "../../../../assets/images/Earn/T.png";
import {
  CardHeadImg,
  CardHeader,
  CardHeading,
  CardSwapBtn,
  CardSwapSection,
  One,
  SwapCardWrapper,
  SwapContent,
  SwapContentText,
  Two,
} from "./SwapCardOne";

const SwapCardTwo = () => {
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
            <SwapContentText FontSize="15px" FontWeight="800" Color="#637592">
              From:
            </SwapContentText>
            <Img src={S} alt="S" />
            <SwapContentText FontSize="15px" FontWeight="800" Color="#0E626D">
              KC
            </SwapContentText>
          </One>
          <SwapContentText FontSize="22px" FontWeight="900" Color="#0E626D">
            $0.00
          </SwapContentText>
          <Two>
            <SwapContentText FontSize="15px" FontWeight="800" Color="#0E626D">
              Balance: 0.00
            </SwapContentText>
            <SwapContentText FontSize="12px" FontWeight="800" Color="#3D6EFF">
              MAX
            </SwapContentText>
          </Two>
        </SwapContent>
        {/* SecondColumn */}
        <Img src={SwapIcon} />
        {/* ThirdColumn */}
        <SwapContent>
          <One>
            <SwapContentText FontSize="15px" FontWeight="800" Color="#637592">
              To:
            </SwapContentText>
            <Img src={T} alt="T" />
            <SwapContentText FontSize="15px" FontWeight="800" Color="#0E626D">
              USDT
            </SwapContentText>
          </One>
          <SwapContentText FontSize="22px" FontWeight="900" Color="#0E626D">
            $0.00
          </SwapContentText>
          <Two>
            <SwapContentText FontSize="15px" FontWeight="800" Color="#0E626D">
              Balance: 0.00
            </SwapContentText>
            <SwapContentText FontSize="12px" FontWeight="800" Color="#3D6EFF">
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

export default SwapCardTwo;
