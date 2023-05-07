import styled from "styled-components";

export const PTabContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 25px;
  padding: 20px 30px;
`;

export const PTabHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FilterDropDown = styled.div`
  position: relative;
  h5 {
    font-size: 14px;
    font-weight: 500;
    color: rgba(27, 21, 61, 0.55);
    cursor: pointer;
  }
`;

export const Filters = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 160px;
  background: #fff;
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

export const PTabTitle = styled.h5`
  color: #1b153d;
  font-weight: 700;
  font-size: 36px;
  line-height: 48px;
  letter-spacing: -0.24px;
  @media screen and (max-width: 600px) {
    font-size: 28px;
  }
`;

export const PTabProductList = styled.div`
  height: 100vh;
  overflow-y: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  grid-gap: 25px 0px;
  &::-webkit-scrollbar {
    display: block;
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.35);
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #314552;
    border-right: none;
    border-left: none;
    border-radius: 10px;
  }
`;

export const PTabCategories = styled.div`
  display: flex;
  grid-gap: 45px;
  overflow-x: scroll;
  width: 90%;
  ::-webkit-scrollbar {
    width: 1px;
  }
  ::-webkit-scrollbar-track {
    background: white;
  }
  ::-webkit-scrollbar-thumb {
    background: white;
  }
`;

export const CategoriesNav = styled.p`
  text-decoration: none;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 500;
  color: ${({ activeCat, activeIdx, keyIs }) =>
    activeCat && activeIdx === keyIs ? "#5b41ff;" : "rgba(27, 21, 61, 0.55);"};
  ::before {
    content: "";
    display: block;
    border-top: 0px solid black;
    /* margin-bottom: 10px; */
  }
  ::after {
    content: "";
    display: block;
    border-top: ${({ activeCat, activeIdx, keyIs }) =>
      activeCat && activeIdx === keyIs
        ? "  1px solid #5b41ff;"
        : "  0px solid #5b41ff;"};
    margin-top: 10px;
    width: 50px;
  }
`;

export const LangSelect = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 10px;
`;
// For mobile
export const MobileComIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  grid-gap: 12px;
`;
