/*
 * Complete the 'findNumber' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
const INTEGER_ARRAY arr
 *  2. INTEGER k
 */

const integerArray = [1, 2, 3, 4, 5];
const intk =6;
function findNumber(arr, k) {
  //determine if the number is in the array
  if (arr.includes(k)) {
    return "YES";
  } else {
    return "NO";
  }
}
console.log(findNumber(integerArray, intk));
