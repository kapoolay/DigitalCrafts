// Write a function "tipAmount" that is given the bill amount and the level of
// service (one of good, fair and poor) and returns the dollar amount for the tip.
//
// Based on:
// good --> 20%
// fair --> 15%
// poor --> 10%
//
// Examples:
// tipAmount(100, 'good') --> 20
// tipAmount(40, 'fair') --> 6

function tipAmount(bill, service) {
    if (service === 'good') {
        return 'The tip is $' + (bill * .20)
    } else if (service === 'fair') {
        return 'The tip is $' + (bill * .15)
    } else if (service === 'poor') {
        return 'The tip is $' + (bill * .10)
    } else {
        return 'Service doesn\'t deserve a tip!'
    }
}

console.log(tipAmount(100, 'good'));
console.log(tipAmount(100, 'fair'));
console.log(tipAmount(100, 'poor'));


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "totalAmount" that takes the same arguments as "tipAmount"
// except it returns the total as the tip amount plus the bill amount.
// Hint: this function may use "tipAmount" internally
//
// Examples:
// totalAmount(100, 'good') --> 120
// totalAmount(40, 'fair') --> 46

function totalAmount(bill, service) {
    if (service === 'good') {
        let tip = bill * .20;
        return 'The total is $' + (bill + tip) + '.';
    } else if (service === 'fair') {
        tip = bill * .15;
        return 'The total is $' + (bill + tip) + '.';
    } if (service === 'poor') {
        tip = bill * .10;
        return 'The total is $' + (bill + tip) + '.';
    } else {
        return 'The total is $' + bill + '.'
    }
}

console.log(totalAmount(100, 'good'));
console.log(totalAmount(100, 'fair'));
console.log(totalAmount(100, 'poor'));
console.log(totalAmount(100, 'terrible'));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "splitAmount" that takes a bill amount, the level of service,
// and the number of people to split the bill between. It should return the final
// amount for each person.
//
// Examples:
// splitAmount(100, 'good', 5) --> 24
// splitAmount(40, 'fair', 2) --> 23

function splitAmount(bill, service, people) {
    if (service === 'good') {
        let tip = bill * .20;
        let totalAmount = tip + bill;
        let perPerson = totalAmount / people;
        return 'The amount per person is $' + perPerson + '.';
    } else if (service === 'fair') {
        let tip = bill * .15;
        let totalAmount = tip + bill;
        let perPerson = totalAmount / people;
        return 'The amount per person is $' + perPerson + '.';
    } else if (service === 'poor') {
        let tip = bill * .10;
        let totalAmount = tip + bill;
        let perPerson = totalAmount / people;
        return 'The amount per person is $' + perPerson + '.';
    } else {
        return 'The amount per person is $' + (bill / people )+ '.';
    }
}

console.log(splitAmount(100, 'terrible', 5));
