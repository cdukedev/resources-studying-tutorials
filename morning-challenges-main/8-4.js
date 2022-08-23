/*
  Given an array of integers, return indices of the two numbers such that they add up to a specific target.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.

  Example:

  Given nums = [2, 7, 11, 15], target = 9
  let nums = [11, 4, 15, 5]
  Because nums[0] + nums[1] = 2 + 7 = 9
  Return [0, 1]
*/
let nums = [11, 4, 15, 5];
let target = 26;

const ifSum = (arr, target) => {
    let firstIndex = 0;
    let secondIndex = 0;
    let moveLeft = -1;
    let sortedArray = arr.sort((a, b) => a - b);
    for (let i = 0 ; i < arr.length ; i++) {
        secondIndex = arr.length + moveLeft;
        if(sortedArray[firstIndex] + sortedArray[sortedArray.length + moveLeft] === target){
            return [firstIndex, secondIndex];
        }
        else if(sortedArray[firstIndex] + sortedArray[sortedArray.length + moveLeft] > target){
            moveLeft--;
        }
        else{
            firstIndex++;
        }
    }
    console.log('no match');
}

console.log(ifSum(nums, target))

