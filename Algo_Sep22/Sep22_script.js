// ================= Break camelCase (9/22/23) =================
/*
Complete the solution so that the function will break up camel casing, using a space between words.
Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

//! Solution: complete the function
function solution(string) {
    // declare new string
    let newString = "";

    //for loop iterating through initial prameter
    for (let i = 0; i < string.length; i++) {
        //if statement within the loop to identify if letter is upper case, if so then add space before the current letter...
        // if (string[i] == string[i].toUpperCase()) {
        if (string[i] == string[i].toUpperCase() && i > 0 && string[i - 1] !== " ") {
            newString += " " + string[i];
        } else {
            //then add that current [i] to the new string
            newString += string[i];
        }
    }
    //return new string...
    return newString;

}

console.log(" ====== Camel Case ========= \n");
console.log("Test 1:");
console.log(solution("camelCaseIsTheBest"));
console.log("Test 2:");
console.log(solution("whyNotChooseToGetGud"));
console.log("Test 3:");
console.log(solution("do Better"));
console.log(" =============== \n");

// ==============================================================
// ================= Multiples 3 & 5 (9/22/23) =================
/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.
*/ 

//! Solution: 

function solution(number){
    //declare solution
    let sum = 0;

    //corner case scenario to account for numbers less that 1
    if (number < 1) {
        return 0;
    }
    
    //identify all numbers from 1 - "number" that are multiples of 3 or 5
    for (let i = 1; i < number; i++) {
        // once identified, add those numbers to acquire the solution
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
    }
}
    return sum;
}

console.log(" ====== Multiples 3 & 5 ========= \n");
console.log("Test 1:");
console.log(multipleSolution(15));
console.log("Test 2:");
console.log(multipleSolution(10));
console.log("Test 3:");
console.log(multipleSolution(-96));
console.log(" =============== \n");



// ==============================================================


//   if (number < 0) {
//     return 0;
//   }

//   let sum = 0;

//   for (let i = 1; i < number; i++) {

//     if (i % 3 === 0 || i % 5 === 0) {

//         sum += i;
//     }
//   }

//   return sum;
// }