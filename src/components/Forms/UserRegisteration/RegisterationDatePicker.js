import React from "react";
import styled from "styled-components";
const RegistrationDatePicker = ({ setFieldValue }) => {
  return (
    <DateComp
      min="1900-00-00"
      max="2023-04-00"
      type="date"
      onChange={(e) => setFieldValue("dob", e.target.value)}
    />
  );
};

export const DateComp = styled.input`
  background: #ffffff;
  border: 2px solid rgba(121, 153, 157, 0.15);
  border-radius: 8px;
  width: 70%;
  padding: 16px 20px;
  line-height: 17px;
  color: #b7b7b7;
  font-family: "Inter-Regular";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  &:focus {
    outline: none;
  }
  &:active {
    outline: none;
  }
  ::-webkit-calendar-picker-indicator {
    filter: invert(100%);
  }
`;
export default RegistrationDatePicker;
