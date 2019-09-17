/***************************************
 * Tip Calculator

Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip. Based on:

good -> 20%
fair -> 15%
bad -> 10%
> tipAmount(100, 'good')
20
> tipAmount(40, 'fair')
6
 */

 function tipAmount(bill,service){
     if (service === 'good') {
         return 'The tip is $' + bill * .20          // returns 20% of the bill
     } else if (service === 'fair') {
         return 'The tip is $' + bill * .15          // returns 15% of the bill
     } else if (service === 'bad') {
         return 'The tip is $' + bill * .10          // returns 10% of the bill
     } else {
         return bill * 0;                       // assuming there's no tip
     }
 }


 /***************************************
 * Write a function totalAmount that takes the same arguments as tipAmount except it returns the total as the tip amount plus the bill amount. This function may make use of tipAmount as a sub-task.

> totalAmount(100, 'good')
120
> totalAmount(40, 'fair')
46
 */

function totalAmount(bill,service) {
    if (service === 'good') {
        tipAmount = bill * .20;                // declares tipAmount; 20% of the bill
        total = bill + tipAmount;              // declares total; addition of the bill and tipAmount
        return 'The total bill is $' + total;
    } else if (service === 'fair') {
       tipAmount = bill * .15;
       total = bill + tipAmount;
       return 'The total bill is $' + total;
    } else if (service === 'bad') {
       tipAmount = bill * .10;
       total = bill + tipAmount;
       return 'The total bill is $' + total;
    } else {
        tipAmount = bill * 0;
        total = bill + tipAmount;
        return 'The total bill is $' + total;
    }
}

 /***************************************
 * Tip Calculator 3

Write a function splitAmount that takes the bill amount and the level of service, and the number of people to split the bill between. It will return the final amount for each person.

> splitAmount(100, 'good', 5)
24
> splitAmount(40, 'fair', 2)
23
 */

 function splitAmount(bill,service,people) {
     if (service === 'good') {
         tipAmount = bill * .20;
         total = bill + tipAmount;
         perPerson = total / people;
         return 'The total per person is $' + perPerson;
     } else if (service === 'fair') {
        tipAmount = bill * .15;
        total = bill + tipAmount;
        perPerson = total / people;
        return 'The total per person is $' + perPerson;
     } else if(service === 'bad') {
        tipAmount = bill * .10;
        total = bill + tipAmount;
        perPerson = total / people;
        return 'The total per person is $' + perPerson;
     } else {
        tipAmount = bill * .20;
        total = bill + tipAmount;
        perPerson = total / people;
        return 'The total per person is $' + perPerson;
     }
 }