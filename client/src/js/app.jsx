import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout from './components/layouts/Layout';
import Index from './containers';

import '../css/bootstrap.css';
import '../css/main.css';
import '../css/font-awesome.css';

render(
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Index}></IndexRoute>
    </Route>
  </Router>,
  document.getElementById('app')
);
