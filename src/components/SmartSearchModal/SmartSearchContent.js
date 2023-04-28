import React, { useState } from "react";
import { Button, Img } from "../../GlobalStyles";
import Heading from "../Heading/Heading";
import GenderButton from "./GenderButtons";
import SeasonsButton from "./SeasonsButton";
import { useDispatch } from "react-redux";
import {
  getTheProducts,
  reset,
  setSmartSearch,
} from "../../redux/product/productSlice";
import DogAgeButton from "./DogAge";
import SmartSearchIcon from "../../assets/images/SmartSearchIcon.png";
import searchIconTwo from "../../assets/images/searchIconTwo.png";
import FCIGroupSelector from "./FCIGroupSelector";
import BreedSelector from "./SearchableDropdown/BreedSelector";
import CoatColor from "./CoatColor";
import PriceRange from "./PriceRange";
import SmartSlider from "./SmartSlider";
import {
  ModalContentMainContainer,
  ModalContentContainer,
  ModalDataField,
  SearchNFTNumber,
  SearchIcon,
  ModalIcons,
  CoatColorField,
  FCIField,
  ModalField,
  ModalContentWrapper,
  SmartSearchBtn,
  SmartSearchButton,
} from "./SmartSearchContent.style";

const SmartSearchContent = ({ setActive }) => {
  const dispatch = useDispatch();
  const [gender, setGender] = useState("Male");
  const [coatColor, setCoatColor] = useState("Black");
  const [age, setAge] = useState("Puppy");
  const [breed, setBreed] = useState();
  const [FCIGroup, setFCIGroup] = useState("Group I");
  const [season, setSeason] = useState("Summer");

  const smartSearchHandler = () => {
    const obj = {
      gender,
      coatColor,
      age,
      breed,
      dogGroupFCI: FCIGroup,
      season,
    };
    dispatch(reset());
    dispatch(getTheProducts(obj));
    dispatch(setSmartSearch([gender, coatColor, age, breed, FCIGroup, season]));
    setActive(false);
  };

  return (
    <ModalContentMainContainer>
      <ModalContentContainer>
        <ModalContentWrapper>
          <ModalDataField>
            <Heading Color level={5}>
              My Dogs
            </Heading>
            <SmartSlider />
          </ModalDataField>
          <ModalDataField>
            <Heading Color level={5}>
              NFT Number
            </Heading>
            <SearchNFTNumber>
              <input placeholder="Search" />
              <SearchIcon>
                <Img src={searchIconTwo} alt="icon" />
              </SearchIcon>
            </SearchNFTNumber>
          </ModalDataField>
          <ModalDataField>
            <Heading Color level={5}>
              Breed
            </Heading>
            <BreedSelector setBreed={setBreed} />
            {/* <BreedSelector options={breedsOptions} setOptions={setBreed} /> */}
          </ModalDataField>
          <ModalDataField>
            <Heading Color level={5}>
              Gender
            </Heading>
            <ModalIcons>
              <GenderButton gender={gender} setGender={setGender} />
            </ModalIcons>
          </ModalDataField>
          <ModalDataField>
            <Heading Color level={5}>
              Age
            </Heading>
            <ModalIcons>
              <DogAgeButton dogAge={age} setDogAge={setAge} />
            </ModalIcons>
          </ModalDataField>
          <Heading Color level={5}>
            Select Season
          </Heading>
          <ModalField>
            <SeasonsButton season={season} setSeason={setSeason} />
          </ModalField>
        </ModalContentWrapper>
        <ModalContentWrapper>
          <ModalDataField>
            <Heading Color level={5}>
              Coat Colour
            </Heading>
            <CoatColorField>
              <CoatColor setCoatColor={setCoatColor} />
            </CoatColorField>
          </ModalDataField>
          <ModalDataField style={{ width: "92%" }}>
            <Heading Color level={5}>
              DogGroup FCI
            </Heading>
            <FCIField>
              <FCIGroupSelector setFCIGroup={setFCIGroup} />
            </FCIField>
          </ModalDataField>
          <ModalDataField style={{ marginTop: "10px", width: "90%" }}>
            <Heading Color level={5}>
              Product Price Range
            </Heading>
            <PriceRange />
          </ModalDataField>
        </ModalContentWrapper>
      </ModalContentContainer>
      <SmartSearchBtn>
        <SmartSearchButton>
          <ModalIcons Weight onClick={smartSearchHandler}>
            Smart Search
            <Img src={SmartSearchIcon} alt="SSIcon" />
          </ModalIcons>
        </SmartSearchButton>
      </SmartSearchBtn>
    </ModalContentMainContainer>
  );
};

export default SmartSearchContent;
