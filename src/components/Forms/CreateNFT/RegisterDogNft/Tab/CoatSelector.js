import React, { useState } from "react";
import { CoatsWrapper, ThreeCoats, TwoCoats } from "./RTab.style";

const CoatSelector = ({ setFieldValue }) => {
  const [active, setActive] = useState("");

  const types = [
    "Heavy coat",
    "Curly/Wavy/Fleece coat",
    "Long coat",
    "Wire coat",
    "Silk coat",
    "Smooth coat",
    "Short coat",
    "Double coat",
    "Combination coat",
    "Hairless coat",
  ];

  const coatHandler = (type) => {
    setActive(type);
    setFieldValue("coatType", type);
  };

  return (
    <>
      <CoatsWrapper>
        <TwoCoats
          active={active === types[0]}
          onClick={() => coatHandler(types[0])}
        >
          Heavy coat
        </TwoCoats>
        <TwoCoats
          active={active === types[1]}
          onClick={() => coatHandler(types[1])}
        >
          Curly/Wavy/Fleece coat
        </TwoCoats>
      </CoatsWrapper>
      <CoatsWrapper>
        <ThreeCoats
          active={active === types[2]}
          onClick={() => coatHandler(types[2])}
        >
          Long coat
        </ThreeCoats>
        <ThreeCoats
          active={active === types[3]}
          onClick={() => coatHandler(types[3])}
        >
          Wire coat
        </ThreeCoats>
        <ThreeCoats
          active={active === types[4]}
          onClick={() => coatHandler(types[4])}
        >
          Silk coat
        </ThreeCoats>
      </CoatsWrapper>
      <CoatsWrapper>
        <ThreeCoats
          active={active === types[5]}
          onClick={() => coatHandler(types[5])}
        >
          Smooth coat
        </ThreeCoats>
        <ThreeCoats
          active={active === types[6]}
          onClick={() => coatHandler(types[6])}
        >
          Short coat
        </ThreeCoats>
        <ThreeCoats
          active={active === types[7]}
          onClick={() => coatHandler(types[7])}
        >
          Double coat
        </ThreeCoats>
      </CoatsWrapper>
      <CoatsWrapper>
        <TwoCoats
          active={active === types[8]}
          onClick={() => coatHandler(types[8])}
        >
          Combination coat
        </TwoCoats>
        <TwoCoats
          active={active === types[9]}
          onClick={() => coatHandler(types[9])}
        >
          Hairless coat
        </TwoCoats>
      </CoatsWrapper>
    </>
  );
};

export default CoatSelector;
