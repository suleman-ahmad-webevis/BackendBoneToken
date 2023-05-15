import styled from "styled-components";
import { TextField } from "@mui/material";

//TabNav
export const NftTabNav = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
`;
//Common and RegisterDog
export const RDTabContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const RDForm = styled.form`
  display: flex;
  flex-direction: column;
  grid-gap: 25px;
  position: relative;
`;

export const RDInput = styled(TextField)`
  width: ${({ Width }) => Width};
  & label {
    color: #b7b7b7;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    padding-left: ${({ paddingLeft }) => paddingLeft};
  }
  & label.Mui-focused {
    color: #b7b7b7;
  }
  & .MuiOutlinedInput-root {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    padding-left: ${({ paddingLeft }) => paddingLeft};

    & fieldset {
      border: 2px solid rgba(121, 153, 157, 0.15);
      border-radius: 8px;
    }
    &.Mui-focused fieldset {
      border: 2px solid rgba(121, 153, 157, 0.15);
      border-radius: 8px;
    }
  }
  & .MuiOutlinedInput-root {
    &:hover fieldset {
      border: 2px solid rgba(121, 153, 157, 0.15);
      border-radius: 8px;
    }
  }
  .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
    color: #b7b7b7 !important;
  }
`;

export const UploadPicsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
`;

export const DBGWrapper = styled.div`
  display: flex;
  grid-gap: 10px;
`;

export const CLWrapper = styled.div`
  display: flex;
  grid-gap: 10px;
`;

export const DFamilyWrapper = styled.div`
  display: flex;
  grid-gap: 10px;
`;

export const WHLWrapper = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 10px;
  width: 100%;
`;

export const CoatsWrapper = styled.div`
  display: flex;
  grid-gap: 10px;
  color: #b7b7b7;
  font-weight: 900;
`;

export const TwoCoats = styled.div`
  display: flex;
  background: #ffffff;
  border: 2px solid rgba(121, 153, 157, 0.15);
  border-radius: 8px;
  padding: 10px;
  width: 49%;
  font-size: 12px;
  font-weight: 900;

  ${({ active }) =>
    active &&
    `
    color:#79999D;
    background: #F2F4F4;;
    opacity: 1;
    border: 2px solid #79999D;
  `}

  @media screen and (max-width: 820px) {
    font-size: 11px;
  }
`;

export const ThreeCoats = styled.div`
  display: flex;
  background: #ffffff;
  border: 2px solid rgba(121, 153, 157, 0.15);
  border-radius: 8px;
  padding: 10px;
  width: 33%;
  ${({ active }) =>
    active &&
    `
    color:#79999D;
    background: #F2F4F4;;
    opacity: 1;
    border: 2px solid #79999D;
  `}
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 10px;
`;

export const Curr = styled.div`
  background: #ffffff;
  border: 2px solid rgba(121, 153, 157, 0.15);
  border-radius: 8px;
  padding: 15px 10px;
  color: #b7b7b7;
  text-align: center;
  font-weight: 900;

  ${({ active }) =>
    active &&
    `
    color:#79999D;
    background: #F2F4F4;;
    opacity: 1;
    border: 2px solid #79999D;
  `}
`;

//RegisterOwner
