// ================== halloween ======================

// Question:
// It's Halloween! Kids are trick-or-treating and you're noticing that even within a group, certain kids always have more candy than others.

// Given an array of integers, representing how many candies each kid has, find out which kid has the most candies.

// After giving each kid the same amount of candies, which kids will have more than the kid with the most before you added to their loot.

// Return an array of booleans.

// ===================================================
const candyDistribution = (arr) => {
  //determine which kid has the most candies
  //Save copy of array
  let newArray = arr.slice();
  let max = 0;
  //determine average
  let average = 0;
  for (let i = 0; i < newArray.length; i++) {
    average += newArray[i];
  }
  average = average / newArray.length;
  //return which index had the most candies
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] > max) {
      max = newArray[i];
    }
  }
  //determine which kid in original array had less than the average
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < average) {
      newArray[i] = false;
    }
  }
  //determine which kid in original array had more than the average
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > average) {
      newArray[i] = true;
    }
  }
  console.log(average);
  console.log(max);
  console.log(newArray);
};

candyDistribution([1, 5, 87, 45, 8, 8, 4]);
