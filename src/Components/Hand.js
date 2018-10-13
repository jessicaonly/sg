import React from 'react';
import image from './../images';
import Img from 'react-image';
import images from './../images';
import diamond from './../assets/diamond.png'
import heart from './../assets/heart.png'
import spade from './../assets/spade.png'
import club from './../assets/club.png'

class Hand extends React.Component {
  constructor(props){
  super(props);
    this.state = { 
      selectedCards: [],
      card1: false,
      card2: false,
      card3: false,
      card4: false,
      card5: false
    }
    }

    toggleCards =(e) =>{
      console.log(e.target)
      if (this.state.selectedCards.includes(e.target.innerText)){
        this.state.selectedCards.splice(this.state.selectedCards.indexOf(e.target.innerText), 1);
      }
      else {
      this.state.selectedCards.push(e.target.innerText);
      }
      console.log(this.state.selectedCards);


  }
 

  render() {
    return (
      this.props.hand.map((card) => {
        return (
       <div className='card_row'>
        <div className='card1' key='button1' onClick={this.toggleCards} >{card[0]} </div>
        <div className='card2' key='button2' onClick= {this.toggleCards}>{card[1]} </div>
        <div className='card3' key='button3' onClick= {this.toggleCards}>{card[2]} </div>
        <div className='card4' key='button4' onClick= {this.toggleCards}>{card[3]} </div>
        <div className='card5' key='button5' onClick= {this.toggleCards}>{card[4]} </div>
      </div>
        )
      })
    
    )
}
  
}

export default Hand;



