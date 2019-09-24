/*
Caesar Cipher

Write a function cipher which is given a string, an offset, and returns the Caesar cipher of the string.

> cipher('Genius without education is like silver in the mine')
'Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar'
*/

function cipher(str) {
    let result = '';        // variable to store solved values
    for (let i = 0; i < str.length; i++) {
        let asciNum = str[i].charCodeAt();      // .charCodeAt() looks at the ascii number for the string character
        if (asciNum >= 65 && asciNum <= 77 || asciNum >= 97 && asciNum <= 109) {        //string is A-M OR string is a-m
        result += String.fromCharCode(asciNum + 13);                                    //add 13 to the string character's ascii number
        } else if (asciNum >= 78 && asciNum <= 90 || asciNum >= 110 && asciNum <= 122) {        //string is N-Z OR string is n-z
            result += String.fromCharCode(asciNum -13);                                         //subtract 13 from the ascii number
        } else {
            result += str[i];
        }
    }
    return result;
}


/* ~~~~~~~~~~~~~~~~~~~ Luis's Solution

function cipherDecipher(someString, offset) {
    const ALPHABET_STRING = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
    const ALPHABET_ARRAY = ALPHABET_STRING.split(",");
    let result = "";
  
    for (let i = 0; i < someString.length; i++) {
      let character = someString[i];
      let isUpperCaseCharacter = character == character.toUpperCase();
      let lowerCaseCharacter = character.toLowerCase();
      let characterIndex = ALPHABET_ARRAY.indexOf(lowerCaseCharacter);
  
      if (characterIndex == -1) {
        // character is not in the alphabet, so don't cypher it
        result += someString[i];
      } else {
        let newCharacterIndex = characterIndex + offset;
  
        if (newCharacterIndex >= 26) {
          // we are ciphering and went past the end of the alphabet
          newCharacterIndex = newCharacterIndex - 26;
        } else if (newCharacterIndex < 0) {
          // we are deciphering and went past the beginning of the alphabet
          newCharacterIndex = 26 + newCharacterIndex;
        }
  
        let newCharacter = ALPHABET_ARRAY[newCharacterIndex];
        if (isUpperCaseCharacter) {
          newCharacter = newCharacter.toUpperCase();
        }
        result += newCharacter;
      }
    }
  
    return result;
  }

  */

console.log(cipher('Genius without education is like silver in the mine'));












/*
Caesar Cipher 2

Write a function decipher which is given a string, an offset, and returns the original message.

> decipher('Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar')
'Genius without education is like silver in the mine'
*/

function decipher(str)  {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let asciNum = str[i].charCodeAt();      // .charCodeAt() looks at the ascii numberfor the string
        if (asciNum >= 65 && asciNum <= 77 || asciNum >= 97 && asciNum <= 109) {        //string is A-M OR string is a-m
        result += String.fromCharCode(asciNum + 13);                                    //add 13 to the ascii number
        } else if (asciNum >= 78 && asciNum <= 90 || asciNum >= 110 && asciNum <= 122) {        //string is N-Z OR string is n-z
            result += String.fromCharCode(asciNum - 13);                                         //add 13 to the ascii number
        } else {
            result += str[i];
        }
    }
    return result;
}


/* ~~~~~~~~~~~ Luis's solution
function decipher(someString, offset) {
    return cipherDecipher(someString, -offset);
  }

*/

console.log(decipher('Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar'));


