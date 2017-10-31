import React from 'react';
import TwitterApi from './../api/TwitterApi';

function Biography() {
  return (
    <div className="biography">
      <div className="biography-text">
        <h3>Biography</h3>
        <p>
          {this.props.nation.biography}
        </p>
        <p>
          {this.props.nation['biography-extended']}
        </p>
      </div>
      <TwitterApi nation={this.props.nation} />
    </div>
  );
}

export default Biography;
