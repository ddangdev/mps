import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Switch, Route, Link } from "react-router-dom";

import About from './About';
import Home from './Home';


const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/About" component={About} />
    </Switch>
  </main>
);

export default Main;
