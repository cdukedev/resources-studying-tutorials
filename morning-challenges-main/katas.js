// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// kata1
// const stringToNumber = function (str) {
//   return Number(str);
// };
// console.log(stringToNumber("1234"), 1234);
// console.log(stringToNumber("605"), 605);
// console.log(stringToNumber("1405"), 1405);
// console.log(stringToNumber("-7"), -7);

//kata2
// //my solution
// function makeNegative(num) {
//   if (num < 0) {
//     return num;
//   } else {
//     return -num;
//   }
// }

// //higher voted solutions

// // as ternary operator
// function makeNegative(num) {
//   return num < 0 ? num : -num;
// }

// //using Math.abs
// function makeNegative(num) {
//   return -Math.abs(num);
// }

// console.log(makeNegative(-42));

// // trying to make a random pair generator
// const array = ["corey", "j", "za", "jor", "mar", "hug", "will", "chrs"];
// // pick 4 random pair out of 8 and remove chosen pair from the array
// const randomPair = () => {
//   const randomIndex = Math.floor(Math.random() * array.length);
//   const randomPair = array[randomIndex];
//   array.splice(randomIndex, 1);
//   return randomPair;
// };

// console.log(randomPair(array));

//kata3

// // reverse a string

// function solution(str) {
//   return str.split("").reverse().join("");
// }

// console.log(solution("hello"));
// console.log(solution("world"));

// // reverse a string using for loop
// function solution(str) {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }

//Kata4
// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     let smallestInteger = args[0];
//     for (let i = 1; i < args.length; i++) {
//       if (args[i] < smallestInteger) {
//         smallestInteger = args[i];
//       }
//     }
//     return smallestInteger;
//   }
// }

// another solution
// function findSmallestInt(args) {
//   return Math.min(...args);
// }
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

// sort solution and return the first element
class SmallestIntegerFinder {
  findSmallestInt(args) {
    args.sort(function(a, b) {
    return a - b; } )
    return args[0];
  }
}


console.log(
  new SmallestIntegerFinder().findSmallestInt([78, 56, 232, 12, 8]),
  8
);
