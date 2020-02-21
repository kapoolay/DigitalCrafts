var lodash = require('lodash');

class Card {
  constructor(point, suit) {
    this.point = point;
    this.suit = suit;
  }

  getImageUrl() {
    return `images/${this.point}_of_${this.suit}.pgn`;
  }

  print() {
    console.log("Hello World");
  }
}

let myCard = new Card(5, "diamonds");
// console.log(myCard);
// console.log(myCard.point);
// console.log(myCard.suit);
// console.log(myCard.getImageUrl());



// --------------------------------------------

class Hand {
  constructor() {
    this.cards = [];
  }
  addCard(card) {
    this.cards.push(card);
  }

  getPoints() {
    //console.log(this.cards);

    let totalPoints = this.cards.reduce((total, card) => {
      return total + card.point;
    }, 0);

    console.log(totalPoints);
  }
}

// var myHand = new Hand();
// myHand.addCard(new Card(5, "diamonds"));
// myHand.addCard(new Card(13, "spades"));
// myHand.getPoints();




// --------------------------------------------
class Deck {
  constructor() {
    this.allCards = [].concat(
      this.createCardsForSuit("clubs"),
      this.createCardsForSuit("spades"),
      this.createCardsForSuit("hearts"),
      this.createCardsForSuit("diamonds"));
}

  createCardsForSuit(suit) {
    let cards = [];
    for (let i = 1; i <= 13; i++) {
      cards.push(new Card(i, suit));
    }
    return cards;
  }

  draw() {
    console.log(this.allCards.pop());
  }

  numCardsLeft() {
    console.log(this.allCards.length);
  }

  shuffle() {
    this.allCards = lodash.shuffle(this.allCards);

  }

}

let deck = new Deck();
deck.shuffle();
deck.numCardsLeft();
deck.draw();
deck.draw();
deck.draw();
deck.numCardsLeft();