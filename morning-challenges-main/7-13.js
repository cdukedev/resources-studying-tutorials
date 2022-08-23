/*
 * Complete the 'oddNumbers' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER l
 *  2. INTEGER r
 */

function oddNumbers(l, r) {
  let arr = [];
  for (let i = l; i <= r; i++) {
    if (i % 2 !== 0) {
      arr.push(i);
    }
  }
  return arr;
}

console.log(oddNumbers(-5, 10));
