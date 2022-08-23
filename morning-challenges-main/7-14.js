/*
  Create a function that performs an even-odd transform to an array, n times.
  Each even-odd transformation:
    Adds two (+2) to each odd integer.
    Subtracts two (-2) to each even integer.
*/

// const arr = [-2, 1]; // expected output: [15, -4]
// const n = -1;

// const evenOddTransform = (arr, n) => {
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] % 2 !== 0) {
//         arr[j] += 2;
//       } else {
//         arr[j] -= 2;
//       }
//     }
//   }
//   return arr;
// };

// const result = evenOddTransform(arr, n);
// console.log(result);
// function evenOdd(arr, n){
//     return arr.map(el => {
//       if(el % 2 === 0){
//         return el - (2 * n);
//       }else {
//         return el + (2 * n);
//       }
//     })
//   }

//   console.log(evenOdd([3,4,9], 3));

// Example: evenOddTransform([3,4,9], 3); // should return [9,-2,15]

// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example

// Return '12:01:00'.

// Return '00:01:00'.

// Function Description

// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

// string s: a time in  hour format
// Returns

// string: the time in  hour format
// Input Format

// A single string  that represents a time in -hour clock format (i.e.:  or ).

// Constraints

// All input times are valid

const time1 = "12:45:54PM";
const time2 = "12:45:54AM";
const time3 = "01:45:54AM";
const time4 = "01:45:54PM";
const time5 = "11:45:54AM";
const time6 = "12:45:54PM";

const timeConversion = (s) => {
  const time = s.split(":");
  const hour = parseInt(time[0]);
  const minute = time[1];
  const second = time[2].slice(0, 2);
  const ampm = time[2].slice(2);
  if (ampm === "AM") {
    if (hour === 12) {
      return `00:${minute}:${second}`;
    } else {
      if (hour < 10) {
        return `0${hour}:${minute}:${second}`;
      } else {
        return `${hour}:${minute}:${second}`;
      }
    }
  } else {
    if (hour === 12) {
      return `${hour}:${minute}:${second}`;
    } else {
      return `${hour + 12}:${minute}:${second}`;
    }
  }
};

console.log(timeConversion(time1));
console.log(timeConversion(time2));
console.log(timeConversion(time3));
console.log(timeConversion(time4));
console.log(timeConversion(time5));
console.log(timeConversion(time6));
