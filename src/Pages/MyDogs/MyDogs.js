import React from "react";
import styled from "styled-components";
import MyDog from "../../components/MyDogs/MyDog";

const MyDogs = () => {
  return (
    <MyDogsContainer>
      <MyDog />
    </MyDogsContainer>
  );
};

export const MyDogsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-gap: 15px;
  padding: 0px 15px;
`;

export default MyDogs;
