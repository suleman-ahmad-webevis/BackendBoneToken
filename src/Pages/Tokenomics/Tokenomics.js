import BitForex from "../../assets/images/Tokenomics/BitForex.png";
import HotBit from "../../assets/images/Tokenomics/HotBit.png";
import DogToken from "../../assets/images/Tokenomics/DogToken.png";
import M from "../../assets/images/Tokenomics/M.png";
import KennelClubToken from "../../assets/images/Tokenomics/KennelClubToken.png";
import BinancePay from "../../assets/images/Tokenomics/BinancePay.png";
import Buy from "../../assets/images/Tokenomics/buy.png";
import CBig from "../../assets/images/Tokenomics/CBig.png";
import SBig from "../../assets/images/Tokenomics/SBig.png";
// import HeaderBoneTwo from "../../assets/images/Tokenomics/HeaderBoneTwo.png";
// import Paw from "../../assets/images/Tokenomics/Paw.png";
// import Paws from "../../assets/images/Tokenomics/Paws.png";
// import Swap from "../../assets/images/Tokenomics/swap.png";
// import T from "../../assets/images/Tokenomics/T.png";
// import E from "../../assets/images/Tokenomics/E.png";
// import Dollar from "../../assets/images/Tokenomics/Dollar.png";
// import Line from "../../assets/images/Tokenomics/Line.png";
import EthereumSmall from "../../assets/images/Tokenomics/EthereumSmall.png";
import BinanceSmall from "../../assets/images/Tokenomics/BinanceSmall.png";
import SwapBtn from "../../assets/images/Tokenomics/SwapBtn.png";
import Swap from "../../assets/images/Tokenomics/swap.png";
import SwapLine from "../../assets/images/Tokenomics/SwapLine.png";
import {
  BuyToken,
  BuyTokenText,
  CheckToken,
  Coin,
  // Coins,
  Coinswap,
  Cointext,
  Deck,
  ExchangeSec,
  ExchangeText,
  ExchangeWrapper,
  Section,
  Text,
  TextWrap,
  TNCardsSec,
  TNPage,
  // TNSidebar,
  Token,
  TokenData,
  TokenHeading,
  TokenItems,
  TokenText,
  SwapImages,
} from "./Tokenomics.style";
import { GlobalHeading, Img } from "../../GlobalStyles";
import { boneTokenData, clubToke } from "./TokenomicsData";

