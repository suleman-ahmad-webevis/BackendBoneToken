import React, { useState } from "react";
import { ButtonGroup, ButtonToggle } from "./GenderButtons";
const types = [
  {
    image: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.5076 12.4012L12.7904 8.03614V7.28906C13.8923 6.95032 14.6963 5.92279 14.6963 4.71091C14.6963 3.22383 13.487 2.01416 11.9999 2.01416C10.513 2.01416 9.30299 3.22383 9.30299 4.71091C9.30299 5.14728 9.65642 5.5011 10.0931 5.5011C10.5298 5.5011 10.8833 5.14728 10.8833 4.71091C10.8833 4.09544 11.384 3.59459 11.9999 3.59459C12.6148 3.59459 13.1157 4.09549 13.1157 4.71091C13.1157 5.32633 12.6148 5.82678 11.9999 5.82678C11.5632 5.82678 11.2097 6.1805 11.2097 6.61692V8.03614L0.492483 12.4012C0.142002 12.5439 -0.0574736 12.9144 0.0146655 13.2852C0.0872958 13.656 0.412241 13.9234 0.790518 13.9234H6.28979V17.4698H17.7102V13.9234H23.2095C23.5875 13.9234 23.9124 13.656 23.9851 13.2852C24.0578 12.9144 23.8578 12.5439 23.5076 12.4012ZM17.7102 12.3429V12.0577H6.28979V12.3429H4.82555L11.9999 9.42048L19.1747 12.3429H17.7102Z"
          fill="#2196F3"
        />
        <path
          d="M6.28979 21.0284C6.28979 21.5573 6.7185 21.986 7.24739 21.986H16.7526C17.2815 21.986 17.7102 21.5573 17.7102 21.0284V18.7148H6.28979V21.0284Z"
          fill="#2196F3"
        />
      </svg>
    ),
    label: "Used",
  },
  {
    image: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.8646 0.905078L15.3404 0C15.3404 0 14.3581 1.86664 12 1.86664C9.64188 1.86664 8.65962 0 8.65962 0L5.13537 0.905078L0 5.87447L2.56114 10.155L5.13537 8.85281V24H18.8646V8.85281L21.4389 10.155L24 5.87447L18.8646 0.905078Z"
          fill="#2196F3"
        />
      </svg>
    ),
    label: "New",
  },
];

function ClothesButton({ setCloths }) {
  const clothsHandler = (type) => {
    setCloths(type.label);
    setActive(type);
  };

  const [active, setActive] = useState(types[0]);

  return types.map((type) => (
    <ButtonGroup key={type.label}>
      <ButtonToggle
        key={type.label}
        active={active === type}
        onClick={() => clothsHandler(type)}
      >
        <div>{type.image}</div>
      </ButtonToggle>
    </ButtonGroup>
  ));
}

export default ClothesButton;
