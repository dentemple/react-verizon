// React libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Styling
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

// Top-level component
import App from './components/App';

// Render page
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);
