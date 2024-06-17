import React from "react";

const Person = (props) => {
  
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.imdb}</h2>
      <h3>{props.relase}</h3>
      <h3>{props.actor}</h3>
    </div>
  );
};

export default Person;
