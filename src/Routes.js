import React from 'react';
import {BrowswerRouter, Route, Switch, Link} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

export default () => {
  return(
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" exact component={Contact} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}