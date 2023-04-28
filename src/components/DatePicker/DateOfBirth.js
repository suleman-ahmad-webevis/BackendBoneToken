import DatePicker from "react-multi-date-picker";
import { Img } from "../../GlobalStyles";
import ArrowDown from "../../assets/images/ArrowDown.png";
import styled from "styled-components";

export default function DateOfBirth({ dob, setFieldValue }) {
  return (
    <DatePicker
      render={<CustomInput dob={dob} setFieldValue={setFieldValue} />}
    />
  );
}

function CustomInput({ openCalendar, dob, setFieldValue }) {
  return (
    <DateOfBirthField onClick={openCalendar}>
      <input
        placeholder="Date of birth"
        value={dob}
        onChange={(e) => setFieldValue("dob", dob)}
      />
      <Img src={ArrowDown} alt="ArrowDown" />
    </DateOfBirthField>
  );
}

export const DateOfBirthField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  border: 2px solid rgba(121, 153, 157, 0.15);
  border-radius: 8px;
  padding: 16px 20px;
  width: 420px;

  input {
    border: none;
    outline: none;
    background: none;
    outline: none;
    color: #797979;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;

    ::placeholder {
      font-family: "Inter-Regular";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;
      color: #b7b7b7;
    }
  }
`;
