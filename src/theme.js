import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    white: '#ffffff',
    black: '#111111',
    lightgray: '#d8dada'
  },
  fonts: {
    primary: 'sans-serif',
    secondary: 'serif'
  },
  screens: {
    desktop: 767,
    maxWidth: 1270
  },
  boxShadow: '0 3px 0px -2px #d8dada'
};

export const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    /* box */
    background-color: ${theme.colors.white};
    height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;

    /* content */ 
    font-family: ${theme.fonts.primary};
    color: ${theme.colors.black};
    font-family: sans-serif;
  }

  h1, h2, h3, h4, h5, h6, input {
    font-family: ${theme.fonts.secondary};
  }

  div#root {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
`;
