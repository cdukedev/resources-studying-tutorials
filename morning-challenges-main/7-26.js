// Given an integer n and an array a of length n, your task is to apply the following mutation to a:

// Array a mutates into a new array b of length n.
// For each i from 0 to n - 1, b[i] = a[i - 1] + a[i] + a[i + 1].
// If some element in the sum a[i - 1] + a[i] + a[i + 1] does not exist, it should be set to 0. For example, b[0] should be equal to 0 + a[0] + a[1].

let a2b = [
  27, 103, 154, 173, 266, 335, 586, 650, 690, 702, 740, 784, 805, 869, 893, 901,
  926, 926, 927, 927,
];
let b2a = [3, 129, 161, 381, 699, 911];
let trips = 3;

function solution(a2b, b2a, trips) {
  let arrivalTime = a2b[0];
  let flights = trips * 2;
  for (let i = 0; i < flights; i++) {
    let a = a2b[i];
    while (a > arrivalTime) {
      i++;
      if (i === flights) {
        return arrivalTime;
      }
    }
    arrivalTime = a + 100;
    for (let j = 0; j < flights; j++) {
      let b = b2a[j];
      while (b > arrivalTime) {
        j++;
        if (j === flights) {
          return arrivalTime;
        }
      }
      arrivalTime = b + 100;
    }
  }
  return arrivalTime;
}

console.log(solution(a2b, b2a, trips));
