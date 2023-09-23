// ============ 9/5/23 divisible or not? =============
// Create a function that checks if the first argument n is divisible by all other arguments (return true if no other arguments)

// Example:

// (6,1,3)--> true because 6 is divisible by 1 and 3
// (12,2)--> true because 12 is divisible by 2
// (100,5,4,10,25,20)--> true
// (12,7)--> false because 12 is not divisible by 7

//! solution:

function isDivisible(n, ...args){

    
    //loop through arr.length
    for (let i = 0; i < args.length; i++) {
        //if statement ... if arr[0] / arr[i] == true, then continue...
        if (n % args[i] !== 0) {
            //else return false (loop ends since one number is no divisible)
            return false;
            
        }
    }
    //outside loop then return ture
    return true;
}
console.log("Test 1:");
console.log(isDivisible(3,3,6,9));

console.log("Test 2:");
console.log(isDivisible(3,3,6,11));

console.log("Test 3:");
console.log(isDivisible(50,5,10,25));


// ============== 9/5/23 - fix the code: Multiply ================
// This code does not execute properly. Try to figure out why.

//!solution:
function multiply(a, b){
    let result = a * b;
    return result;
  }
  console.log("Test 1 Multiply: ");
  console.log(multiply(2,2));


// ==================================================
// ==================================================
// ==================================================