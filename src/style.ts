import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
  }

  body {
    margin: 0 48px;
    font-family: 'Roboto', sans-serif;
   /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
     "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
     sans-serif; */
  }
`;

export default GlobalStyle;
