//? ============= Character Concentration =================
// Given a string, you progressively need to concatenate the first letter from the left and the first letter to the right and "1", then the second letter from the left and the second letter to the right and "2", and so on.

// If the string's length is odd drop the central element.

// For example:

// charConcat("abcdef")    == 'af1be2cd3'
// charConcat("abc!def")   == 'af1be2cd3' // same result
//! Solution:

function charConcat(string){
    //declare new string
    let newString = [];
    
    //declare string lenght
    let len = string.length;

    //skip the middle index if odd
    let mid = Math.floor(len/2);

    //create loop that iterates through the string identifying left letter ... ++
    for (let i = 0; i <mid; i++) {
        //push left character
        newString.push(string[i]);
        //push right character
        newString.push(string[len - 1 - i]);
        //adds the correct number after each iteration
        newString.push((i+1).toString());
    }
    //return result in the form of a cooncatinated string
    return newString.join('');
}

console.log("=== Character Concat Tests ===");
console.log(charConcat("abcdef"));
console.log(charConcat("HelloHello"));
console.log(charConcat("tacoocat"));
console.log("============================== \n");


//? ======================== Two Sum =============================
// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]

//! Solution: 

function twoSum(numbers, target) {
    //goal is to check if any of the index values can be combined to equal the target
    let newList = [];
    let len = numbers.length;

    //for loop to iterate through the numbers and identify 1st number
    for (let i = 0; i < len; i++) {
        
        //nested loop... begin to check if any of the remaining numbers + 1st number = goal 
        for (let j = i+1; j < len; j++) {

            //if nested number and next number = goal, then add to the list
            if (numbers[i] + numbers[j] === target) {
                newList.push(i,j);
            }
            
        }
    }
    if (newList.length === 0) {
        return "No two numbers provided add up to the target."
    }
    return newList;

}
console.log("=== Two Sum Tests ===");
console.log("Ex 1:");
console.log(twoSum([1,3,4,4,5], 8));
console.log("Ex 2:");
console.log(twoSum([0,2,3], 2));
console.log("Ex 3:");
console.log(twoSum([0,1,8], 10));
console.log("============================== \n");





// ======================================
// ======================================
// ======================================









