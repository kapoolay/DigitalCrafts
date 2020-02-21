# JavaScript Objects and Constructors
## Person
Given this code:

```js
class Person {
  constructor(name, email, phone) {
      this.name = name;
      this.email = email;
      this.phone = phone;
  }
  greet(otherPerson) {
    console.log('Hello ' + otherPerson.name + ', I am ' + this.name + '!');
  }
}
```
Write code to

1) Instantiate an instance object of Person with name of 'Sonny', email of 'sonny@hotmail.com', and phone of '483-485-4948', store it in the variable sonny.
2) Instantiate another person with the name of 'Jordan', email of 'jordan@aol.com', and phone of '495-586-3456', store it in the variable 'jordan'.
3) Have sonny greet jordan using the greet method.
4) Have jordan greet sonny using the greet method.
5) Write a statement to print the contact info (email and phone) of Sonny.
6) Write another statement to print the contact info of Jordan.

## Card
Create a class Card. A card object will have 2 properties:

point - the point value of the card: a number between 1 and 13.
suit - the suit of the card: one of diamonds, clubs, hearts and spades.

A card will be created thus:
```js
> let myCard = new Card(5, 'diamonds')
```

And you can access the individual properties like:
```js
> myCard.point
5
> myCard.suit
'diamonds'
```

## getImageUrl()
Add a getImageUrl method to card objects by adding it as a member method to your Card class. The method should return the URL path to the png image file for the card.
```js
> myCard.getImageUrl()
'images/5_of_diamonds.png'
```

## Hand constructor
A hand is simply represented as a collection of cards, but it would also be convenient for a hand to be able to return it's point value. We would like to be able to do this with a Hand constructor:

```js
> var myHand = new Hand()
> myHand.addCard(new Card(5, 'diamonds'))
> myHand.addCard(new Card(13, 'spades'))
> myHand.getPoints()
15
```

Implement a Hand class that will allow the code above to work. Hint: you will want to store as a property of a hand object - an array of card objects.

## Deck constructor
A deck is also represented as a collection of cards, but it would also be convenient for it to be able to shuffle itself, and be asked to draw a card. We would like to be able to do this with a Deck constructor:

```js
> var myDeck = new Deck()
> myDeck.draw()
Card {point: 6, suit: "clubs"}
> myDeck.draw()
Card {point: 1, suit: "spades"}
> myDeck.shuffle()
> myDeck.numCardsLeft()
50
```

Implement a Deck class that will allow for the above code to work.

