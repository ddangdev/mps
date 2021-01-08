import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Switch, Route, Link } from "react-router-dom";

import Home from './Home';
import About from './About';
import Services from './Services';


const Main = () => (
  <main className='container'>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Services" component={Services} />
    </Switch>
  </main>
);

export default Main;
