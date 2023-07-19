import React, { useState } from "react";
import DogShowSelector from "../../../../assets/images/CreateNFT/DogShowSelector.png";
import styled from "styled-components";
import { Img } from "../../../../GlobalStyles";

const DogShows = ({ dogShow, setShowIdx }) => {
  return (
    <DogShowsContainer>
      {dogShow?.shows?.length
        ? dogShow?.shows?.map((val, idx) => (
            <DogShowImage key={idx} onClick={() => setShowIdx(idx)}>
              <Img src={DogShowSelector} />
              <div>
                <p style={{ cursor: "pointer" }}>
                  {val?.showName?.length > 9
                    ? `${val?.showName?.slice(0, 9)}...`
                    : val?.showName}
                </p>
              </div>
            </DogShowImage>
          ))
        : null}
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
    line-break: anywhere;
  }
`;

export default DogShows;
