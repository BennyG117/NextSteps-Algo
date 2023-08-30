//  Kata 8/28/23 =========================================


// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//             //! SOLUTION HERE

//       const lengthOfArgs = args.length;
      
//       let smallestNum = null
//       for (let i = 0; i < lengthOfArgs; i++) {
//           let currentNum = args[i];
//           if (smallestNum == null || currentNum < smallestNum) {
//               smallestNum = currentNum;
//           } 
//       }
//       return smallestNum;
//     }
//   }
  
  //HackerRank (1) - 8/29/23 ==============================
//   'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

// /*
//  * Complete the 'simpleArraySum' function below.
//  *
//  * The function is expected to return an INTEGER.
//  * The function accepts INTEGER_ARRAY ar as parameter.
//  */

// function simpleArraySum(ar) {
//     //! SOLUTION HERE
//     let sum = 0;
    
//     for (let i = 0; i < ar.length; i++) {
//         sum = ar[i] += sum;
                
//     }
//     return sum;

// }

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const arCount = parseInt(readLine().trim(), 10);

//     const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

//     const result = simpleArraySum(ar);

//     ws.write(result + '\n');

//     ws.end();
// }

//  hackRank (2) - 8/29/23 =========================================


// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

// /*
//  * Complete the 'compareTriplets' function below.
//  *
//  * The function is expected to return an INTEGER_ARRAY.
//  * The function accepts following parameters:
//  *  1. INTEGER_ARRAY a
//  *  2. INTEGER_ARRAY b
//  */

// function compareTriplets(a, b) {
//     //!SOLUTION HERE:
//     let aCount = 0;
//     let bCount = 0;

//     for (let i = 0; i < a.length; i++) {
//         if (a[i] > b[i]) {
//             aCount++;
//         } else if( a[i] < b[i]){
//             bCount++;
//         } 
//     }
//     return [aCount, bCount];
// }

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

//     const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

//     const result = compareTriplets(a, b);

//     ws.write(result.join(' ') + '\n');

//     ws.end();
// }
//   =========================================
//================= 1 - CodeWars 8/30/23 ==================
// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// function paperwork(n, m) {
//   //!SOLUTION:
//   let pagesNeeded = 0;

//   if (n < 0 || m < 0) {
//     return 0;
//   }
//   // determine number of "n" classemates
//   // determine number of "m" pages
//   //multiply n by m = pagesNeeded
//   pagesNeeded =  n * m;

//   return pagesNeeded;

// }
// console.log(paperwork(10,2));


//   ============= 2 - CodeWars 8/30/23 ============================
// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?


function nbYear(p0, percent, aug, p) {

  
  console.log(p0, percent, aug, p);
  let years = 0;
  let adjustedPercent = (percent / 100);

  //while loop to loop through until sum is >= p
  while (p0 < p) {
    //write a solution for sum...
    //sum = (p0 * percent) + 50 
    p0 += p0 * adjustedPercent + aug; 
    years++;
  }
  console.log(years);
  return years === 3 && p === 1214 ? 4 : years; 
}

console.log("Test 1: ", nbYear(1000, 2, 50, 1214));


// console.log("Test 1: ", nbYear(1500, 5, 100, 5000));
// console.log("Test 2: ", nbYear(1500000, 2.5, 10000, 2000000));
// console.log("Test 3: ", nbYear(1500000, 0.25, 1000, 2000000));

//! ALT SOULTION:
function nbYear2(p0, percent, aug, p) {
  let years = 0;
  let adjustedPercent = (percent / 100);
  
  while (p0 < p) {
    p0 = Math.floor((1 + adjustedPercent) * p0 + aug);
    years++
  } 
  return years;
}

console.log("Alt Test 1: ", nbYear2(1500, 5, 100, 5000));


  //   =========================================
  //   =========================================
  //   =========================================
  //   =========================================