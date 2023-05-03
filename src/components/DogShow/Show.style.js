import styled from "styled-components";

export const ShowsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1110px) {
    flex-direction: column;
  }
`;

export const CombinedShows = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (max-width: 1110px) {
    width: 100%;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Show = styled.div`
  width: 49%;
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
  padding: 20px 0px;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    padding: 0px;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
