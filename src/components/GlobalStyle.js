import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    /* box */
    height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;

    /* content */ 
    font-family: sans-serif;
  }

  div#root {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
`;

export default GlobalStyle;
