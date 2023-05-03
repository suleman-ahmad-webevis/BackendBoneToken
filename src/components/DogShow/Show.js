import React from "react";
import { CombinedShows, ShowsContainer } from "./Show.style";
import ShowCard from "./ShowCard";
import { one, two, three, four } from "./ShowData";
import styled from "styled-components";

const Shows = () => {
  return (
    <ShowsComp>
      <ShowsContainer>
        <CombinedShows>
          {one.map((value, index) => (
            <ShowCard value={value} key={index} />
          ))}
        </CombinedShows>
        <CombinedShows>
          {two.map((value, index) => (
            <ShowCard value={value} key={index} />
          ))}
        </CombinedShows>
      </ShowsContainer>
      <ShowsContainer>
        <CombinedShows>
          {three.map((value, index) => (
            <ShowCard value={value} key={index} />
          ))}
        </CombinedShows>
        <CombinedShows>
          {four.map((value, index) => (
            <ShowCard value={value} key={index} />
          ))}
        </CombinedShows>
      </ShowsContainer>
    </ShowsComp>
  );
};

export default Shows;

export const ShowsComp = styled.div`
  padding: 50px 0px;
`;
