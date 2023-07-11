import React from "react";
import styled from "styled-components";
// import Puppy from "../../assets/images/Forms/Puppy.png";
import { NavLink, useLocation } from "react-router-dom";

function FormFilter() {
  const location = useLocation();

  const types = [
    {
      text: "Register Dog ",
      path: "/create-dog-nft/register-dog",
    },
    {
      text: "DogData ",
      path: "/create-dog-nft/register-dogData",
    },
    { text: "Owner", path: "/create-dog-nft/register-owner" },
    {
      text: "Veterinary",
      path: "/create-dog-nft/register-veterinary",
    },
    {
      text: "Insurance",
      path: "/create-dog-nft/register-insurance",
    },
    {
      text: "DogShow",
      path: "/create-dog-nft/register-dogShow",
    },
  ];
  if (location?.pathname?.includes("/create-dog-nft/congratulations")) {
    types.push({
      text: "+ Puppy",
      path: "/create-puppy-nft/dog-register",
    });
  }
  return types.map((type) => (
    <ButtonGroup key={type.path}>
      <ButtonToggle to={type.path} key={type.path}>
        {type.text}
      </ButtonToggle>
    </ButtonGroup>
  ));
}

const Button = styled(NavLink)`
  cursor: pointer;
  font-weight: 900;
  font-size: 18px;
  line-height: 30px;
  display: flex;
  align-items: center;
  letter-spacing: 0.03em;
  color: rgba(121, 153, 157, 0.5);
  background: #fff;
  border: 1.25467px solid rgba(121, 153, 157, 0.15);
  border-radius: 10.0374px;
  text-decoration: none;
  height: 50px;
  padding: 20px;

  @media screen and (max-width: 1650px) {
    padding: 18px;
    font-size: 16px;
    white-space: nowrap;
  }
  @media screen and (max-width: 1260px) {
    font-size: 14px;
  }
  @media screen and (max-width: 1210px) {
    font-size: 13px;
  }
  @media screen and (max-width: 1110px) {
    font-size: 12px;
    line-height: 14.18px;
    padding: 10px;
  }

  &.active {
    color: #ffffff;
    background: #79999d;
    border: 1.25467px solid #d1ebff;
    border-radius: 10.0374px;
  }
`;
export const ButtonToggle = styled(Button)``;
export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 10px;
`;

export default FormFilter;
