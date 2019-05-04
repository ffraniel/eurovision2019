import React, { Component }from 'react';
import './App.css';
import Gameplay from './Gameplay';
import Intro from './Intro';
import songs from './data/songs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      active: false,
      currentRound: 1,
      points: 0,
      lyricSnippet: '',
      choosenSongs: []
    }
    this.startGame = this.startGame.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
    this.incrementRound = this.incrementRound.bind(this);
  };

  componentDidMount () {
    this.setState({
      choosenSongs: songs
    })
  }

  startGame () {
    this.setState(state => {
      if (state.active) {
        return {
          active: false,
          currentRound: 1,
          points: 0,
          choosenSongs: songs
        }
      } else if (!state.active) {
        return {
          active: true
        }
      }
    });
  };

  submitAnswer (submittedAnswer) {
    const currentAnswer = this.state.choosenSongs[this.state.currentRound - 1];
    if (currentAnswer.country === submittedAnswer.country) {
      this.setState(state => {
        return {
          points: state.points + 1
        };
      });
    };
  };

  incrementRound () {
    this.setState(state => {
      return {
        currentRound: state.currentRound + 1
      };
    });
  }

  render() {
    return (
      <section className="App">
        <header className="header">
          <button onClick={()=>{this.startGame()}} className="start-button">
            {this.state.active ? 'Quit' : 'Start'}
          </button>
          {this.state.active && 
          <section className="stats-bar">
            <h4>Current Round {this.state.currentRound}</h4>
            <h4>Points {this.state.points}</h4>
          </section>
          }
        </header>
        {this.state.active && 
          <Gameplay 
            currentRound={this.state.currentRound}
            points={this.state.points}
            choosenSongs={this.state.choosenSongs}
            submitAnswer={this.submitAnswer}
            incrementRound={this.incrementRound}
          />
        }
        {!this.state.active && 
          <Intro />
        }
      </section>
    );
  }
}

export default App;