// ============ CodeWars (even?) - 8/31/23 ===============
function testEven(n) {
    //Your awesome code here!
  if( n % 2 === 0){
    return true;
  }
  return false;
}
console.log("=====Even Test:=====\n");
console.log(testEven(5));
console.log(testEven(4));
console.log("====================\n");

// ============ Split Strings - 8/31/23 ===============
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:
//  'abc' =>  ['ab', 'c_']
//  'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
    //declare newArray = []
    let newArray = [];
    //declare string length 
    let strLength = str.length;
    
    //loop for length of string @ intervals of i+2 to avoid hitting the same i values
    for (let i = 0; i < strLength; i += 2) {
        //create the pairing of i values, if no second [i] value is there add "_"
        let strPair = str[i] + (str[i +1] || "_");
        //add new strPair to the empty array
        newArray.push(strPair);
    }
    //return the array
    return newArray;
}
console.log("====== Split String Test:=====\n");

console.log(solution("abcdef"));
console.log(solution("cab"));

console.log("====================\n");

// ============ Remove the vowels - 8/31/23 ===============
/* Trolls are attacking your comment section! 

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel. */

function disemvowel(str) {
  //declare new string and string length
  let strLength = str.length;
  let newStr= "";

  for (let i = 0; i < strLength; i++) {
    //iterate through the string...
    if ([i] == "a" || [i] == "A" || [i] == "e" || [i] == "E" ||[i] == "i" || [i] == "I" ||[i] == "o" || [i] == "O" || [i] == "u" || [i] == "U") {
      str.slice([i])
    }
    newStr = str[i].push 
  }

  return newStr;
}

console.log("====== Remove the vowels Test:=====\n");

console.log(disemvowel("I am the best!"));
console.log("====================\n");









// ============   ===============
// ============   ===============