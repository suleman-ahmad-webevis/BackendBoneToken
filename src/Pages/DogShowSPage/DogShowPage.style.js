import styled from "styled-components";

export const DogShowPage = styled.div`
  display: flex;
  padding: 10px 20px;
`;

export const DogShowContainer = styled.div`
  max-width: 75%;
  display: flex;
  flex-direction: column;
  margin: 30px auto;
  grid-gap: 40px;
`;

export const WorldMapImage = styled.div`
  display: flex;
  margin: auto;
  width: 50%;
`;

export const DogShowDataWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  grid-gap: 15px;
`;

export const DogShowCard = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 15px;
  width: 23%;
  /* max-width: 23%; */
  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: #565656;
    opacity: 0.3;
  }
  @media screen and (max-width: 1820px) {
    width: 30%;
  }
  @media screen and (max-width: 1300px) {
    width: 42%;
  }
`;

export const RLEventSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Events = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 12px;
`;

export const Event = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: #414141;
  }
`;

export const LocationImg = styled.div`
  width: 20px;
`;
