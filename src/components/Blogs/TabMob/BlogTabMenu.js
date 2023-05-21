import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Img } from "../../../GlobalStyles";
import Search from "../../../assets/images/LandingPage/Search.png";
import { blogCat } from "../../Sidebar/BlogSidebar";

const BlogTabMenu = () => {
  const navigate = useNavigate();

  const [searchPro, setSearchPro] = useState("");
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <BlogMenuWrapper>
      <FilterDropDown onClick={() => setOpenMenu(!openMenu)}>
        {!openMenu ? (
          <h5>Categories</h5>
        ) : (
          <Filters>
            <CloseDropDown onClick={() => setOpenMenu(!openMenu)}>
              x
            </CloseDropDown>
            <FilterItems>
              {blogCat.map((item, index) => (
                <h5
                  key={index}
                  onClick={() => navigate(`/blogs?category=${item}`)}
                >
                  {item}
                </h5>
              ))}
            </FilterItems>
          </Filters>
        )}
      </FilterDropDown>

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
    </BlogMenuWrapper>
  );
};

export const BlogMenuWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-gap: 10px;
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

export const FilterDropDown = styled.div`
  position: relative;
  h5 {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.24px;
    color: rgba(27, 21, 61, 0.55);
  }
`;

export const Filters = styled.div`
  position: absolute;
  top: -25px;
  left: 5px;
  width: 160px;
  z-index: 99;
  padding: 5px 15px;
  border-radius: 12px;
  background: #fff;
`;

export const CloseDropDown = styled.div`
  transform: translate(90%, 10%);
  cursor: pointer;
  color: #fff;
`;

export const FilterItems = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
  h5 {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.24px;
    color: rgba(27, 21, 61, 0.55);
    cursor: pointer;
  }
`;

export default BlogTabMenu;
