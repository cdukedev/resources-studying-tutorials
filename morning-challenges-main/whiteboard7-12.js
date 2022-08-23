const string = "UDDDUDUU"; //1 valley
const string2 = "DUDUDU"; // 3 valleys

const findValley = (str) => {
  let valley = 0;
  let count = 0;
  const level = 0;
  let below = false;
  for (let i = 0; i < string.length; i++) {
    if (str[i] === "U") {
      count++;
      if (below) {
        if (count === level) {
          valley++;
          below = false;
        }
      }
    } else {
      if (count === 0) {
        below = true;
        count--;
      } else {
        count--;
      }
    }
  }
  return valley;
};

console.log(findValley(string2));
