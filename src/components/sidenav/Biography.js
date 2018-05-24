import React from 'react';
import PropTypes from 'prop-types';

function Biography(props) {
  return (
    <div className="biography">
      <div className="biography-text">
        <h3>Biography</h3>
        <p>
          {props.biography}
        </p>
        <p>
          {props.extended}
        </p>
      </div>
    </div>
  );
}

Biography.defaultProps = {
  biography: 'Bio',
  extended: ' ',
};

Biography.propTypes = {
  biography: PropTypes.string,
  extended: PropTypes.string,
};

export default Biography;
