const array = [0, 1, 2, 3, 4, 5, 6, 8, 9];
const array2 = [0, 1, 2, 3, 4, 5, 7, 8, 9];
const array3 = [0, 1, 2, 3, 4, 7, 6, 8, 9];

const missingElement = (arr) => {
  for (let i = 0; i < array.length; i++) {
    if (arr.indexOf(i) === -1) {
      return "i";
    }
  }
};
//should return 7
console.log(missingElement(array));

//should return 6
console.log(missingElement(array2));

//should return 5
console.log(missingElement(array3));
