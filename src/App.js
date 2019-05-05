import React, { Component }from 'react';
import './App.css';
import Gameplay from './Gameplay';
import Intro from './Intro';
import songsJSON from './data/lyricsJson.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      active: false,
      currentRound: 1,
      points: 0,
      choosenSongs: []
    }
    this.startGame = this.startGame.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
    this.incrementRound = this.incrementRound.bind(this);
    this.reset = this.reset.bind(this);
  };

  startGame () {
    var wholeSongList = songsJSON;
    var songChoice = [];
    while (songChoice.length < 3 ) {
      let randomNumber = Math.round(Math.random() * wholeSongList.length);
      songChoice.push(wholeSongList[randomNumber]);
      wholeSongList.splice(randomNumber, 1);
    };
    this.setState({
      active: true,
      currentRound: 1,
      points: 0,
      choosenSongs: songChoice
    });
  };

  reset () {
    this.setState({
      active: false,
      currentRound: 1,
      points: 0,
      choosenSongs: []
    });
  }

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
          {!this.state.active &&
            <button onClick={()=>{this.startGame()}} className="start-button">Start</button>
          }
          {this.state.active && 
            <button onClick={()=>{this.reset()}}>Reset</button>
          }
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