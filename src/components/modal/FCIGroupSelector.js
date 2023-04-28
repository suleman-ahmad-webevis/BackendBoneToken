import React from "react";
import styled from "styled-components";

const options = [
  "Group I",
  "Group II",
  "Group III",
  "Group IV",
  "Group V",
  "Group VI",
  "Group VII",
  "Group VIII",
  "Group IX",
  "Group X",
];
const FCIGroupSelector = ({ setFCIGroup }) => {
  const handleChange = (e) => {
    setFCIGroup(e.target.value);
  };

  return (
    <CombinedFields>
      {options.map((item, index) => (
        <GenderField key={index}>
          <FormLabel>{item}</FormLabel>
          <input
            name="dogGroupFCI"
            value={item}
            onChange={(e) => handleChange(e)}
            type="radio"
          />
        </GenderField>
      ))}
    </CombinedFields>
  );
};

export const GenderField = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 12px;
  input {
    width: 50px;
    height: 40px;
    cursor: pointer;
    border: ${({ inputErrors }) =>
      inputErrors ? "1px solid red" : "1px solid #90caf9"};
    border-radius: 8px;
    outline: none;
    box-shadow: none;
    appearance: none;
    text-align: center;
    color: #2196f3;

    :checked {
      background: #2196f3;
    }

    ::placeholder {
      color: rgba(144, 202, 249, 0.5);
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
    }
    /* -moz-opacity: .4;
    -webkit-opacity: .4;
    opacity: .4; */
  }
`;

export const FormLabel = styled.label`
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: #98a4af;
  display: flex;
  grid-gap: 8px;
  margin-bottom: 10px;
`;

export const CombinedFields = styled.div`
  align-items: center;
  grid-gap: 10px;
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  border: ${({ inputErrors }) => (inputErrors ? "1px solid red" : "")};
  flex-wrap: wrap;
`;

export default FCIGroupSelector;
