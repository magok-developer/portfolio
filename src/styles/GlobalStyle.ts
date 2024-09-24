import { createGlobalStyle } from "styled-components";
import { Theme } from "./themes";

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.fontColor};
    transition: background-color 0.3s, color 0.3s;
  }
`;

export default GlobalStyle;
