import React from 'react';
import './Results.css';

const Results = (props) => {
  const {points, reset} = props;
  return (
    <section className="results">
      <h1 className="results-score">You scored {points}/3</h1>
      <button onClick={()=>{reset()}} className="reset-button">Restart</button>
    </section>
  );
};

export default Results;