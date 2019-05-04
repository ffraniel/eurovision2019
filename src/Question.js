import React from 'react';
import './Answer.css';
import songs from './data/songs.js';

const Question = (props) => {
  const { 
    currentRound, 
    choosenSongs,
    submitAnswerControl
   } = props;

  const getRandomOptions = () => {
    const randomOptions = [];
    randomOptions.push(choosenSongs[currentRound - 1]);

    // while (randomOptions.length < 4) {
    //   let currentSelection = allSongs[Math.round(Math.random() * allSongs.length)]; 
    //   for(var i = 0; i < randomOptions.length; i ++) {
    //     if (randomOptions[i].country !== currentSelection.country) {
    //       randomOptions.push(currentSelection);
    //     }
    //   }
    //   console.log(randomOptions);
    // };
    // return randomOptions;
    return songs;
  };

  const songOptions = getRandomOptions();

  var currentSong = choosenSongs[currentRound - 1];

  return (
    <section className="question">
      <h1>"{currentSong.lyrics}"</h1>
      {songOptions.map(song => (
        <button onClick={() => {
            submitAnswerControl(song);
          }}
          key={song.country}
        >{song.country}</button>
      ))} 
    </section>
  )
};

export default Question;