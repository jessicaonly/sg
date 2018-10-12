import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    deckOfCards: [],
    handOfCards: []
  }

  componentDidMount = () => {
    let values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
    let suits = ['clubs', 'diamonds', 'hearts', 'spades'];

    for (let i = 0; i < suits.length; i++){
      for (let j = 0; j < values.length; j++){
        this.state.deckOfCards.push(values[j] + '_of_' + suits[i]);
      }
    }
    console.log(this.state.deckOfCards);
  }



  render() {
    return (
      <div className="App">
          <p>
            This poker game!
          </p>
      </div>
    );
  }
}

export default App;
