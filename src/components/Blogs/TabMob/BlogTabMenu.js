import React, { useState } from "react";
import { Img } from "../../../GlobalStyles";
import Search from "../../../assets/images/LandingPage/Search.png";
import styled from "styled-components";

const BlogTabMenu = () => {
  const [searchPro, setSearchPro] = useState("");

  return (
    <MenuWrapper>
      <h5>Categories</h5>
      <SearchBar>
        <input
          type="text"
          placeholder="Search"
          value={searchPro}
          onChange={(e) => setSearchPro(e.target.value)}
        />
        <Img
          src={Search}
          alt="Search"
          style={{ position: "absolute", top: "14px", left: "15px" }}
        />
      </SearchBar>
    </MenuWrapper>
  );
};

export const MenuWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-gap: 10px;
  h5 {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.24px;
    color: rgba(27, 21, 61, 0.55);
  }
`;

export const SearchBar = styled.div`
  width: 45%;
  height: 48px;
  border: 1px solid rgba(144, 149, 166, 0.5);
  border-radius: 40px;
  position: relative;
  input {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: rgba(27, 21, 61, 0.55);
    letter-spacing: -0.24px;
    background: none;
    border: none;
    outline: none;
    padding: 15px 18px 0px 50px;
    width: 100%;
    ::placeholder {
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      color: rgba(27, 21, 61, 0.55);
    }
  }
  @media screen and (max-width: 700px) {
    width: 60%;
  }
`;

export default BlogTabMenu;
