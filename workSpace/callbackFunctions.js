/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~Positive Numbers
Write a function which takes an array of numbers as input and returns a new array containing only the positive numbers in the given array.
*/

let arr = [-3,-1,-4,-5,0,1,2,3,4,5,6,7,8,9,10,12,23,24];

let positiveNum = arr.filter(function(element) {
    return element > 0
});

console.log(positiveNum);





/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~Even Numbers
Write a function which takes an array of numbers as input and returns a new array containing only the even numbers in the given array.
*/

let evenNum = arr.filter(function(element) {
    return element % 2 === 0
});

console.log(evenNum);







/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~Square the Numbers
Write a function which takes an array of numbers as input and returns a new array containing result of squaring each of the numbers in the given array by two. Example: squareTheNumbers([1, 2, 3]) should give [1, 4, 9].
*/

let newArr = [1, 2, 3]

let squareTheNumbers = newArr.map(function(element) {
    return element*element;
});

console.log(squareTheNumbers);









/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~Cities 1

Write a function which takes an array of city objects like such:

var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];
as input and returns a new array containing the cities whose temperature is cooler than 70 degrees.
*/

var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
  ];

let tempAbove70 = cities.filter(function(city) {
    return city.temperature < 70.0
});

console.log(tempAbove70);






/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~Cities 2
Write a function which takes an array of city objects like the above problem as input and returns an array of the cities names.
*/

let cityNames = cities.map(function(city) {
    return city.name;
});

console.log(cityNames);







/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~Good Job!

Given an array of people's names:
Print out 'Good Job, {{name}}!' for each person's name, one on a line.
*/

var people = [
    'Dom',
    'Lyn',
    'Kirk',
    'Autumn',
    'Trista',
    'Jesslyn',
    'Kevin',
    'John',
    'Eli',
    'Juan',
    'Robert',
    'Keyur',
    'Jason',
    'Che',
    'Ben'
  ];

  let congrats = people.forEach(function(name) {
      console.log('Good Job, ' + name + '!');
  }) 

console.log(congrats);









/*~~~~~~~~~~~~~~~~~~~~~~~~~~~Sort an array

Given an array of strings such the array of names given in the previous problem, sort them by alphabetically order.
*/

let sortABC = people.sort()     // sorts alphabetically
//let sortABC
console.log(sortABC);



/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~Sort an array, 2
Sort the same array, but not by alphabetically order, but by how long each name is, shortest name first.
*/

let sortLength = people.sort(function(a, b) {       
    return a.length - b.length;         // a-b is ascending length // b-a is descending length
})

console.log(sortLength);