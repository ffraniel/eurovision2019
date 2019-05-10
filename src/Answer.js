import React, {useState, useEffect} from 'react';
import './Answer.css';

const Answer = (props) => {
  const {
    currentAnswer,
    nextQuestion,
    showResults,
    usersAnswer,
    currentRound
  } = props;

  const [showingResults, setShowingResults] = useState(false);

  useEffect(()=>{
    console.log("live")
    // const points = document.querySelector('.points');
    // const central = document.querySelector('.points-central');
    // const highlight = document.querySelector('.highlight');
    // let start = central.getBoundingClientRect();
    // let finish = points.getBoundingClientRect();
    // let coords = {
    //   width: start.width,
    //   height: start.height,
    //   top: start.top,
    //   left: start.left
    // };
    // highlight.style.width = `${coords.width}px`;
    // highlight.style.height = `${coords.height}px`;
    // highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
    // setTimeout(()=>{
    //   let newCoords = {
    //     width: finish.width,
    //     height: finish.height,
    //     top: finish.top,
    //     left: finish.left
    //   };
    //   highlight.style.width = `${newCoords.width}px`;
    //   highlight.style.height = `${newCoords.height}px`;
    //   highlight.style.transform = `translate(${newCoords.left}px, ${newCoords.top}px)`;
    // }, 500);
  }, []);

  return (
    <section className="answer">
      {!showingResults &&
      <>
        <h1>{usersAnswer.country === currentAnswer.country ? 'Correct!' : 'Wrong!'}</h1>
        <h3> <img className="lilFlag" src={currentAnswer.lilFlag} alt={`${currentAnswer.country} flag`} /> The answer was {currentAnswer.country}! <img className="lilFlag" src={currentAnswer.lilFlag} alt={`${currentAnswer.country} flag`} /></h3>
        <h5>The song was '{currentAnswer.song}' by '{currentAnswer.artist}'.</h5>
        <img className="artist-image" src={currentAnswer.image} alt={`${currentAnswer.country} artist: ${currentAnswer.artist}`} />
      </>
      }
      {currentRound < 3 &&
      <button className="answer-button" onClick={()=>{nextQuestion()}}>Next Question</button> 
      }
      {currentRound === 3 && !showingResults && 
        <button className="answer-button" onClick={()=>{
          showResults();
          setShowingResults(true);
        }}>Show results</button>
      }
    </section>
  )
};

export default Answer;