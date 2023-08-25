/**
 * @param {string} input
 * @return {number}
 */
var myAtoi = function(input) {
    const number = "1234567890+-";
    let sign = 1;
    
    // Removing white space
    let result = '';
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== ' ') {
            result += input[i];
        }
    }

    // Checking for numbers
    let extracted_num = "";
    for (const str of result) {
        for (const num of number) {
            if (str === num) {
                extracted_num += str;
            }
        }
    }
    // return is32BitSignedInteger(extracted_num);
     return extracted_num;

};

// function is32BitSignedInteger(number) {
//   const MAX_VALUE = Math.pow(2, 31) - 1;
//   const MIN_VALUE = -Math.pow(2, 31);
//   return number >= MIN_VALUE && number <= MAX_VALUE ? number : 0;
// }

// // const number = 123456789;
// // console.log(is32BitSignedInteger(number));
console.log(myAtoi("words and 987"));  // Output: 0
console.log(myAtoi("42"));             // Output: 42
console.log(myAtoi("-91283472332"));  // Output: -2147483648 (INT_MIN)
