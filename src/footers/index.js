import React from 'react';
import {Link} from 'react-router-dom';

import './index.css'

export default class Footers extends React.Component {
  render() {
    return (
      <div>
        <div className="footer-section">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                  <div>
                    <h2>Quick Links</h2>
                    <ul>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/contact">Contact</Link></li>
                      <li><Link to="/about">About</Link></li>
                    </ul>
                  </div>
              </div>

              <div className="col-sm-4">
                <h2>About</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud</p>
              </div>
              <div className="col-sm-4">
                <h2>Contact</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}