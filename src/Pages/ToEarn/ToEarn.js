import React, { useEffect } from "react";
import styled from "styled-components";
import Heading from "../../components/Heading/Heading";
import { Img } from "../../GlobalStyles";
import EarnBone from "../../assets/images/ToEarn/New/EarnBone.png";
import Telegram from "../../assets/images/ToEarn/New/Telegram.png";
import Twitter from "../../assets/images/ToEarn/New/Twitter.png";
import Discord from "../../assets/images/ToEarn/New/Discord.png";
import Facebook from "../../assets/images/ToEarn/New/Facebook.png";
import Instagram from "../../assets/images/ToEarn/New/Instagram.png";
import Reddit from "../../assets/images/ToEarn/New/Reddit.png";
import Youtube from "../../assets/images/ToEarn/New/Youtube.png";
import M from "../../assets/images/ToEarn/New/M.png";
// import TwoEarn from "../../assets/images/ToEarn/New/TwoEarn.png";
import ToggleEarnButtons from "./ToggleEarnButtons";
// import EarnSlider from "../../components/Sliders/OLDEarnSlider";
// import TopBoneDrop from "../../assets/images/ToEarn/New/TopBoneDrop.png";
// import TopAirdrop from "../../assets/images/ToEarn/New/TopAirdrop.png";
import SummaryBone from "../../assets/images/ToEarn/New/SummaryBone.png";
import ToEarnSlider from "../../components/Sliders/ToEarnSlider";
// import SidebarStatic from "../../components/Sidebar/SidebarStatic";

