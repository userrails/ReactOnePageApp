import React from 'react';
import { Link} from 'react-router-dom';

export default () => {
  return(
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
    </div>
  )
}