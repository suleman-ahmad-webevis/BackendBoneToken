import BitForex from "../../assets/images/Tokenomics/Tab/BitForex.png";
import HotBit from "../../assets/images/Tokenomics/Tab/HotBit.png";
import M from "../../assets/images/Tokenomics/Tab/M.png";
import BPay from "../../assets/images/Tokenomics/Tab/BPay.png";
import { Buy } from "./TokenTab.style";
import { Img } from "../../GlobalStyles";

export const ChooseBuy = [
  {
    paddingTop: "0px",
    titleOne: "Choose Exchange to Buy Token",
    imgOne: BitForex,
    two: <Img src={HotBit} alt="HotBit" style={{ alignSelf: "center" }} />,
    titleTwo: "Check token on CoinMarketCap",
    imgThree: M,
  },
  {
    paddingTop: "15px",
    titleOne: "Buy Token",
    imgOne: BPay,
    two: (
      <Buy>
        <h5>Buy *</h5>
        <input placeholder="0.00" />
        <button>
          <h5>Buy</h5>
        </button>
      </Buy>
    ),
    titleTwo: "Check token on CoinMarketCap",
    imgThree: M,
  },
];
