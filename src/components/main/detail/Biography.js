import React from 'react';

function Biography(props) {
  return (
    <div className="biography">
      <h4>Biography</h4>
      <div className="biography-text">
        <p>{props.biography}</p>
        <p>{props.extended}</p>
      </div>
    </div>
  );
}

Biography.defaultProps = {
  biography: 'This biography can be viewed at Wikipedia.org.',
  extended: ' '
};

export default Biography;
