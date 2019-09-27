// Write a function "numberJoinerWhile" which is given a start number and an end number.
// It should return a string of the numbers joined together by the "_" character.
// Use a "while" loop to do this.
// Examples:
// numberJoinerWhile(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerWhile(12, 14) --> '12_13_14'

function numberJoinerWhile(start, end) {
    let numString = '';
    while (start <= end) {      // continue to loop while the current value is less than the end value
        if (start !== end) {        // if the current number is not the same as the end value
            numString += start + '_';   // add the current with '_' afterwards
            start++;        // increment the current value by 1 and re-loop
        } else if (start === end) {     // if the starting value is the same as the ending value
            numString += start;     // 
            start++;
        } else {
            return numString + start;
        }
    }
    return numString;
}

console.log(numberJoinerWhile(1, 10));


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFor" which does the same thing as "numberJoinerWhile",
// except using a "for" loop internally.

function numberJoinerFor(start, end) {
    let numString = '';
    if (start !== end) {
        for (let i = start; i < end; i++) {
            numString += start + '_';
            start++;
        }
        numString += end;
        return numString;
    }   else  {
        return numString + start;
    }
}


console.log(numberJoinerFor(1, 10));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFancy" which does the same thing as "numberJoinerWhile",
// except it takes an optional third argument specifying the separator between the numbers.
// Use either a "while" or a "for" loop (your preference).
// Examples:
// numberJoinerFancy(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerFancy(1, 5, '~') --> 1~2~3~4~5
// numberJoinerFancy(3, 6, '***BANANAS***') --> 1***BANANAS***2***BANANAS***3
