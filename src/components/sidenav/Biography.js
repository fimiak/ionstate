import React from 'react';

function Biography(props) {
  return (
    <div className="biography">
      <div className="biography-text">
        <h3>Biography</h3>
        <p>
          {props.nation.biography}
        </p>
        <p>
          {props.nation['biography-extended']}
        </p>
      </div>
    </div>
  );
}

export default Biography;
