import React from 'react';

function Biography(props) {
  return (
    <div className="biography">
      <div className="page-divider" />
      <div className="biography-text">
        <h4>Biography</h4>
        <p>{props.biography}</p>
        <p>{props.extended}</p>
      </div>
    </div>
  );
}

Biography.defaultProps = {
  biography: 'More about this subject may be researched at Wikipedia.org.',
  extended: ' '
};

export default Biography;
