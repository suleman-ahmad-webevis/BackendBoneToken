import React from "react";
import {
  NftCertificateSwitch,
  SettingBtnWrapper,
  SettingContainer,
  SettingSaveBtn,
  SettingWrapper,
} from "./NftCerSetting";
import { dogSaleLeft, dogSaleRight } from "./BtnData";
import "./Setting.css";

const DogsForSale = () => {
  return (
    <SettingContainer>
      <SettingWrapper>
        {dogSaleLeft.map((value, index) => (
          <SettingBtnWrapper key={index}>
            <h5>{value}</h5>
            <NftCertificateSwitch defaultChecked />
          </SettingBtnWrapper>
        ))}
      </SettingWrapper>
      <SettingWrapper>
        {dogSaleRight.map((value, index) => (
          <SettingBtnWrapper key={index}>
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

export default DogsForSale;
