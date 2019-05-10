import React, {useState} from 'react';
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
  console.log(currentAnswer.image)
  return (
    <section className="answer">
      {!showingResults &&
      <>
        <h1>{usersAnswer.country === currentAnswer.country ? 'Correct!' : 'Wrong!'}</h1>
        <h3>The answer was {currentAnswer.country}! <img className="lilFlag" src={currentAnswer.lilFlag} alt={`${currentAnswer.country} flag`} /></h3>
        <h5>The song was '{currentAnswer.song}' by '{currentAnswer.artist}'.</h5>
        <img className="artist-image" src={currentAnswer.image} alt={`${currentAnswer.country} artist image of ${currentAnswer.artist}`} />
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