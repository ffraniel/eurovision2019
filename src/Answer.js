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

  return (
    <section className="answer">
      <h1>{usersAnswer.country === currentAnswer.country ? 'Correct!' : 'Wrong!'}</h1>
      <h3>The answer was {currentAnswer.country}!</h3>
      <h5>The song was "{currentAnswer.song}"" by '{currentAnswer.artist}'</h5>
      {currentRound < 3 &&
      <button onClick={()=>{nextQuestion()}}>Next Question</button> 
      }
      {currentRound === 3 && !showingResults && 
        <button onClick={()=>{
          showResults();
          setShowingResults(true);
        }}>Show results</button>
      }
    </section>
  )
};

export default Answer;