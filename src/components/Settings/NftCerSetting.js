import React from "react";
import styled from "styled-components";
import Switch from "@mui/material/Switch";
import { nftCerLeft, nftCerRight } from "./BtnData";
import "./Setting.css";

const NftCerSetting = () => {
  return (
    <SettingContainer>
      <SettingWrapper>
        {nftCerLeft.map((value) => (
          <SettingBtnWrapper>
            <h5>{value}</h5>
            <NftCertificateSwitch defaultChecked />
          </SettingBtnWrapper>
        ))}
      </SettingWrapper>
      <SettingWrapper>
        {nftCerRight.map((value) => (
          <SettingBtnWrapper>
            <h5>{value}</h5>
            <NftCertificateSwitch defaultChecked />
          </SettingBtnWrapper>
        ))}
        <SettingSaveBtn>
          <h5>Save</h5>
        </SettingSaveBtn>
      </SettingWrapper>
    </SettingContainer>
  );
};

export default NftCerSetting;

export const SettingContainer = styled.div`
  display: flex;
  grid-gap: 20px;
`;

export const SettingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
`;

export const SettingBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 423px;
  height: 50px;
  padding: 10px 20px 10px 10px;
  border: 2px solid rgba(121, 153, 157, 0.15);
  border-radius: 8px;
  h5 {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #b7b7b7;
  }
`;

export const SettingSaveBtn = styled.button`
  background: #0e626d;
  border: 1px solid rgba(121, 153, 157, 0.15);
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 13px 20px;
  h5 {
    color: #ffffff;
    text-align: center;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
  }
`;

export const NftCertificateSwitch = styled(Switch)(({ theme }) => ({
  padding: 8,
  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 16,
      height: 16,
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: 16,
    height: 16,
    margin: 2,
  },
}));
