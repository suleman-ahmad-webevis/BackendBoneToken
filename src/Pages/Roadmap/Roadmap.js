import React from "react";
import { RMContainer, RMHeading } from "./RoadMap.styles";
// import One from "../../assets/images/RoadMap/One.png";
// import Two from "../../assets/images/RoadMap/Two.png";
// import Three from "../../assets/images/RoadMap/Three.png";
// import Four from "../../assets/images/RoadMap/Four.png";
// import Five from "../../assets/images/RoadMap/Five.png";
// import Six from "../../assets/images/RoadMap/Six.png";
// import Seven from "../../assets/images/RoadMap/Seven.png";
// import Eight from "../../assets/images/RoadMap/Eight.png";
// import Nine from "../../assets/images/RoadMap/Nine.png";
// import Ten from "../../assets/images/RoadMap/Ten.png";
import RMComp from "../../components/RoadMap/RoadMap";

const RoadMap = () => {
  return (
    <RMContainer>
      <RMHeading>Roadmap</RMHeading>
      <RMComp/>
    </RMContainer>
  );
};

export default RoadMap;
