import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    background-color: #dedad6;
  }
  
  * {
    box-sizing: border-box;
    font-family: "Teko", sans-serif;
  }

  body {
    font-family: "Teko", sans-serif;
  }

  circle,
  rect,
  line {
    stroke-width: 10px;
    stroke-linecap: round;
    fill: transparent;
  }
`;

export default GlobalStyle;
