import React from "react";
import styled from "styled-components";

function EditDogNftButton() {
  return <EditButton>EDIT <br /> DOG NFT</EditButton>;
}

export const EditButton = styled.button`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: white;

  background: #2196f3;
  border: 1px solid rgba(236, 239, 255, 0.5);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 15px 32.5px;
  position: absolute;
  cursor: pointer;
`;

export default EditDogNftButton;
