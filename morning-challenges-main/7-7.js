// ================== binarySearch ======================
// Question:
// Given an array of integers that are sorted in ascending order and a target integer, write a function to search for the target within the array. If the target exists, then return its index, otherwise return -1.
// Do not use any array methods to accomplish this.
// Hint. Look into binary search.
// ======================================================

const orderedArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 13, 14, 15, 17, 18, 19, 20,
];
//create a function to find the target in the array usign binary search
const binarySearch = (arr, target) => {
  //set start and end of array
  let start = 0;
  let end = arr.length - 1;
  //while start is less than or equal to end
  while (start <= end) {
    //set midpoint to start + end divided by 2
    let midpoint = Math.floor((start + end) / 2);
    //if target is equal to midpoint
    if (target === arr[midpoint]) {
      //return midpoint
      return midpoint;
        }    //if target is less than midpoint
    else if (target < arr[midpoint]) {
      //set end to midpoint - 1
      end = midpoint - 1;
    }
    //if target is greater than midpoint
    else if (target > arr[midpoint]) {
      //set start to midpoint + 1
      start = midpoint + 1;
    }
  }
  return -1;
}; //test the function
console.log(binarySearch(orderedArray, 1));
console.log(binarySearch(orderedArray, 2));
console.log(binarySearch(orderedArray, 9));
console.log(binarySearch(orderedArray, 4));
// ORIGINAL ANSWER
// create a function to find the target in the array usign binary search
// const binarySearch = (arr, target) => {
//   //set start and end of array
//   let start = 0;
//   let end = arr.length - 1;
//   let index;
//   while (target !== arr[index]) {
//     if (target < arr[0] || target > arr[arr.length - 1]) {
//       return -1;
//     }
//     if (((end - start) / 2) % 2 !== 0) {
//       index = arr[(end - start) / 2];
//     } else {
//       index = arr[(end - start - 1) / 2];
//     }
//     index = arr[(end - start) / 2];
//     if (arr[index] === target) {
//       return index;
//     } else if (arr[index] > target) {
//       end = index;
//     } else {
//       start = index;
//     }
//   }
// };
// console.log(binarySearch(orderedArray, 10));
