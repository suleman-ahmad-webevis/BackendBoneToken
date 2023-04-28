import styled from "styled-components";

export const DogSaleCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 20px;
  width: 23%;
  padding: 20px 0px 10px 0px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px -19px 10px rgba(35, 89, 169, 0.15);
  border-radius: 12px;
  @media screen and (max-width: 1850px) {
    width: 31%;
  }
  @media screen and (max-width: 1450px) {
    width: 45%;
  }
`;

export const DogCardWrapper = styled.div`
  display: flex;
  grid-gap: 15px;
  justify-content: center;
`;

export const DogCardDetail = styled.div`
  display: flex;
  grid-gap: 10px 40px;
  width: 80%;
  flex-wrap: wrap;
`;

export const DogCardInfo = styled.div`
  display: flex;
  width: 39%;
  grid-gap: 15px;
`;

export const DogPicSection = styled.div`
  display: flex;
  grid-gap: 18px;
`;

export const DogPic = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 4px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  video {
    width: 127px;
    height: 76px;
    border-radius: 8px;
  }
`;
