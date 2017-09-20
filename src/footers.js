import React from 'react';
import { Link } from 'react-router-dom';

export default class Footers extends React.Component {
  render() {
    return (
      <div>
        <p><Link to="/contact">Contact</Link></p>
        <p><Link to="/about">About</Link></p>
      </div>
    );
  }
}