const Tokenomics = () => {
  return (
    <TNPage>
      <TNCardsSec>
        <Section>
          {/*------------------------------------1stSection------------------------------------ */}
          {/* FirstCard */}
          <Token>
            <TokenHeading>
              <Img src={DogToken} alt='Dog-token' />
              <GlobalHeading FontSize="22px" Color="#fff">
                $DOG token
              </GlobalHeading>
              <Img
                src={BinanceSmall}
                alt="BinanceSmall"
                style={{
                  position: "absolute",
                  right: "9px",
                  top: "9px",
                }}
              />
            </TokenHeading>
            <TokenItems>
              {boneTokenData.map((elem, ind) => (
                <TokenData key={ind}>
                  <TokenText RespFZ="16px" color="#92A3BF">
                    {elem.title}:
                  </TokenText>
                  <TokenText FW="700" FZ="20px" RespFZ="14px" color="#92A3BF">
                    {elem.value}
                  </TokenText>
                </TokenData>
              ))}
            </TokenItems>
          </Token>
        </Section>
        <Section>
          {/* SecondCard */}
          <BuyToken>
            <BuyTokenText>
              <h2>Choose Exchange to Buy Token</h2>
              <hr />
            </BuyTokenText>
            <CheckToken>
              <Img src={BitForex} alt="BitForex" />
              <Img src={HotBit} alt="HotBit" />
            </CheckToken>
            <BuyTokenText>
              <h2>Check token on</h2>
              <hr />
            </BuyTokenText>
            <img src={M} style={{ width: "53px", marginBottom: "10px" }} />
          </BuyToken>
        </Section>
      </TNCardsSec>
      <TNCardsSec>
        <Section>
          {/*------------------------------------2ndSection------------------------------------ */}
          {/* FirstCard */}
          <Token>
            <TokenHeading>
              <Img src={KennelClubToken} />
              <GlobalHeading FontSize="22px" Color="#fff">
                Kennel Club token
              </GlobalHeading>
              <Img
                src={EthereumSmall}
                alt="EthereumSmall"
                style={{ position: "absolute", right: "9px", top: "9px" }}
              />
            </TokenHeading>
            <TokenItems>
              {clubToke.map((elem, ind) => (
                <TokenData key={ind}>
                  <TokenText RespFZ="16px" color="#92A3BF">
                    {elem.title}:
                  </TokenText>
                  <TokenText FW="700" FZ="20px" RespFZ="14px" color="#92A3BF">
                    {elem.value}
                  </TokenText>
                </TokenData>
              ))}
            </TokenItems>
          </Token>
        </Section>
        <Section>
          {/* SecondCard */}
          <BuyToken>
            <BuyTokenText>
              <h2>Buy Token</h2>
              <hr />
            </BuyTokenText>
            <CheckToken>
              <img src={BinancePay} alt="BinancePay" />
              <img src={Buy} alt="Buy" />
            </CheckToken>
            <BuyTokenText>
              <h2>Check token on</h2>
              <hr />
            </BuyTokenText>
            <img src={M} style={{ width: "53px", marginBottom: "10px" }} alt='M' />
          </BuyToken>
        </Section>
      </TNCardsSec>
      <Deck>
        <ExchangeWrapper>
          <ExchangeSec>
            <ExchangeText FZ="21px" color="#2775CA" align M>
              Swap
            </ExchangeText>
            <Img src={SwapLine} alt="SwapLine" style={{ width: "90%" }} />
            <Coinswap>
              <Coin>
                <Cointext width="20%" height="auto">
                  <Img src={CBig} />
                  <Text>
                    <TextWrap Color="#20388C" FontSize="15px" FontWeight="700">
                      <p>From:</p> &nbsp; <span> KC</span>
                    </TextWrap>
                    <TextWrap Color="#20388C" FontSize="22px" FontWeight="700">
                      <span> 2500000</span>
                    </TextWrap>
                    <TextWrap Color="#3D6EFF" FontSize="12px" FontWeight="700">
                      <p>Balance:</p> &nbsp;
                      <p style={{ color: "#2F3641", fontWeight: "900" }}>
                        {" "}
                        2500000{" "}
                      </p>
                      &nbsp;
                      <span>MAX</span>
                    </TextWrap>
                    <TextWrap Color="#20388C" FontSize="22px" FontWeight="700">
                      {" "}
                      <span>$25</span>
                    </TextWrap>
                  </Text>
                </Cointext>
              </Coin>
              {/* SwapImages */}
              <SwapImages>
                <Img src={Swap} />
                <Img src={SwapBtn} />
              </SwapImages>
              {/* SwapImages */}
              <Coin>
                <Cointext width="20%" height="auto">
                  <Img src={SBig} />
                  <Text>
                    <TextWrap Color="#20388C" FontSize="15px" FontWeight="700">
                      <p>To:</p> <span> &nbsp; $DOG </span>
                    </TextWrap>
                    <TextWrap Color="#20388C" FontSize="22px" FontWeight="700">
                      <span> 25 </span>
                    </TextWrap>
                    <TextWrap Color="#3D6EFF" FontSize="12px" FontWeight="700">
                      <p>Balance:</p> &nbsp;
                      <p style={{ color: "#2F3641", fontWeight: "900" }}>
                        0.00{" "}
                      </p>{" "}
                      &nbsp;
                      <span> MAX </span>
                    </TextWrap>
                    <TextWrap Color="#20388C" FontSize="22px" FontWeight="700">
                      <span> $25</span>
                    </TextWrap>
                  </Text>
                </Cointext>
              </Coin>
            </Coinswap>
          </ExchangeSec>
          {/* <ImageLine src={Line} alt="divider" />
              <ExchangeSec>
                <ExchangeText
                  FZ="21px"
                  color="#2775CA"
                  align
                  M
                  onClick={() => {
                    setOpacity(!true);
                  }}
                >
                  Liquidity
                </ExchangeText>
                <hr />
                <Coinswap opacity={opacity}>
                  <CoinsWrapper>
                    <Coins>
                      <img src={T} />
                      <h3>$0.00</h3>
                    </Coins>
                    <Coins>
                      <img src={E} />
                      <h3>$0.00</h3>
                    </Coins>
                    <Coins>
                      <img src={Dollar} />
                      <h3>$0.00</h3>
                    </Coins>
                  </CoinsWrapper>
                  <Coinswap D opacity={opacity}>
                    <Coin>
                      <Cointext>
                        <Text>
                          <TextWrap>
                            From:
                            <img
                              src={Paws}
                              title="swap"
                              style={{ width: "24px", height: "24px" }}
                            />
                            KC
                          </TextWrap>
                          <TextWrap>
                            <span> 00.00</span>
                          </TextWrap>
                          <TextWrap>Balance: 25.00 MAX</TextWrap>
                        </Text>
                      </Cointext>
                    </Coin>
                    <Coin align>
                      <Cointext>
                        <img
                          src={Swap}
                          title="swap"
                          style={{ transform: "rotate(90deg)" }}
                          width="64px"
                          height="60px"
                        />
                      </Cointext>
                    </Coin>
                    <Coin>
                      <Cointext>
                        <Text>
                          <TextWrap>
                            To:
                            <img
                              src={HeaderBoneTwo}
                              style={{ width: "24px", height: "24px" }}
                            />
                            <span> Bone</span>
                          </TextWrap>
                          <TextWrap>
                            <span> 00.00</span>
                          </TextWrap>
                          <TextWrap>
                            Balance: 00.00 <span> MAX</span>
                          </TextWrap>
                        </Text>
                      </Cointext>
                    </Coin>
                  </Coinswap>
                  <Button>Swap</Button>
                </Coinswap>
              </ExchangeSec> */}
        </ExchangeWrapper>
      </Deck>
    </TNPage>
  );
};

export default Tokenomics;
