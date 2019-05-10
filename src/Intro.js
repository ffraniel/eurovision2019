import React from 'react';
import './Intro.css';
import Logo from './logo.svg';

const Intro = (props) => {
  return (
    <section className="intro">
      <h1>Eurovision 2019 Lyrics Game</h1>
      <p>Guess the country from the lyrics</p>
      <img className="logo" src={Logo} alt="logo" />
      <button onClick={()=>{props.startGame()}} className="game-button center-start">Start</button>
    </section>
  )
};

export default Intro;