import { useEffect, useRef, useState } from "react";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  Dropdown,
  DropDownHeader,
  DropDownOption,
  OptionList,
} from "./styles";
import { Img } from "../../../GlobalStyles";
import ArrowDown from "../../../assets/images/ArrowDown.png";
import ArrowUp from "../../../assets/images/ArrowUp.png";

const SearchableDropdown = ({ options, id, selectedVal, handleChange }) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", toggle);
    return () => document.removeEventListener("click", toggle);
  }, []);

  const selectOption = (option) => {
    setQuery(() => "");
    handleChange(option);
    setIsOpen((isOpen) => !isOpen);
  };

  function toggle(e) {
    setIsOpen(e && e.target === inputRef.current);
  }

  const getDisplayValue = () => {
    if (query) return query;
    if (selectedVal) return selectedVal;

    return "";
  };

  const filter = (options) => {
    return options.filter(
      (option) => option.toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  };

  return (
    <Dropdown>
      <div className="control">
        <DropDownHeader>
          <input
            ref={inputRef}
            type="text"
            value={getDisplayValue()}
            name="searchTerm"
            onChange={(e) => {
              setQuery(e.target.value);
              handleChange(null);
            }}
            onClick={toggle}
          />
        </DropDownHeader>
        <ArrowDownIcon isOpen={isOpen}>
          <Img src={ArrowDown} alt="ArrowDown" />
        </ArrowDownIcon>
        <ArrowUpIcon isOpen={isOpen}>
          <Img src={ArrowUp} alt="ArrowUp" />
        </ArrowUpIcon>
      </div>
      <OptionList isOpen={isOpen}>
        {filter(options).map((option, index) => {
          return (
            <DropDownOption
              onClick={() => selectOption(option)}
              key={`${id}-${index}`}
            >
              {option}
            </DropDownOption>
          );
        })}
      </OptionList>
    </Dropdown>
  );
};

export default SearchableDropdown;
