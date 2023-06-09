import React, { useEffect } from "react";
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
import CommonMobNav from "../../components/CommonMTNav/CommonMobNav";
import CommonTabNav from "../../components/CommonMTNav/CommonTabNav";
import { useDispatch } from "react-redux";
import { getTheVideos } from "../../redux/dogShow/dogShowSlice";
import Back from "../../components/Back/Back";

const DogShow = () => {
  // const { videoInfo } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTheVideos());
    // eslint-disable-next-line
  }, []);
  const { isTablet, isSmallMobile, isMobile } = useBreakpoint();
  return (
    <DogShowContainer>
      {(isSmallMobile || isMobile) && <CommonMobNav />}
      {(isTablet || isSmallMobile || isMobile) && <CommonTabNav />}
      <DogShowWrapper>
        {(isTablet || isSmallMobile || isMobile) && (
          <>
            <div style={{ alignSelf: "flex-start" }}>
              <Back />
            </div>
            <DSHeading>Dog Shows</DSHeading>
          </>
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
