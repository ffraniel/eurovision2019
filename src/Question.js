import React, {useEffect} from 'react';
import './Answer.css';
import songs from './data/songs.js';
import songsJSON from './data/lyricsJson.json';

const Question = (props) => {
  const { 
    currentRound, 
    choosenSongs,
    submitAnswerControl
   } = props;

  const getRandomOptions = () => {
    console.log("called it *****")
    const randomOptions = [];
    var songsList = songsJSON;
    randomOptions.push(choosenSongs[currentRound - 1]);
    while(randomOptions.length < 4) {
      let randomNum = Math.round(Math.random() * songsList.length);
      randomOptions.push(songsList[randomNum]);
      randomOptions.splice(randomNum, 1);
    };
    return randomOptions;
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    console.log(array)
    return array;
  }
  var songOptions = shuffleArray(getRandomOptions());
  var currentSong = choosenSongs[currentRound - 1];

  let snippetArray = currentSong.lyrics.split(" ");
  let start = Math.round(Math.random() * (snippetArray.length / 2));
  let possibleLengths = [30, 50, 20, 16, 26, 40];
  let snippetLength = possibleLengths[Math.round(Math.random() * possibleLengths.length)];
  let end = start + snippetLength;
  let lyrics = snippetArray.slice(start, end).join(" ");

  return (
    <section className="question">
      <h1>"{lyrics}"</h1>

      {songOptions.map(song => (
        <button 
          onClick={() => {
            submitAnswerControl(song);
          }}
          key={song.country}
        >{song.country}</button>
      ))}
    </section>
  )
};

export default Question;