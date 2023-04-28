import React from "react";
import styled from "styled-components";
import SettingComp from "../../components/Settings/SettingComp";
import SidebarStatic from "../../components/Sidebar/SidebarStatic";

const Settings = () => {
  return (
    <SettingsContainer>
      <SidebarStatic
        width="250px"
        position="relative"
        left="0px"
        top="0px"
        respTop="0px"
        respLeft="0px"
      />
      <SettingComp />
    </SettingsContainer>
  );
};

export default Settings;

export const SettingsContainer = styled.div`
  padding: 20px 10px;
  display: flex;
  grid-gap: 40px;
`;
