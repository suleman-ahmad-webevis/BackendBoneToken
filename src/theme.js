import {createGlobalStyle} from "styled-components"

export const darkTheme = {
  body: "#000",
  Nav: "#000",
  ProductCategory: "#fff",
  headingColor: "lightblue"
}

export const lightTheme = {
  body: "#fff",
  Nav: "#2979FF",
  ProductCategory: "#000",
  headingColor: "#d23669"
}

export const GlobalStyles = createGlobalStyle`
 body {
  background: ${props => props.theme.body};
  color: ${props => props.theme.textColor};
  transition: .3s ease;
 }
`