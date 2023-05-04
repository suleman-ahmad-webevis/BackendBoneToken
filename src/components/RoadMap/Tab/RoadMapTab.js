import React from "react";
import One from "../../../assets/images/RoadMap/Tab/One.png";
import Two from "../../../assets/images/RoadMap/Tab/Two.png";
import Three from "../../../assets/images/RoadMap/Tab/Three.png";
import Four from "../../../assets/images/RoadMap/Tab/Four.png";
import Five from "../../../assets/images/RoadMap/Tab/Five.png";
import Six from "../../../assets/images/RoadMap/Tab/Six.png";
import Seven from "../../../assets/images/RoadMap/Tab/Seven.png";
import Eight from "../../../assets/images/RoadMap/Tab/Eight.png";
import Nine from "../../../assets/images/RoadMap/Tab/Nine.png";
import Ten from "../../../assets/images/RoadMap/Tab/Ten.png";
import { Img } from "../../../GlobalStyles";
import { RMContainer, RMHeading } from "./RMTab.style";
import CommonMobNav from "../../CommonMTNav/CommonMobNav";
import useBreakpoint from "../../../hooks/useBreakPoint";
import CommonTabNav from "../../CommonMTNav/CommonTabNav";

const RoadMapTab = () => {
  const { isTablet, isSmallMobile, isMobile } = useBreakpoint();
  return (
    <RMContainer>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gridGap: "20px",
        }}
      >
        {(isSmallMobile || isMobile) && <CommonMobNav Width="100%" />}
        {(isTablet || isSmallMobile || isMobile) && (
          <CommonTabNav Width="100%" />
        )}
      </div>
      <RMHeading
        fontSize="36px"
        lineHeight="42.26px"
        style={{ alignSelf: "flex-start" }}
      >
        Roadmap
      </RMHeading>
      <Img src={One} alt="One" />
      <Img src={Two} alt="Two" />
      <Img src={Three} alt="Three" />
      <Img src={Four} alt="Four" />
      <Img src={Five} alt="Five" />
      <Img src={Six} alt="Six" />
      <Img src={Seven} alt="Seven" />
      <Img src={Eight} alt="Eight" />
      <Img src={Nine} alt="Nine" />
      <Img src={Ten} alt="Ten" />
      <RMHeading fontSize="30px" lineHeight="35.22px">
        Thanks for reading
      </RMHeading>
    </RMContainer>
  );
};

export default RoadMapTab;
