import React, { useState } from "react";
import styled from "styled-components";

const options = [
  {
    colorName: "OffWhite",
    selectedColor: "#D9D9D9",
  },
  {
    colorName: "Gray",
    selectedColor: "#7D7D7D",
  },
  {
    colorName: "Black",
    selectedColor: "#000000",
  },
  {
    colorName: "Red",
    selectedColor: "#D23434",
  },
  {
    colorName: "Dark Blue",
    selectedColor: "#0602BC",
  },
  {
    colorName: "Blue",
    selectedColor: "#D34ED6",
  },
  {
    colorName: "SkyBlue",
    selectedColor: "#697FF0",
  },
  {
    colorName: "Green",
    selectedColor: "#39C268",
  },
  {
    colorName: "Yellow",
    selectedColor: "#E7E04D",
  },
];

const DetailColorSelector = ({ color, setColor }) => {
  const [selectedOption, setSelectedOption] = useState("Black");

  const onOptionClicked = (value) => {
    setSelectedOption(value.colorName);
    setColor(value.colorName);
  };

  return (
    <ColorList>
      {options.map((option, index) => (
        <div key={option.colorName}>
          <ColorBox
            onClick={() => onOptionClicked(option)}
            style={{ background: option.selectedColor }}
          />
        </div>
      ))}
    </ColorList>
  );
};

const ColorList = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 10px;
  @media screen and (max-width: 400px) {
    flex-wrap: wrap;
  }
`;
const ColorBox = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 360px;
  cursor: pointer;
`;
export default DetailColorSelector;
