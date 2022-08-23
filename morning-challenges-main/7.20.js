const fruit = "apple";
const pali = "nun";

const paliString = (str) => {
  let arr = str.split("");
  let count = 0;
  let arrLen = arr.length;
  if (arrLen % 2 === 0) {
    count = arrLen / 2;
  } else {
    count = arrLen / 2 - 0.5;
  }
  for (let i = 0; i < count; i++) {
    console.log(count);
    let j = -1;
    if (arr(i) === arr(j)) {
      j--;
    } else {
      return false;
    }
  }
  return true;
};

console.log(paliString(fruit));
console.log(paliString(pali));
