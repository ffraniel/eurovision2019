import React, { useState } from 'react';
import './Question.css';
import songsJSON from './data/lyricsJson.json';
import Error from './Error';
import randomSongListMaker from './utilityFunctions/randomSongListMaker.js';
import getSnippet from './utilityFunctions/getSnippet.js';

const Question = (props) => {
  const { 
    currentRound, 
    choosenSongs,
    submitAnswerControl
   } = props;

  const [error, setError] = useState(null);
  
  const speak = (lyrics, startOver = true) => {
    var msg = new SpeechSynthesisUtterance();
    // msg.voice = voice;
    msg.text = lyrics;
    msg.pitch = 1.1;
    msg.rate = 0.9;
    speechSynthesis.cancel();
    speechSynthesis.speak(msg);
    if (startOver) {
      setTimeout(() => {
      }, 100);
    };
  };

  if (window.speechSynthesis === undefined) {
    window.speechSynthesis = false;
  }

  const stopSpeaking = () => {
    speechSynthesis.cancel();
  };
  
  const getRandomOptions = () => {
    const randomOptions = randomSongListMaker(songsJSON, 4, choosenSongs[currentRound-1]);
    return randomOptions;
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const makeSnippet = (songInput) => {
    const snippet = getSnippet(songInput);
    if (snippet.length === 0) {
      setError({message: "Lyrics snippet selection error. Please refresh the page."});
    }
    return snippet;
  };
  
  var songOptions = shuffleArray(getRandomOptions());
  var currentSong = choosenSongs[currentRound - 1];
  const lyrics = makeSnippet(currentSong);

  if (error) {
    return (
      <Error message={error.message} />
    )
  }

  return (
    <section className="question">
      {speechSynthesis && 
        <section className="question-play-buttons">
          <button className="speak-question" onClick={()=>{speak(lyrics)}}>Speak It!</button>
          <button className="speak-question" onClick={()=>{stopSpeaking()}}>Stop</button>
        </section>
      }
      <h1 className="question-lyrics">"...{lyrics}..."</h1>
      <section className="button-container">
      {songOptions.map((song, i)=> {
        if(song === undefined) {
          return <Error key={`error${i}`}/>
        }
        return (
          <button className="answer-button" onClick={() => {submitAnswerControl(song)}} key={song.country} >{song.country}</button>
        )}
      )}
      </section>
    </section>
  );
};

export default Question;