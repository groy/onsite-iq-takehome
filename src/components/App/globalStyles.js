import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Roboto';
    color: #303179;
    background-color: #F0F1F7;
  }

  h1, h2, h3, h4, h5 {
    margin: 0;
    padding: 0;
  }

  h2 {
    font-size: 24px;
    font-weight: 600;
  }

  h4 {
    font-weight: 600;
  }
`;

export default GlobalStyle;
