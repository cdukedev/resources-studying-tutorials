// If you are not familiar with tennis rules, here's a short description of its scoring system. Score calling is unique in tennis: each point has a corresponding call that is different from its point value. The table of points won and corresponding calls is given below.

// +----------------------+--------------------+
// | Number of points won | Corresponding call |
// +----------------------+--------------------+
// |          0           |      "love"        |
// +----------------------+--------------------+
// |          1           |       "15"         |
// +----------------------+--------------------+
// |          2           |       "30"         |
// +----------------------+--------------------+
// |          3           |       "40"         |
// +----------------------+--------------------+
// There's an additional rule to remember: when players are tied by one or two points, the score is described as "15-all" and "30-all", respectively.

// A string in the format <p1>-<p2> representing a valid score, where <p1> is the first player's score, and <p2> is the second player's score. "15-all" or "40-love".

// Create a function that will calculate the number of points won in the game given the current score.

// ======================================================

const tennisScoreToPoints = (score) => {
  //create scoring array of objects
  const scoring = {
    love: 0,
    15: 1,
    30: 2,
    40: 3,
  };
  if (score === "love") {
    return scoring.love;
  } else {
    //split score into two strings
    let scoreArr = score.split("-");
    //get score for each player
    let p1value = scoreArr[0];
    let p2value = scoreArr[1];
    if (p2value === "all") {
      p2value = p1value;
    }
    //return points for each player concatenated as a string
    return `${scoring[p1value]}-${scoring[p2value]}`;
  }
};

console.log(tennisScoreToPoints("15-love"));
console.log(tennisScoreToPoints("love"));
console.log(tennisScoreToPoints("30-all"));
console.log(tennisScoreToPoints("15-40"));
