/*
//Hello, you!
function hello(name = 'world!') {
    console.log('Hello, ' + name);
}

hello();


//Madlib
function madlib(name,subject) {
    return name + '\'s favorite subject in school is' + subject;
}

madlib('Kevin','athletics');



//Tip Calculator
function tipAmount(bill,service) {
    if (service === 'good') {
        return bill * .20
    } else if (service === 'fair') {
        return bill * .15
    } else {
        return bill * .10
    }
}

//Tip Calculator 2
function totalAmount(bill,service) {
    if (service === 'good') {
        let tip = bill * .20;
        let total = bill + tip;
        return total;
    } else if (service === 'fair') {
        let tip = bill * .15;
        let total = bill + tip;
        return total;
    } else {
        let tip = bill * .10;
        let total = bill + tip;
        return total;
    }
}

//Tip Calculator 3
function splitAmount(bill,service,people) {
    if (service === 'good') {
        let tip = bill * .20;
        let total = bill + tip;
        let perPerson = total / people;
        return perPerson;
    } else if (service === 'fair') {
        tip = bill *.15;
        total = bill + tip;
        perPerson = total / people;
        return perPerson;
    } else {
        tip = bill *.10;
        total = bill + tip;
        perPerson = total / people;
        return perPerson;
    }
}

*/


//Print Numbers
function printNumbers(start,end) {
    let i = start;
    while (i <= end) {
        console.log(i);
        i++;
    }
}

printNumbers(1,10);