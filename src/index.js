// React libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// Styling
import { ThemeProvider as Theme } from 'styled-components';
import { theme } from './theme';

/**
 * Comment out the following section when activating Hot Module Reloading
 */

// import App from './components/App';

// ReactDOM.render(
//   <Theme theme={theme}>
//     <Router>
//       <App />
//     </Router>
//   </Theme>,
//   document.getElementById('root')
// );

/*
  
/** ------------------------------------------------------------------
 * Configures Hot Module Reloading.
 * Uncomment the following section to activate Hot Module Reloading
 */

// Necessary for hot reloading component state
import { AppContainer as HotReload } from 'react-hot-loader';

// Encapsulated in a function since render has to be run twice
let render = () => {
  const App = require('./components/App').default;

  ReactDOM.render(
    <HotReload>
      <Theme theme={theme}>
        <Router>
          <App />
        </Router>
      </Theme>
    </HotReload>,
    document.getElementById('root')
  );
};

module.hot.accept(['./components/App', './theme'], () => {
  // Hot swap
  render();
});

// Run for the first time
render();
