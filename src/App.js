import React, { Component } from 'react';
import './App.css';
import card from './assets/back.png';
import shuffleSound from './assets/shuffling-cards-1.wav'
import images from './images';

import Hand from './Components/Hand';

class App extends React.Component {
  state = {
    deckOfCards: [],
    handOfCards: [],
  }

  shuffle = (e) => {
    //initiate shuffledeck variable to shuffle through, so as not to mutate state directly
    let shuffleDeck = this.state.deckOfCards;
    let shuffleChhh = new Audio(shuffleSound);

    e.preventDefault();

    //shuffle deck with Fisher-Yates algorithm - https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
    for (let i = shuffleDeck.length - 1; i > 0; i -= 1){
      let j = Math.floor(Math.random() * (i + 1));
      let temp = shuffleDeck[i];
      shuffleDeck[i] = shuffleDeck[j];
      shuffleDeck[j] = temp;
    }
    this.setState({deckOfCards: shuffleDeck})
    console.log(this.state.deckOfCards);

    shuffleChhh.play();

    this.state.handOfCards.push(shuffleDeck.slice(0, 5));
  
  }

  componentDidMount = () => {
    //initiate deck of cards
    let values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
    let suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];

    for (let i = 0; i < suits.length; i++){
      for (let j = 0; j < values.length; j++){
        this.state.deckOfCards.push(values[j] + ' of ' + suits[i]);
      }
    }
    console.log(this.state.deckOfCards);
  }



  render() {
    return (
      <div className="App">
        <div className='stack__of__cards'>
          <button className='deal__button' onClick={this.shuffle}>Deal!</button>
          <img className = 'card__back' src={card} alt="Card Deck" />
        </div>
        <div className='user`\s hand'>
          <Hand hand={this.state.handOfCards} />
        </div>
      </div>
    );
  }
}

export default App;
