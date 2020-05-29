import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const PageNotFound = () => (
  <div className="not-found">
    <Helmet title="404" />
    <h1>Page Not Found or 404 if you speak code!</h1>
    <img src={`/images/projects/sad-marshmello.jpg`} alt="" />
    <p>Return to <Link to="/">Home</Link>.</p>
  </div>
);

export default PageNotFound;
