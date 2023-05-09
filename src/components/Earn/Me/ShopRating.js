import React from "react";
import { CombinedText, PurchasesContainer, PurchasesText } from "./Purchases";

const ShopRating = () => {
  return (
    <PurchasesContainer Width="65%">
      <PurchasesText
        Color="#0E626D"
        FontSize="24px"
        SmallLaptopFS="20px"
        FontWeight="900"
      >
        Shop Ratings
      </PurchasesText>
      <CombinedText Gap="22px">
        <PurchasesText
          Color="#79999D"
          FontSize="20px"
          SmallLaptopFS="16px"
          FontWeight="900"
        >
          Total
        </PurchasesText>
        <PurchasesText
          Color="#33A2B0"
          FontSize="35px"
          SmallLaptopFS="20px"
          FontWeight="900"
        >
          $0
        </PurchasesText>
      </CombinedText>
      <CombinedText Gap="22px">
        <PurchasesText
          Color="#79999D"
          FontSize="20px"
          SmallLaptopFS="16px"
          FontWeight="900"
        >
          $DOG earned
        </PurchasesText>
        <PurchasesText
          Color="#33A2B0"
          FontSize="35px"
          SmallLaptopFS="20px"
          FontWeight="900"
        >
          0
        </PurchasesText>
      </CombinedText>
    </PurchasesContainer>
  );
};

export default ShopRating;
