// @flow
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../Home';
import NotFound from '../../components/NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
