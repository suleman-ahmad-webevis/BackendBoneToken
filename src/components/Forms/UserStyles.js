import { TextField } from "@mui/material";
import styled from "styled-components";

export const RegisterSidebar = styled.div`
  display: flex;
`;

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  max-width: 80%;
  margin: auto;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-gap: 40px;
  padding: 30px;
  margin: auto;
`;

export const RegisterWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

export const RegisterDogContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  grid-gap: 60px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 20px;
  background: #ffffff;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);
  border-radius: 50px;
  padding: 10px 20px 40px;
  width: ${({ width }) => (width ? width : "900px")};
  margin: auto;
  position: relative;
  .react-tel-input .form-control {
    width: 100%;
    border: 2px solid rgba(121, 153, 157, 0.15);
    border-radius: 8px;
    height: 58px;
    outline: none;
    box-shadow: none;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: rgb(183, 183, 183);
  }
  .react-tel-input .selected-flag.open:before {
    background: none;
    outline: none;
    box-shadow: none;
    border: none;
    transition: none;
  }
  .react-tel-input .special-label {
    color: #2196f3;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
  }
  .react-tel-input .selected-flag .arrow {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #b7b7b7;
  }
  .react-tel-input .country-list .country-name {
    margin-left: 25px;
  }
  .react-tel-input .flag-dropdown {
    border: 2px solid rgba(121, 153, 157, 0.15);
    background-color: #fff;
    border-right: none;
    box-shadow: none;
  }

  @media screen and (max-width: 786px) {
    padding: 10px 10px;
  }
`;

export const FormHeading = styled.div``;

export const FormInput = styled.input`
  background: #ffffff;
  padding: 16px 20px;
  outline: none;
  color: #b7b7b7;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  position: relative;
  border: 2px solid rgba(121, 153, 157, 0.15);
  border-radius: 8px;
  ::placeholder {
    font-family: "Inter-Regular";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #b7b7b7;
  }
`;
export const AddressFieldIcon = styled.div`
  position: absolute;
  top: 52px;
  left: 15px;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 5px;
  width: 100%;
  position: relative;
  textarea {
    padding: 10px 20px;
    height: 100px;
    width: 100%;
    outline: none;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
  }
  .css-e13as6-MuiFormControl-root-MuiTextField-root {
    width: 100%;
  }
`;
export const Newsletter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  p {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #c1c1c1;
  }
  input {
    width: 15px;
    height: 15px;
    background: #ffffff;
    border: 2px solid #e3e9ee;
    border-radius: 4px;
  }
`;
export const FormTextField = styled(TextField)`
  position: ${({ position }) => position};
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

export const CombinedFields = styled.div`
  display: flex;
  align-items: ${({ align }) => (align ? align : "center")};
  gap: 20px;
  width: 100%;
  justify-content: space-between;
`;

export const LeftSide = styled.div`
  align-self: center;
  @media screen and (max-width: 1300px) {
    display: none;
  }
`;

export const RightSide = styled.div`
  align-self: flex-end;
  margin-bottom: 80px;
  @media screen and (max-width: 1300px) {
    display: none;
  }
`;
export const FormButton = styled.button`
  background: ${({ bg }) => (bg ? "#3dbb8b" : "#80C6FF")};
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: ${({ width }) => (width ? "max-content" : "100%")};
  padding: 12px 2rem;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
`;

export const FieldError = styled.div`
  color: red;
  font-size: 12px;
  line-height: 17px;
  font-weight: bold;
  align-self: flex-start;
`;
export const Upload = styled.div`
  width: ${({ Differ }) => (Differ ? "150px" : "100%")};
  height: ${({ Differ }) => (Differ ? "53px" : "182px;")};
  background: #ffffff;
  border: 2px solid rgba(121, 153, 157, 0.15);
  border-radius: 8px;
  padding: ${({ Differ }) => (Differ ? "16px" : "16px 20px;")};
  outline: none;
  color: #2196f3;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
`;

export const FileAccept = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  img {
    width: 100%;
    object-fit: cover;
  }
  video {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

export const UploadText = styled.div`
  font-size: ${({ Differ }) => (Differ ? "10px" : "18px")};
  line-height: ${({ Differ }) => (Differ ? "12px" : "22px")};
  color: #b7b7b7;
  @media screen and (max-width: 820px) {
    font-size: ${({ Differ }) => (Differ ? "8px" : "12px")};
  }
`;

export const SmallImage = styled.div`
  img {
    width: 20px;
    height: 18px;
  }
`;

export const CategoriesField = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 15px;
  flex-wrap: wrap;
`;

export const PageChanged = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -110px;
  grid-gap: 15px;
  @media screen and (max-width: 820px) {
    grid-gap: 25px;
  }
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 200px 0 150px 0;
`;

export const PhoneIcon = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
`;

export const NextButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: ${({ Back }) => (Back ? "flex-start" : "flex-end")};
  margin-top: 10px;
  border: none;
  background: none;
  cursor: pointer;
`;

export const DateInput = styled.input``;

export const FormBtn = styled.button`
  background: ${({ bg }) => (bg ? bg : "#80C6FF")};
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: ${({ width }) => (width ? width : "100%")};
  padding: 12px 2rem;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
`;
