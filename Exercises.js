//Question 1
function myReverse(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }
  return reversed;
}

//Question 2
// function allCombinations(str) {
//   let combinations = [];
//   for (let i = 0; i < str.length; i++) {
//     combinations.push(str[i]);
//     let str2 = str[i];
//     for (let j = i + 1; j < str.length; j++) {
//       combinations.push(str2 + str[j]);
//       str2 = str2 + str[j];
//     }
//   }
//   return combinations;
// }

//Question 3
// function allCaps(str) {
//   let str2 = str[0].toUpperCase();
//   for (let i = 1; i < str.length; i++) {
//     if (str[i] === " ") {
//       str2 += " ";
//       str2 = str2 + str[i + 1].toUpperCase();
//       i++;
//     } else {
//       str2 = str2 + str[i];
//     }
//   }
//   return str2;
// }

//Question 4
// function myPower(x, n) {
//   return Math.pow(x, n);
// }

//Question 5
// function getFirstNotRepeating(str) {
//   let first;

//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j < str.length; j++) {
//       if (str[i] === str[j]) {
//         i++;
//       } else if (j === str.length - 1 && str[i] != str[j]) {
//         first = str[i];
//         return first;
//       }
//     }
//   }
//   return "";
// }

//Question 6 (Bonus)
function isPrefectNumber(num) {
  // your code here
  return "I'm not interested in the bonus question :(";
}

// *** Playground ***
// Feel free to run and test your code here on your own

// *** End of Playground ***

// Don't touch me :)
exports.myReverse = myReverse;
exports.allCombinations = allCombinations;
exports.allCaps = allCaps;
exports.myPower = myPower;
exports.getFirstNotRepeating = getFirstNotRepeating;
exports.isPrefectNumber = isPrefectNumber;
