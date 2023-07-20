import React from "react";
import DogShow from "../../../assets/images/Pdf/DogShow.png";
import styled from "styled-components";
import { Img } from "../../../GlobalStyles";

const DogShowSection = ({ dogShow }) => {
  return (
    <DSWrapper>
      <DSHead>
        <Img src={DogShow} alt="DogShow" />
        <h5>DogShows Results</h5>
      </DSHead>
      <DSDataWrapper>
        {dogShow?.shows.length ? (
          dogShow?.shows.map((val, idx) => (
            <DSData key={idx}>
              <DSItem>Show name</DSItem>
              <DSItem Colored>{val?.showName ? val?.showName : "-"}</DSItem>
              <DSItem>Country</DSItem>
              <DSItem Colored>{val?.country ? val?.country : "-"}</DSItem>
              <DSItem>Date</DSItem>
              <DSItem Colored>{val?.date ? val?.date : "-"}</DSItem>
              <DSItem>Judge</DSItem>
              <DSItem Colored>{val?.judge ? val?.judge : "-"}</DSItem>
              <DSItem>Class</DSItem>
              <DSItem Colored> {val?.class ? val?.class : "-"}</DSItem>
              <DSItem>Place</DSItem>
              <DSItem Colored>{val?.showName ? val?.showName : "-"}</DSItem>
              <DSItem>Show Critique</DSItem>
              <DSItem> ✅</DSItem>
              <DSItem> Podium Photos</DSItem>
              <DSItem> ✅</DSItem>
            </DSData>
          ))
        ) : (
          <DSData>
            <DSItem>Show name</DSItem>
            <DSItem Colored>-</DSItem>
            <DSItem>Country</DSItem>
            <DSItem Colored> -</DSItem>
            <DSItem>Date</DSItem>
            <DSItem Colored>-</DSItem>
            <DSItem>Judge</DSItem>
            <DSItem Colored>-</DSItem>
            <DSItem>Class</DSItem>
            <DSItem Colored>-</DSItem>
            <DSItem>Place</DSItem>
            <DSItem Colored>-</DSItem>
            <DSItem>Show Critique</DSItem>
            <DSItem> ✅</DSItem>
            <DSItem> Podium Photos</DSItem>
            <DSItem> ✅</DSItem>
          </DSData>
        )}
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
    width: 15%;
  }
  h5 {
    font-weight: 900;
    font-size: 18px;
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
  font-size: 20px;
`;

export const DSItem = styled.div`
  width: 50%;
  color: ${({ Colored }) => (Colored ? "#455B96" : "#000")};
`;
