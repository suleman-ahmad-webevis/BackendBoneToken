import React from "react";
import { Show } from "./Show.style";
import styled from "styled-components";
import { Img } from "../../GlobalStyles";
import Line from "../../assets/images/DogShowsImages/CardLine.png";
import useBreakpoint from "../../hooks/useBreakPoint";

const ShowCard = ({ value }) => {
  const { isDesktop } = useBreakpoint();
  return (
    <Show>
      <CardHeading>{value.month}</CardHeading>
      <CardData>
        <DataItems>
          {value.leftData.map(
            ({ imageUrl, date, alt, city, youtube }, index) => (
              <DataItem key={index}>
                <Img src={imageUrl} alt={alt} />
                <p>{date}</p>
                <p>{city}</p>
                {/* <Img src={youtube} alt="youtube" /> */}
              </DataItem>
            )
          )}
        </DataItems>
        <DataItems>
          {value.rightData.map(
            ({ imageUrl, date, alt, city, youtube }, index) => (
              <DataItem key={index}>
                <Img src={imageUrl} alt={alt} />
                <p>{date}</p>
                <p>{city}</p>
                {/* <Img src={youtube} alt="youtube" /> */}
              </DataItem>
            )
          )}
        </DataItems>
      </CardData>
      {value.divider && isDesktop && (
        <Img src={Line} alt="Line" style={{ width: "200px" }} />
      )}
    </Show>
  );
};

export default ShowCard;

const CardHeading = styled.h5`
  font-weight: 700;
  font-size: 24.3415px;
  line-height: 29px;
  color: #565656;
`;

const CardData = styled.div`
  display: flex;
  grid-gap: 10px;
  @media screen and (max-width: 1380px) {
    flex-direction: column;
    min-height: 110px;
  }
  @media screen and (max-width: 1110px) {
    flex-direction: row;
    min-height: 0px;
  }
  @media screen and (max-width: 920px) {
    flex-direction: column;
    min-height: 110px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: row;
  }
  @media screen and (max-width: 600px) {
    grid-gap: 50px;
  }
`;

const DataItems = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
  p {
    color: #414141;
    font-weight: 700;
    font-size: 8.59113px;
    line-height: 10px;
  }
`;

const DataItem = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 5px;
`;
