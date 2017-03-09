import React from 'react';
import {BrowserRouter as Router, Route, Link,Switch, Prompt} from 'react-router-dom';
import Header from '../components/Header';

export default (
  <Router>
    <Route path="/" component={Header} />
  </Router>
)
