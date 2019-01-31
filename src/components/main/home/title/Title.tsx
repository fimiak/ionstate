import React from 'react';

function Title(props: any) {
  return (
    <h1 className="title">
      {props.title} <span>{props.subtitle}</span>
    </h1>
  );
}

export default Title;
