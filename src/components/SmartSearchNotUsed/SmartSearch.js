import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../GlobalStyles";
import Heading from "../Heading/Heading";
import ColorSelector from "./ColorSelector";
import BreedSelector from "./BreedSelector";
import GenderButton from "./GenderButtons";
import SeasonsButton from "./SeasonsButton";
import { useDispatch } from "react-redux";
import DogAgeButton from "./DogAge";
import FCIGroupSelector from "./FCIGroupSelector";
import { toast } from "react-toastify";

const SmartSearchModal = ({ productId }) => {
  const dispatch = useDispatch();
  const [gender, setGender] = useState();
  const [season, setSeason] = useState();
  const [dogAge, setDogAge] = useState();
  const [smartBreed, setSmartBreed] = useState("Affenpinscher");
  const [FCIGroup, setFCIGroup] = useState();
  //ForBackgroundColorOfSelect
  const [color, setColor] = useState("Black");
  //ToSendApi
  const [coatColor, setCoatColor] = useState("Black");



  return (
    <ModalContentContainer>
      <ModalField>
        <ModalDataField>
          <Heading Font level={5}>
            Gender
          </Heading>
          <ModalIcons>
            <GenderButton gender={gender} setGender={setGender} />
          </ModalIcons>
        </ModalDataField>
        <ModalDataField>
          <Heading Font level={5}>
            Coat Color
          </Heading>
          <ModalIcons>
            <ColorSelector
              setColor={setColor}
              color={color}
              coatColor={coatColor}
              setCoatColor={setCoatColor}
            />
          </ModalIcons>
        </ModalDataField>
      </ModalField>
      <ModalDataField>
        <Heading Font level={5}>
          Age
        </Heading>
        <ModalIcons>
          <DogAgeButton dogAge={dogAge} setDogAge={setDogAge} />
        </ModalIcons>
      </ModalDataField>
      <ModalDataField>
        <Heading Font level={5}>
          Breed
        </Heading>
        <BreedSelector smartBreed={smartBreed} setSmartBreed={setSmartBreed} />
      </ModalDataField>
      <ModalDataField>
        <Heading Font level={5}>
          DogGroup FCI
        </Heading>
        <FCIGroupSelector setFCIGroup={setFCIGroup} />
      </ModalDataField>
      <ModalDataField>
        <Heading Font level={5}>
          Select season
        </Heading>
        <ModalField>
          <SeasonsButton season={season} setSeason={setSeason} />
        </ModalField>
      </ModalDataField>
      <Button>Tag Product</Button>
    </ModalContentContainer>
  );
};

export const ModalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  grid-gap: 20px;
  width: 100%;
`;

export const ModalField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-gap: 20px;
`;

export const ModalDataField = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
  width: 100%;
`;

export const ModalIcons = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 10px;
`;

export const ModalIcon = styled.div`
  background: #ffffff;
  border: 1px solid rgba(144, 202, 249, 0.5);
  border-radius: 8px;
  display: flex;
  grid-gap: 5px;
  align-items: center;
  padding: ${({ Padding }) => (Padding ? "10px 16px" : "10px 20px")};
`;

export default SmartSearchModal;
