import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';

export default () => {
  return(
    <BrowserRouter>
      <div>
        <div>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/contact">Contact</Link></p>
          <p><Link to="/about">About</Link></p>
        </div>
        <Switch>
          
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}