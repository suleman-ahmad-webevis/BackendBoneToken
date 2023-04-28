import React, { useState } from "react";
import DogShowSelector from "../../../../assets/images/CreateNFT/DogShowSelector.png";
import styled from "styled-components";
import { Img } from "../../../../GlobalStyles";

const DogShows = () => {
  const [dogShowName] = useState("Name of dog show");
  return (
    <DogShowsContainer>
      <DogShowImage>
        <Img src={DogShowSelector} />
        <div>
          <p>
            {dogShowName.length > 9
              ? `${dogShowName.slice(0, 9)}...`
              : dogShowName}
          </p>
        </div>
      </DogShowImage>
      <DogShowImage>
        <Img src={DogShowSelector} />
        <div>
          <p>
            {dogShowName.length > 9
              ? `${dogShowName.slice(0, 9)}...`
              : dogShowName}
          </p>
        </div>
      </DogShowImage>

      <DogShowImage>
        <Img src={DogShowSelector} />
        <div>
          <p>
            {dogShowName.length > 9
              ? `${dogShowName.slice(0, 9)}...`
              : dogShowName}
          </p>
        </div>
      </DogShowImage>
      <DogShowImage>
        <Img src={DogShowSelector} />
        <div>
          <p>
            {dogShowName.length > 9
              ? `${dogShowName.slice(0, 9)}...`
              : dogShowName}
          </p>
        </div>
      </DogShowImage>

      <DogShowImage>
        <Img src={DogShowSelector} />
        <div>
          <p>
            {dogShowName.length > 9
              ? `${dogShowName.slice(0, 9)}...`
              : dogShowName}
          </p>
        </div>
      </DogShowImage>
      <DogShowImage>
        <Img src={DogShowSelector} />
        <div>
          <p>
            {dogShowName.length > 9
              ? `${dogShowName.slice(0, 9)}...`
              : dogShowName}
          </p>
        </div>
      </DogShowImage>
    </DogShowsContainer>
  );
};

const DogShowsContainer = styled.div`
  width: 18%;
  position: absolute;
  top: 240px;
  left: 82%;
  display: flex;
  flex-wrap: wrap;
  grid-gap: 5px;
`;

const DogShowImage = styled.div`
  position: relative;
  div {
    position: absolute;
    top: 30px;
    left: 25%;
    max-width: 50%;
  }
  p {
    font-size: 10px;
    text-align: center;
  }
`;

export default DogShows;
