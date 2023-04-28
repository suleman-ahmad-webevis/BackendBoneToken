import styled from "styled-components";

export const Button = styled.button`
  border-radius: 8px;
  box-shadow: ${({ primary }) =>
    primary ? "none" : "0px 4px 4px rgba(0, 0, 0, 0.25)"};
  padding: ${({ primary }) => (primary ? "10px 16px" : "16px")};
  cursor: pointer;
  border: 1px solid rgba(130, 151, 255, 0.5);
  background: ${({ primary }) => (primary ? "none" : "#b7b7b7")};
  color: ${({ primary }) => (primary ? "#2196F3" : "#fff")};
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ active }) =>
    active &&
    `
    background: ${({ primary }) => (primary ? "#2196F3" : "#fff")};
  `}
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#2196F3" : "#000000")};
    color: ${({ primary }) => (primary ? "#fff" : "#fff")};
  }
  &:disabled {
    background: none;
    color: #90caf9;
    cursor: not-allowed;
  }
`;
export const ButtonLabelWithIcon = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 5px;
`;

export const Img = styled.img`
  display: inline-block;
  vertical-align: top;
  max-width: 100%;
  height: auto;
  cursor: pointer;
`;

export const Input = styled.input`
  font-size: 16px;
  line-height: 19px;
  font-weight: 700;
  color: ${({ Color }) => (Color ? "rgba(144, 202, 249, 0.5)" : "#98A4AF")};
  outline: none;
  border: none;
  background: none;
  width: ${({ Width }) => (Width ? "90px" : "100%")};
  ::placeholder {
    color: ${({ Color }) => (Color ? "rgba(144, 202, 249, 0.5)" : "#98A4AF")};
  }
`;

export const GlobalHeading = styled.h1`
  font-size: ${({ FontSize }) => (FontSize ? FontSize : "16px")};
  font-weight: ${({ FontWeight }) => (FontWeight ? FontWeight : "700")};
  line-height: ${({ LineHeight }) => (LineHeight ? LineHeight : "12px")};
  color: ${({ Color }) => (Color ? Color : "#4A4A4A")};
`;