const ToEarn = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ToEarnPageContainer>
      <SidebarWrapper>
        {/* <TopHeading>
          <Img src={TopBoneDrop} alt="BoneDrop" />
          <Img src={TopAirdrop} alt="Airdrop" />
        </TopHeading> */}
        <ToEarnContainer>
          <ToEarnContent>
            <ToEarnCards>
              <ToEarnLeftCard>
                <Heading level={9} Big Color>
                  WEBSHOP RATINGS
                </Heading>
                <Heading level={10}>Rated: $1837 </Heading>
                <EarnedBone>
                  <Heading level={10}>BONE </Heading>
                  <Img src={EarnBone} alt="EarnBone" />
                  <Heading level={10} Color>
                    earned: 51
                  </Heading>
                </EarnedBone>
              </ToEarnLeftCard>
              <ToEarnCards Col>
                <ToEarnLeftCard>
                  <Heading level={9} Big Color>
                    WebShop EXPENDITURE
                  </Heading>
                  <Heading level={10}>TOTAL: $4372 </Heading>
                  <EarnedBone>
                    <Heading level={10}>BONE </Heading>
                    <Img src={EarnBone} alt="EarnBone" />
                    <Heading level={10} Color>
                      earned: 43
                    </Heading>
                  </EarnedBone>
                </ToEarnLeftCard>
                <ToEarnLeftCard>
                  <Heading level={9} Big Color>
                    CRYPTO EXPENDITURE
                  </Heading>
                  <Heading level={10}>TOTAL: $1837</Heading>
                  <EarnedBone>
                    <Heading level={10}>BONE </Heading>
                    <Img src={EarnBone} alt="EarnBone" />
                    <Heading level={10} Color>
                      earned: 87
                    </Heading>
                  </EarnedBone>
                </ToEarnLeftCard>
              </ToEarnCards>
            </ToEarnCards>
            <ToEarnCards>
              <DonateCard>
                <ToEarnLeftCard Differ>
                  <Heading level={9} Big Color>
                    STREET DOG FEEDING
                  </Heading>
                  <Heading level={10}>Donated: $428</Heading>
                  <EarnedBone>
                    <Heading level={10}>BONE </Heading>
                    <Img src={EarnBone} alt="EarnBone" />
                    <Heading level={10} Color>
                      earned: 398
                    </Heading>
                  </EarnedBone>
                </ToEarnLeftCard>
                <DonateCardButton>Donate</DonateCardButton>
              </DonateCard>
            </ToEarnCards>
            <ToEarnCards>
              <BoneTokenSummary>
                <ToEarnLeftCard Height>
                  <Heading level={9} Big Color>
                    DogBoNe Token Summary
                  </Heading>
                  <SummaryContent>
                    <EarnedBone Differ>
                      <Heading level={10}>Ratings</Heading>
                      <Heading level={10}>51</Heading>
                    </EarnedBone>
                    <EarnedBone Differ>
                      <Heading level={10}>Shop</Heading>
                      <Heading level={10}>43</Heading>
                    </EarnedBone>
                    <EarnedBone Differ>
                      <Heading level={10}>Crypto</Heading>
                      <Heading level={10}>87</Heading>
                    </EarnedBone>
                    <EarnedBone Differ>
                      <Heading level={10}>DogData</Heading>
                      <Heading level={10}>5017</Heading>
                    </EarnedBone>
                    <EarnedBone Differ>
                      <Heading level={10}>Donations</Heading>
                      <Heading level={10}>427</Heading>
                    </EarnedBone>
                  </SummaryContent>
                  <EarnedBone>
                    <Heading level={10}>Earned Total</Heading>
                    <Heading level={10}>5626</Heading>
                  </EarnedBone>
                </ToEarnLeftCard>
              </BoneTokenSummary>
            </ToEarnCards>
            <SummaryButtons>
              <div>
                <Img src={SummaryBone} alt="Bone" />
                <AmmountButton>
                  <Heading level={10}>Amount:</Heading>
                  <Heading level={10} Color>
                    300
                  </Heading>
                </AmmountButton>
              </div>
              <WithdrawButton>Withdraw</WithdrawButton>
            </SummaryButtons>
          </ToEarnContent>
          <ToEarnContentRight>
            <ToEarnSlider />
            <ToEarnRightCards>
              <ToEarnRightCard>
                <Heading level={9} Color>
                  DogData
                </Heading>
                <EarnedBone>
                  <Heading level={10}>BONE </Heading>
                  <Img src={EarnBone} alt="EarnBone" />
                  <Heading level={10} Color>
                    earned: 820
                  </Heading>
                </EarnedBone>
                <ShowButton Differ>85%</ShowButton>
                <Heading level={3} Differ>
                  PROFILE 85%COMPLETED
                </Heading>
              </ToEarnRightCard>
              <ToEarnRightCard>
                <Heading level={9} Color>
                  17 Judge Report
                </Heading>
                <EarnedBone>
                  <Heading level={10}>BONE </Heading>
                  <Img src={EarnBone} alt="EarnBone" />
                  <Heading level={10} Color>
                    earned: 87
                  </Heading>
                </EarnedBone>
                <ShowButton>Upload</ShowButton>
              </ToEarnRightCard>
              <ToEarnRightCard>
                <Heading level={9} Color>
                  19 Podium Photograph
                </Heading>
                <EarnedBone>
                  <Heading level={10}>BONE </Heading>
                  <Img src={EarnBone} alt="EarnBone" />
                  <Heading level={10} Color>
                    earned: 19
                  </Heading>
                </EarnedBone>
                <ShowButton>Upload</ShowButton>
              </ToEarnRightCard>
            </ToEarnRightCards>
            <Heading Align level={9} Color>
              Pedigree Database Builder Bonus
            </Heading>
            <BuilderBonus>
              <Builder>
                <Heading level={10}>GEORGE SHOWDOG AIRDROP TOTAL</Heading>
                <EarnedBone>
                  <Heading level={10}>BONE </Heading>
                  <Img src={EarnBone} alt="EarnBone" />
                  <Heading level={10} Color>
                    earned: 106
                  </Heading>
                </EarnedBone>
              </Builder>
              <Builder>
                <Heading level={10}>Jane</Heading>
                <EarnedBone>
                  <Heading level={10}>BONE </Heading>
                  <Img src={EarnBone} alt="EarnBone" />
                  <Heading level={10} Color>
                    earned: 73
                  </Heading>
                </EarnedBone>
              </Builder>
              <Builder>
                <Heading level={10}>Harry</Heading>
                <EarnedBone>
                  <Heading level={10}>BONE </Heading>
                  <Img src={EarnBone} alt="EarnBone" />
                  <Heading level={10} Color>
                    earned: 0
                  </Heading>
                </EarnedBone>
              </Builder>
              <Builder>
                <Heading level={10}>Norman</Heading>
                <EarnedBone>
                  <Heading level={10}>BONE </Heading>
                  <Img src={EarnBone} alt="EarnBone" />
                  <Heading level={10} Color>
                    earned: 19
                  </Heading>
                </EarnedBone>
              </Builder>
              <Builder>
                <Heading level={10}>Jennifer</Heading>
                <EarnedBone>
                  <Heading level={10}>BONE </Heading>
                  <Img src={EarnBone} alt="EarnBone" />
                  <Heading level={10} Color>
                    earned: 827
                  </Heading>
                </EarnedBone>
              </Builder>
              <Builder>
                <Heading level={10}>Howard</Heading>
                <EarnedBone>
                  <Heading level={10}>BONE </Heading>
                  <Img src={EarnBone} alt="EarnBone" />
                  <Heading level={10} Color>
                    earned: 2926
                  </Heading>
                </EarnedBone>
              </Builder>
              <Builder>
                <Heading level={10}>Tracey</Heading>
                <EarnedBone>
                  <Heading level={10}>BONE </Heading>
                  <Img src={EarnBone} alt="EarnBone" />
                  <Heading level={10} Color>
                    earned: 37
                  </Heading>
                </EarnedBone>
              </Builder>
              <Builder>
                <Heading level={10}>Deloris</Heading>
                <EarnedBone>
                  <Heading level={10}>BONE </Heading>
                  <Img src={EarnBone} alt="EarnBone" />
                  <Heading level={10} Color>
                    earned: 209
                  </Heading>
                </EarnedBone>
              </Builder>
              <Builder Differ>
                <Heading level={10}>Total All Dogs</Heading>
                <EarnedBone>
                  <Heading level={10}>BONE </Heading>
                  <Img src={EarnBone} alt="EarnBone" />
                  <Heading level={10} Color>
                    earned: 5017
                  </Heading>
                </EarnedBone>
              </Builder>
            </BuilderBonus>
          </ToEarnContentRight>
        </ToEarnContainer>
        <SocialCard>
          <SocialMedia>Earn Tokens Through social media activities</SocialMedia>
          <ToEarnCards Differ>
            <SocialIcons>
              <Img src={Telegram} alt="Telegram" />
              <Img src={Twitter} alt="Twitter" />
              <Img src={Discord} alt="Discord" />
              <a href="https://www.facebook.com/DogsData/" target="_blank" rel="noreferrer">
                <Img src={Facebook} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/blockpuppys/" target="_blank" rel="noreferrer">
                <Img src={Instagram} alt="Instagram" />
              </a>
              <Img src={Reddit} alt="Reddit" />
              <Img src={Youtube} alt="Youtube" />
              <Img src={M} alt="M" />
            </SocialIcons>
            <EarnToggleButtons>
              <ToggleEarnButtons />
            </EarnToggleButtons>
          </ToEarnCards>
        </SocialCard>
      </SidebarWrapper>
    </ToEarnPageContainer>
  );
};
export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  padding: 20px;
`;
export const ToEarnPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  grid-gap: 20px;
  padding: 20px;
`;

