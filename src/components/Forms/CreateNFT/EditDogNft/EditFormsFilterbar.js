import React, { useState } from "react";
import styled from "styled-components";
// import Puppy from "../../assets/images/Forms/Puppy.png";
import { Img } from "../../../../GlobalStyles";
import { NavLink } from "react-router-dom";

const types = [
  {
    text: "Dog",
    path: "/edit-dog-nft/dog-register",
  },
  {
    text: "Owner",
    path: "/edit-dog-nft/owner-register",
  },
  {
    text: "Veterinary",
    path: "/edit-dog-nft/veterinary-register",
  },
  {
    text: "Insurance",
    path: "/edit-dog-nft/insurance-register",
  },
  {
    text: "DogShow",
    path: "/edit-dog-nft/dogShow-register",
  },
  {
    text: "+Puppy",
    path: "/create-puppy-nft/dog-register",
  },
];

const Button = styled(NavLink)`
  cursor: pointer;
  font-weight: 900;
  font-size: 20px;
  line-height: 30px;
  display: flex;
  align-items: center;
  letter-spacing: 0.03em;
  color: rgba(121, 153, 157, 0.5);
  background: #ffffff;
  border: 2px solid rgba(121, 153, 157, 0.15);
  border-radius: 10.0374px;
  text-decoration: none;
  height: 50px;
  padding: 20px;
  white-space: nowrap;
  &.active {
    color: #ffffff;
    background: #79999d;
    border: 0px solid #d1ebff;
    border-radius: 10.0374px;
  }
`;
export const ButtonToggle = styled(Button)``;
export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 10px;
`;

function EditFormFilter() {
  return types.map((type) => (
    <ButtonGroup key={type.path}>
      <ButtonToggle to={type.path} key={type.path}>
        {type.text}
      </ButtonToggle>
    </ButtonGroup>
  ));
}

export default EditFormFilter;
