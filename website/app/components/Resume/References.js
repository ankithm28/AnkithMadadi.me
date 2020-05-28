import React from 'react';
import { Link } from 'react-router-dom';

const References = () => (
  <div className="references">
    <div className="link-to" id="references" />
    <div className="title">
      <Link to="/contact">
        <h3>Need references about me? Contact me!</h3>
      </Link>
    </div>
  </div>
);

export default References;
