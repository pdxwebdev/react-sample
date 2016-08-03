import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import { Route } from 'react-router';
import { IndexRedirect } from 'react-router';
import { hashHistory } from 'react-router';

import App from 'screens/App';
import Home from 'screens/Home';
import Photography from 'screens/Photography';
import Digital from 'screens/Digital';
import Artwork from 'screens/Artwork';
import About from 'screens/About';


export default render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/home" />
      <Route path="home" components={{ content: Home }} />
      <Route path="photography" components={{ content: Photography }} />
      <Route path="digital" components={{ content: Digital }} />
      <Route path="artwork" components={{ content: Artwork }} />
      <Route path="about" components={{ content: About }} />
    </Route>
  </Router>
  ), document.getElementById('root'));
