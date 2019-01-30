import React from 'react';

function DataBox(props) {
  return (
    <div className="img-highlight">
      <div className="img-highlight-leader">
        <img
          className="img-highlight-image"
          src={require(`../../../.././images/bio/${props.props.image}`)}
          alt={props.props.leader}
        />
      </div>
      <div className="img-highlight-text">
        <p>{props.props.leader}</p>
        <p>{props.props.name}</p>
      </div>
    </div>
  );
}

export default DataBox;
