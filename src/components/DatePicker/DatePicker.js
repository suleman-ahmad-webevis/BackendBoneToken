import DatePicker from "react-multi-date-picker"
import {Img} from '../../GlobalStyles'
import DropIcon from '../../assets/images/DropIcon.png'
import { DateField } from "../Cards/MemberCard"

export default function DatePickerField() {
  return (
    <DatePicker
      render={<CustomInput />}
    />
  )
}

function CustomInput({ openCalendar, value, handleValueChange }) {
  return (
    <DateField onClick={openCalendar}>
        <input
        value={value}
        onChange={handleValueChange}
        />
        <Img src={DropIcon} alt="DropIcon" />
    </DateField>
  )
}

