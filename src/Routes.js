import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

 import Headers from './Headers';
 import Footers from './footers';

import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';

export default () => {
  return(
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
    </div>
  )
}
