import React from "react";
import EMenu from "./EMenu/EMenu";
import { SwapCards } from "../FirstRowSection/FirstRowSec";
import SwapCardOne from "../FirstRowSection/SwapCard/SwapCardOne";
import SwapCardTwo from "../FirstRowSection/SwapCard/SwapCardTwo";
import Me from "./Me/Me";
import MyDogs from "./MyDogs/MyDogs";
import DogFeedingSlider from "../Sliders/DogFeedingSlider";

const EarnTab = ({ swapComp }) => {
  const data = [];
  return (
    <>
      <EMenu />
      <DogFeedingSlider data={data} />
      <SwapCards Width="100%">
        <SwapCardOne />
        <SwapCardTwo />
      </SwapCards>
      {swapComp ? <Me /> : <MyDogs />}
    </>
  );
};

export default EarnTab;
