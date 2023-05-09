import React from "react";
import EMenu from "./EMenu/EMenu";
import { SwapCards } from "../FirstRowSection/FirstRowSec";
import SwapCardOne from "../FirstRowSection/SwapCard/SwapCardOne";
import SwapCardTwo from "../FirstRowSection/SwapCard/SwapCardTwo";
import Me from "./Me/Me";
import MyDogs from "./MyDogs/MyDogs";

const EarnTab = ({ swapComp }) => {
  return (
    <>
      <EMenu />
      <SwapCards Width="100%">
        <SwapCardOne />
        <SwapCardTwo />
      </SwapCards>
      {swapComp ? <Me /> : <MyDogs />}
    </>
  );
};

export default EarnTab;
