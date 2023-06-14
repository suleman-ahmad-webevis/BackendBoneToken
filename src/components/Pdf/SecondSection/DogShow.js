import React from "react";
import DogShow from "../../../assets/images/Pdf/DogShow.png";
import styled from "styled-components";
import { Img } from "../../../GlobalStyles";

const DogShowSection = () => {
  return (
    <DSWrapper>
      <DSHead>
        <Img src={DogShow} alt="DogShow" />
        <h5>DogShows Results</h5>
      </DSHead>
      <DSDataWrapper>
        <DSData>
          <DSItem>Show name</DSItem>
          <DSItem>Komarom</DSItem>
          <DSItem>Country</DSItem>
          <DSItem>Hungary</DSItem>
          <DSItem>Date</DSItem>
          <DSItem>01-03 October 2020</DSItem>
          <DSItem>Judge</DSItem>
          <DSItem>Norbert Schlosser</DSItem>
          <DSItem>Class</DSItem>
          <DSItem> Group 5</DSItem>
          <DSItem>Place</DSItem>
          <DSItem> Reserve</DSItem>
          <DSItem>Show Critique</DSItem>
          <DSItem> ✅</DSItem>
          <DSItem> Podium Photos</DSItem>
          <DSItem> ✅</DSItem>
        </DSData>
      </DSDataWrapper>
    </DSWrapper>
  );
};

export default DogShowSection;

export const DSWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  grid-gap: 15px;
`;

export const DSHead = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 20px;
  width: 30%;
  img {
    border-radius: 20px;
  }
  h5 {
    font-weight: 900;
    font-size: 15px;
    line-height: 95%;
    color: #b1933c;
  }
`;

export const DSDataWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 80px;
`;

export const DSData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 50%;
  grid-gap: 5px 0px;
`;

export const DSItem = styled.div`
  width: 50%;
`;
