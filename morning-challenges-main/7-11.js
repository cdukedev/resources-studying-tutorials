// ================== scoreSentence ======================

// Question:
// Given a string of words (sentence), you need to find the highest scoring word. Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc. You need to return the highest scoring word as a string. If two words score the same, return the word that appears earliest in the original string. All letters will be lowercase and all inputs will be valid.

// =======================================================

alphabetScoring = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};

const input1 = "zebra apple"; //expected output: apple  //zebra 52 and apple
const input2 = "hello world this is a test that shouldaa shouldb work";
const input3 = "jk lol rofl np wtf roflmao";

// add a scoring function
function scoreWords(sentence) {
  // split words
  let words = sentence.split(" ");

  //declare highestscore and highest word
  let highestScore = 0;
  let highestWord = "";

  // create i loop for words and j loop to determine each words score
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let score = 0;
    for (let j = 0; j < word.length; j++) {
      let letter = word[j];
      score += alphabetScoring[letter];
    }
    if (score > highestScore) {
      highestScore = score;
      highestWord = word;
    }
  }
  return highestWord;
}

//output: highest scoring word
console.log(scoreWords(input1)); // apple
console.log(scoreWords(input2)); // shouldaa
console.log(scoreWords(input3)); // roflmao

//WITH ONLY ONE LOOP
// function scoreWords(sentence){
//     let highScore = 0;
//     let highScoreWord = "";
//     let score = 0;
//     let word = "";
//     index = 0;
//     for(let letter of sentence){
//       index++;
//       if(letter === " " || sentence.length === index){
//         if(score > highScore){
//           highScore = score;
//           highScoreWord = word;
//           score = 0;
//           word = "";
//         }else{
//           score = 0;
//           word = "";
//         }
//       }else{
//       score += letters.indexOf(letter) + 1;
//       word += letter;
//       }
//     }
//     return highScoreWord;
//   }
