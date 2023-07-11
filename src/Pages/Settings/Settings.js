import React from "react";
import styled from "styled-components";
import SettingComp from "../../components/Settings/SettingComp";

const Settings = () => {
  return (
    <SettingsContainer>
      <SettingComp />
    </SettingsContainer>
  );
};

export default Settings;

export const SettingsContainer = styled.div`
  padding: 20px 10px;
  display: flex;
  justify-content: center;
  grid-gap: 40px;
`;
