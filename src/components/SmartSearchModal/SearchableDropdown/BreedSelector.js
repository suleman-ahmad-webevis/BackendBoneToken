import SearchableDropdown from "./SearchableDropdown";
import { breedsOptions } from "./data";
import { useState } from "react";

export default function BreedSelector({ setBreed }) {
  const [value, setValue] = useState("Breed");
  setBreed(value);
  return (
    <SearchableDropdown
      options={breedsOptions}
      id="id"
      selectedVal={value}
      handleChange={(val) => setValue(val)}
    />
  );
}
