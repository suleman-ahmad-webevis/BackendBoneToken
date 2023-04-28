import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Img } from "../../GlobalStyles";
import ArrowDown from "../../assets/images/GrayArrowDown.png";
import ArrowUp from "../../assets/images/GrayArrowUp.png";
import { getAllCategory } from "../../redux/category/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CategorySelector = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getAllCategory());
    // eslint-disable-next-line
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value.title);
    if (value.subCategories.length) {
      navigate(`/shop/category?name=${value.path}`);
    } else {
      navigate(`/shop?category=${value.path}`);
    }
    setIsOpen(false);
  };

  return (
    <DropDownContainer isOpen={isOpen}>
      <DropDownHeader onClick={() => setIsOpen(!isOpen)}>
        {selectedOption || "Categories"}
        <ArrowDownIcon isOpen={isOpen}>
          <Img src={ArrowDown} alt="ArrowDown" />
        </ArrowDownIcon>
        <ArrowUpIcon isOpen={isOpen}>
          <Img src={ArrowUp} alt="ArrowUp" />
        </ArrowUpIcon>
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList isOpen={isOpen}>
            {categories?.length &&
              categories?.map((option, index) => (
                <ListItem onClick={onOptionClicked(option)} key={index}>
                  {option.title}
                </ListItem>
              ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
};

export default CategorySelector;

const DropDownContainer = styled("div")`
  cursor: pointer;
  width: 100%;
  position: relative;
`;

const DropDownHeader = styled("div")`
  font-family: "Inter-Regular";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #a6ccea;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid rgba(121, 153, 157, 0.15);
  border-radius: 8px;
  padding: 13px;
  background: ${(props) => props.theme.body};
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  position: absolute;
  left: 0;
  right: 0;
  font-family: "Inter-Regular";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #b7b7b7;
  z-index: 400;
  background: #fff;
  overflow-y: ${({ isOpen }) => (isOpen ? "scroll" : "hidden")};
  height: ${({ isOpen }) => (isOpen ? "200px" : "53px")};

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #0e626d;
    border-radius: 5px;
    /* border: 1px solid ${(props) => props.theme.body}; */
  }
  ::-webkit-scrollbar-thumb {
    /* background: #79999d; */
    border-radius: 5px;
    border-left: 7px solid #a6ccea;
    border-right: 7px solid #a6ccea;
  }
`;

const ListItem = styled("li")`
  background: ${(props) => props.theme.body};
  border-width: 0px 2px 2px 2px;
  border-style: solid;
  border-color: rgba(121, 153, 157, 0.15);
  border-radius: 0px;
  list-style: none;
  padding: 12px 18px;
`;

const ArrowDownIcon = styled.div`
  display: ${({ isOpen }) => (isOpen ? "none" : "flex")};
  align-items: center;
`;

const ArrowUpIcon = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  align-items: center;
`;
