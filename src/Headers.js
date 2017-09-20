import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';

export default () => {
  return(
    <BrowserRouter>
      <div>
        <div className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header pull-left">
              <ul className="nav navbar-nav">
                <li className="active"><Link to="/">Home<span className="sr-only">(current)</span></Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </div>
          </div>
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