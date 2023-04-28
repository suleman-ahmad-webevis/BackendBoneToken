import React, { useState } from "react";
import styled from "styled-components";
import NftCerSetting from "./NftCerSetting";
import DogsForSaleSetting from "./DogsForSaleSetting";

const SettingComp = () => {
  const [showSettings, setShowSettings] = useState(true);
  return (
    <SettingsContainer>
      <SettingsBtns>
        <SettingOneBtn
          showSettings={showSettings}
          onClick={() => setShowSettings(true)}
        >
          <h5>NFT Certificate </h5>
        </SettingOneBtn>
        <SettingTwoBtn
          showSettings={showSettings}
          onClick={() => setShowSettings(false)}
        >
          {" "}
          <h5>Dog for Sale</h5>
        </SettingTwoBtn>
      </SettingsBtns>
      <SettingSection>
        {showSettings ? <NftCerSetting /> : <DogsForSaleSetting />}
      </SettingSection>
    </SettingsContainer>
  );
};

export default SettingComp;

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
`;

export const SettingsBtns = styled.div`
  display: flex;
  grid-gap: 10px;
`;

export const SettingOneBtn = styled.div`
  background: ${({ showSettings }) => (showSettings ? "#0E626D" : "#ffffff")};
  border: 1.25467px solid rgba(121, 153, 157, 0.15);
  border-radius: 10.0374px;
  padding: 10px 15px 10px 15px;
  cursor: pointer;
  h5 {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: ${({ showSettings }) =>
      showSettings ? "#fff" : "rgba(121, 153, 157, 0.5)"};
  }
`;

export const SettingTwoBtn = styled.div`
  background: ${({ showSettings }) => (!showSettings ? "#0E626D" : "#ffffff")};
  border: 1.25467px solid rgba(121, 153, 157, 0.15);
  border-radius: 10.0374px;
  padding: 10px 15px 10px 15px;
  cursor: pointer;
  h5 {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: ${({ showSettings }) =>
      !showSettings ? "#fff" : "rgba(121, 153, 157, 0.5)"};
  }
`;

export const SettingSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 20px;
`;
