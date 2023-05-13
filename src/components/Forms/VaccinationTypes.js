import React, { useState } from "react";
import styled from "styled-components";

const types = [
  {
    type: "Rabies 1 year",
    padding: "100px",
  },
  {
    type: "Rabies 3 year",
    padding: "100px",
  },
  {
    type: "Parvovirus",
    padding: "88px",
  },
  {
    type: "Distemper",
    padding: "85px",
  },
  {
    type: "Adenovirus type 1",
    padding: "130px",
  },
  {
    type: "Adenovirus type 2",
    padding: "130px",
  },
  {
    type: "Parainfluenza",
    padding: "100px",
  },
  {
    type: "Canine Influenza",
    padding: "118px",
  },
  {
    type: "Bordetella bronchiseptica ( kennel cough )",
    padding: "278px",
  },
  {
    type: "Lyme Disease",
    padding: "100px",
  },
  {
    type: "Leptospirosis",
    padding: "98px",
  },
];

const Button = styled.div`
  cursor: pointer;
  background: #ffffff;
  border: 2px solid rgba(121, 153, 157, 0.15);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 0 30px;
`;
export const ButtonToggle = styled(Button)`
  color: #b7b7b7;
  font-size: 14px;
  line-height: 17px;
  font-weight: 700;
  /* width: 100%; */
  ${({ active }) =>
    active &&
    `
  border-radius: 8px;
  background: #F2F4F4;
  color:#79999D;
  border: 2px solid #79999D;
  `}
`;
export const ButtonGroup = styled.div``;

const VaccinationTypes = ({
  setVaccinationPadding,
  vaccination,
  setVaccination,
}) => {
  const [active, setActive] = useState("");

  const genderHandler = (value) => {
    setActive(value.type);
    setVaccination({
      ...vaccination,
      vacType: value.type,
    });
    setVaccinationPadding(value.padding);
  };
  return types.map((value, index) => (
    <ButtonGroup key={index}>
      <ButtonToggle
        key={value.type}
        active={active === value.type}
        onClick={() => genderHandler(value)}
      >
        {value.type}
      </ButtonToggle>
    </ButtonGroup>
  ));
};

export default VaccinationTypes;
