import React, { Component } from 'react';
import './App.css';
import Scoreboard from './Componets/Scoreboard/Scoreboard';
import teams from "./teams.json";

// User presses space to begin
// Randomly select team from teams.json
// Seperate letters
// Replace letters with ---
// Handle key press
// If key is in the word display letter
// If key is not included in the word add to score of opponite 
// If every letter is guessed you win
// If opponite scores 10 goals against you mercy rule (you lose )


class App extends Component {
  state = {
    teams,
    opponent: []

  }

  //  handleKeyEvent = (event) => {
  //   if(event.key === 'Enter'){
  //     console.log('enter press here! ')
  //   }
  // };

  // shuffle = (opponent) => {
  //   return opponent.sort(() => Math.random() - 0.5)
  // };


  render() {
    return (
      <div className="App">
      <input onKeyPress={this.handleKeyPress} />
      {/* <Scoreboard
                teams = {this.state.teams[14].name}/> */}
      {this.state.teams.map(team => (
                <Scoreboard
                teams = {team.name}/>
                ))}
       
      </div>
    );
  }
}

export default App;
