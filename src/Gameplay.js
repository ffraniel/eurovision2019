import React, {useState} from 'react';
import './Gameplay.css';
import Question from './Question';
import Answer from './Answer';
import Results from './Results';

const Gameplay = (props) => {
  const {
    currentRound,
    points,
    choosenSongs,
    submitAnswer,
    incrementRound
  } = props;

  const [questionMode, setQuestionMode] = useState(true);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [usersAnswer, setUsersAnswer] = useState(null);
  const [resultsShowing, setResultsShowing] = useState(false);

  const submitAnswerControl = (song) => {
    setCurrentAnswer(choosenSongs[currentRound - 1]);
    submitAnswer(song);
    setUsersAnswer(song);
    setQuestionMode(false);
  };

  const nextQuestion = () => {
    setUsersAnswer(null);
    setCurrentAnswer(null);
    incrementRound();
    setQuestionMode(true);
  };

  const showResults = () => {
    setResultsShowing(true);
  };

  return (
    <section className="gameplay">
      {resultsShowing &&
      <Results points={points}/>
      }
      {questionMode ? 
        <Question 
          currentRound={currentRound}
          choosenSongs={choosenSongs}
          submitAnswerControl={submitAnswerControl}
        /> : 
        <Answer 
          points={points}
          currentAnswer={currentAnswer}
          nextQuestion={nextQuestion}
          usersAnswer={usersAnswer}
          currentRound={currentRound}
          showResults={showResults}
        />
      }
    </section>
  )
};

export default Gameplay;