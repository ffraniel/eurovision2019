import React from 'react';
import './Results.css';

const Results = (props) => {
  const {points} = props;
  return (
    <h1>You scored {points}/3</h1>
  );
};

export default Results;