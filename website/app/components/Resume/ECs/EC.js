import React from 'react';
import PropTypes from 'prop-types';

const EC = ({ data, last }) => (
  <li className="ec-container">
    <a href={data.link}>
      <h4 className="ec-number">{data.number}:</h4>
      <p className="ec-name">{data.title}</p>
    </a>
    {!last && <div className="ec-dot"><p className="ec-name"> &#8226;</p></div>}
  </li>
);

EC.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  last: PropTypes.bool,
};

EC.defaultProps = {
  last: false,
};


export default EC;
