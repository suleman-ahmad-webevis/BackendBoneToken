import React, { useEffect } from "react";
import styled from "styled-components";
import RoadmapLeft from "../../components/RoadMap/RoadmapLeft";
import RoadmapRight from "../../components/RoadMap/RoadmapRight";
import { Img } from "../../GlobalStyles";
import RoadmapImg from "../../assets/images/RoadMap/Roadmap.png";
import CenterLine from "../../assets/images/RoadMap/CenterLine.png";

const RoadMap = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <RoadMapPage>
      <Img src={RoadmapImg} alt="Roadmap" />
      <RoadMapContainer>
        <RoadmapLeft />
        <Img src={CenterLine} alt="line" />
        <RoadmapRight />
      </RoadMapContainer>
    </RoadMapPage>
  );
};

export const RoadMapPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-gap: 40px;
  padding: 50px 5px;
`;

export const RoadMapContainer = styled.div`
  display: flex;
`;

export default RoadMap;
