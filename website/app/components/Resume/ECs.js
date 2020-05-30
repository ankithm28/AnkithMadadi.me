import React from 'react';
import PropTypes from 'prop-types';

import EC from './ECs/EC';

const getRows = (ecs) => ecs.sort((a, b) => {
  let ret = 0;
  if (a.university > b.university) ret = -1;
  else if (a.university < b.university) ret = 1;
  else if (a.number > b.number) ret = 1;
  else if (a.number < b.number) ret = -1;
  return ret;
}).map((ec, idx) => (
  <EC
    data={ec}
    key={ec.title}
    last={idx === ecs.length - 1}
  />
));

const ECs = ({ data }) => (
  <div className="ecs">
    <div className="link-to" id="ecs" />
    <div className="title">
      <h3>Selected ECs</h3>
    </div>
    <ul className="ec-list">
      {getRows(data)}
    </ul>
  </div>
);

ECs.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    number: PropTypes.string,
    link: PropTypes.string,
    university: PropTypes.string,
  })),
};

ECs.defaultProps = {
  data: [],
};

export default ECs;
