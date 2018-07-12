import React, { Component } from 'react';
import 'typeface-roboto';

import { Router, Route } from 'react-router-dom';
import HomePage from './containers/HomePage';

import createBrowserHistory from 'history/createBrowserHistory';

// router will go here
class App extends Component {
  render() {
    const history = createBrowserHistory();
    return (
      <Router history={history}>
        <Route path="/" component={HomePage} />
      </Router>
    );
  }
}

export default App;
