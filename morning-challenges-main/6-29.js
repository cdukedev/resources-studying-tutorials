// ================== loopArray ======================

// Question:
// Write a function loopArray that loops array in a specified direction by some number of steps.

// By "looping array" it means removing elements from start and adding them to end of array one-by-one (if direction is "left") or removing from end and adding them to start one by-one (if direction is "right").

// Function should accept three arguments:

// array - non-empty array of elements of any type;
// direction - 'left' or 'right' - tells how to loop array;
// steps - number of steps to loop array (less or equal to array size);

// Examples:

// loopArray([1, 5, 87, 45, 8, 8], 'left', 2);
// should produce result:

// loopArray([1, 5, 87, 45, 8, 8], 'right', 2);
// should produce result:

// ==================================================
// array to loop
//need a function

// const loopArray = (arr, direction, steps) => {
//   let newArray = arr;
//   console.log(newArray);
//   console.log(steps);
//   if (direction === "right") {
//     for (let i = 0; i < steps; i++) {
//       const lastIndex = arr.pop(arr.length - 1);
//       newArray.shift(lastIndex);
//   } else {
//     for (let i = 0; i < steps; i++) {
//       newArray = arr.push(arr.shift());
//       console.log(newArray);
//     }
//   }
//   console.log(newArray);
// };

// loopArray([1, 5, 87, 45, 8, 8], "left", 2);
//intended output [87, 45, 8, 8, 1, 5]
// loopArray([1, 5, 87, 45, 8, 8], "right", 2);
//intended output [8, 8, 1, 5, 87, 45]
