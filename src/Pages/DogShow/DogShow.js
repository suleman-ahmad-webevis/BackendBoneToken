import React from "react";
import {
  DSHeading,
  DogShowContainer,
  DogShowWrapper,
  MapImg,
} from "./DogShow.styles";
import WorldMap from "../../assets/images/DogShowsImages/WorldMap.png";
import { Img } from "../../GlobalStyles";
import Shows from "../../components/DogShow/Show";
import useBreakpoint from "../../hooks/useBreakPoint";

const DogShow = () => {
  const { isTablet, isSmallMobile, isMobile } = useBreakpoint();
  return (
    <DogShowContainer>
      <DogShowWrapper>
        {(isTablet || isSmallMobile || isMobile) && (
          <DSHeading>Dog Shows</DSHeading>
        )}
        <MapImg>
          <Img src={WorldMap} alt="map" />
        </MapImg>
        <Shows />
      </DogShowWrapper>
    </DogShowContainer>
  );
};

export default DogShow;
