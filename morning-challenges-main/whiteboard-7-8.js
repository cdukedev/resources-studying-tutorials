// let personOneScores = [20, 5, 99];
// let personTwoScores = [3, 5, 88];

let personOneScores = [1, 2, 3];
let personTwoScores = [4, 1, 3];

const determineScore = (person1Arr, person2Arr) => {
  let person1Score = 0;
  let person2Score = 0;
  for (let i = 0; i < person1Arr.length; i++) {
    if (person1Arr[i] === person2Arr[i]) {
    } else if (person1Arr[i] > person2Arr[i]) {
      person1Score += 1;
    } else {
      person2Score += 1;
    }
  }
  return [person1Score, person2Score];
};

console.log(determineScore(personOneScores, personTwoScores));