export const TopHeading = styled.div`
  display: flex;
  grid-gap: 5px;
`;

export const ToEarnContainer = styled.div`
  display: flex;
  grid-gap: 10px;

  @media screen and (max-width: 1300px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 1650px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const ToEarnContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 1700px) {
    justify-content: flex-start;
  }
`;

export const ToEarnCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ Col }) => (Col ? "column" : "row")};
  grid-gap: 30px;

  @media screen and (max-width: 900px) {
    justify-content: ${({ Differ }) => (Differ ? "center" : "space-between")};
  }
`;

export const ToEarnRightCards = styled.div`
  display: flex;
  justify-content: center;
  grid-gap: 30px;
  flex-wrap: wrap;
`;

export const DonateCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  grid-gap: 20px;
  background: #ffffff;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  padding: 20px;
`;

export const DonateCardButton = styled.div`
  background: rgba(251, 41, 255, 0.28);
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  padding: 10px 20px;

  font-family: "Inter-Regular";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  cursor: pointer;
`;

export const ToEarnLeftCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  grid-gap: 10px;
  background: #ffffff;
  box-shadow: ${({ Differ }) =>
    Differ ? "#DA9D02" : "0px 4px 50px rgba(0, 0, 0, 0.05)"};
  border-radius: 15px;
  padding: ${({ Differ }) => (Differ ? "20px 0" : "20px")};
  height: ${({ Height }) => (Height ? "100%" : "165px")};
