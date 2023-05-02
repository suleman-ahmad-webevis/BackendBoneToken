import React from "react";
import ConnectedUser from "../../assets/images/RegisterLogin/ConnectedUser.png";
import S from "../../assets/images/RegisterLogin/S.png";
import C from "../../assets/images/RegisterLogin/C.png";
import { Img } from "../../GlobalStyles";
import styled from "styled-components";
import PawSearch from "../../assets/images/RegisterLogin/PawSearch.png";
import HeartSearch from "../../assets/images/RegisterLogin/HeartSearch.png";

const CommonTabNav = () => {
  return (
    <>
      <CoinsIconWrapper>
        <CurrBox>
          {" "}
          <Img src={S} alt="S" />
          <h5>$0.00</h5>
        </CurrBox>
        <CurrBox>
          {" "}
          <Img src={C} alt="C" />
          <h5>$0.00</h5>
        </CurrBox>
        <ConnectBox>
          <Img src={ConnectedUser} alt="user" />
          <h5>Connect</h5>
        </ConnectBox>
      </CoinsIconWrapper>
      <SearchWrapper>
        <Search>
          <input placeholder="Smart Search" />
          <Img src={HeartSearch} alt="Search" />
        </Search>
        <Search>
          <input placeholder=" Search" alt="Search" />
          <Img src={PawSearch} />
        </Search>
      </SearchWrapper>
    </>
  );
};

export default CommonTabNav;

export const CoinsIconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CurrBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 5px;
  width: 32%;
  background: rgba(14, 98, 109, 0.5);
  border: 1px solid rgba(14, 98, 109, 0.5);
  border-radius: 8px;
  h5 {
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    color: #0e626d;
  }
`;

export const ConnectBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
  padding: 10px 5px;
  width: 32%;
  background: rgba(14, 98, 109, 0.5);
  border: 1px solid rgba(14, 98, 109, 0.5);
  border-radius: 8px;
  h5 {
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    color: #0e626d;
  }
`;

export const FlagSection = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 2px;
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  width: 49%;
  height: 40px;
  background: #fff;
  border: 1px solid rgba(14, 98, 109, 0.5);
  border-radius: 8px;
  input {
    border: none;
    border-radius: 8px;
    background: none;
    outline: none;
    font-weight: 900;
    font-size: 14px;
    line-height: 24px;
    color: rgba(14, 98, 109, 0.5);
    width: 100%;
    font-family: Inter-Regular;
    ::placeholder {
      font-weight: 900;
      font-size: 14px;
      line-height: 24px;
      color: rgba(14, 98, 109, 0.5);
    }
  }
`;
