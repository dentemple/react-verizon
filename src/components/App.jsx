import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';
import { GlobalStyle } from '../theme';

import Header from './features/Header';
import Home from './pages/Home';
import Foo from './pages/Foo';

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path='/foo' component={Foo} />
          <Route path='/' component={Home} />
        </Switch>
      </>
    );
  }
}

export default App;
