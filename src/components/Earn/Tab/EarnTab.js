import React from "react";
import EMenu from "./EMenu/EMenu";
import { SwapCards } from "../FirstRowSection/FirstRowSec";
import SwapCardOne from "../FirstRowSection/SwapCard/SwapCardOne";
import SwapCardTwo from "../FirstRowSection/SwapCard/SwapCardTwo";

const EarnTab = () => {
  return (
    <>
      <EMenu />
      <SwapCards Width="100%">
        <SwapCardOne />
        <SwapCardTwo />
      </SwapCards>
    </>
  );
};

export default EarnTab;
