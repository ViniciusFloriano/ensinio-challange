import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
  }

  body,
  input,
  button {
    font: 14px Inter, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