`;

export const EarnedBone = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ Differ }) => (Differ ? "space-between" : "flex-start")};
  grid-gap: 10px;
`;

export const SocialCard = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  width: 850px;
  @media screen and (max-width: 1300px) {
    align-self: center;
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    align-items: center;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 5px;
`;

export const SocialMedia = styled.h2`
  font-family: "Inter-Regular";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: rgba(87, 113, 132, 0.6);
`;

export const EarnToggleButtons = styled.div`
  background: #2196f3;
  border: 1px solid #90caf9;
  border-radius: 10px;
  cursor: pointer;

  font-family: "Inter-Regular";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 29px;
  color: #ffffff;
  display: flex;
`;

export const BoneTokenSummary = styled.div`
  display: flex;
  grid-gap: 20px;
`;

export const SummaryContent = styled.div`
  padding: 10px 10px 10px 0;
`;

export const SummaryButtons = styled.div`
  display: flex;
  align-self: flex-end;
  flex-direction: column;
  grid-gap: 20px;
  margin-right: 30px;
  margin-top: -70px;

  img {
    align-self: flex-start;
  }
  @media screen and (max-width: 1700px) {
    align-self: flex-start;
    margin-top: 10px;
    margin-right: 0;
  }
`;

export const AmmountButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 30px;
  padding: 10px 20px;
  width: 225px;
  height: 60px;
  background: #ffffff;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  cursor: pointer;
`;

export const WithdrawButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  width: 240px;
  height: 70px;
  background: rgba(137, 211, 149, 0.62);
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  cursor: pointer;

  font-family: "Inter-Regular";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
`;

export const ToEarnContentRight = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 30px;
  padding: 20px 50px;
`;

export const ToEarnRightCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 30px;
  padding: 30px;
  text-align: center;
`;

export const ShowButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: rgba(97, 159, 216, 0.33);
  border: ${({ Differ }) =>
    Differ ? "none" : "1px solid rgba(0, 0, 0, 0.23)"};
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);
  border-radius: ${({ Differ }) => (Differ ? "50px" : "15px")};
  cursor: pointer;
  font-size: ${({ Differ }) => (Differ ? "30px" : "20px")};
  line-height: ${({ Differ }) => (Differ ? "37px" : "25px")};
  color: #9e9e9e;
  font-weight: 700;
  font-family: "Inter-Regular";
`;

export const DogShowTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #ffffff;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  margin-top: 20px;
  grid-gap: 80px;
`;

export const BuilderBonus = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Builder = styled.div`
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  padding: 20px;
  margin-top: ${({ Differ }) => (Differ ? "20px" : "")};
`;
export default ToEarn;
