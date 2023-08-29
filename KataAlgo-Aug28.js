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








  //   =========================================
  //   =========================================
  //   =========================================
  //   =========================================
  //   =========================================
  //   =========================================