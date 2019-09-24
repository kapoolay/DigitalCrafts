/*
Long-long Vowels

Write a function, which is given a string, return the result of extending any long vowels to the length of 5.

> longLongVowels('Good')
'Goooood'
> longLongVowels('Cheese')
'Cheeeeese'
> longLongVowels('Man')
'Man'
*/

function longLongVowels(text) {
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      let character = text[i];
      if (
        character == "a" ||
        character == "e" ||
        character == "i" ||
        character == "o" ||
        character == "u"
      ) {
        character = character.repeat(5);
      }
      newText += character;
    }
    return newText;
  }
  
  //console.log(longLongVowels("long vowel"));