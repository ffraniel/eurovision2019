import React from 'react';
import './Intro.css';
import Logo from './logo.svg';

const Intro = (props) => {
  return (
    <section className="intro">
      <section className="intro-titles">
        <h1 className="intro-title">Nul Points!</h1>
        <h1 className="intro-sub-title">Eurovision 2019</h1>
      </section>
      <p>Guess the country from the lyrics</p>
      <img className="logo" src={Logo} alt="logo" />
      <button onClick={()=>{props.startGame()}} className="game-button center-start">Start</button>
    </section>
  )
};

export default Intro;