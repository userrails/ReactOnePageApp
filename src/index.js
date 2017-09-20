import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './index.css';
import Headers from './Headers';
import Footers from './footers';

import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';

ReactDOM.render(
	<div>
     <BrowserRouter>
        <div>
            <Headers/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/about" component={About} />
            </Switch>
            <Footers/>
        </div>
    </BrowserRouter>
  </div>, document.getElementById('root')
);
