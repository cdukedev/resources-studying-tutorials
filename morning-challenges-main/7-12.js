// Question:
// Create a function called 'sortString' that will sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
// Note: Numbers will only be from 1 to 9. So 1 will be the first word (not 0). You will not get a sentence that has more than 9 words.
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Example: "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// Example: "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"

// ====================================================

// create sortString function
const sortString = (str) => {
  const words = [
    {
      word: "",
    },
    {
      word: "",
    },
    {
      word: "",
    },
    {
      word: "",
    },
    {
      word: "",
    },
    {
      word: "",
    },
    {
      word: "",
    },
    {
      word: "",
    },
    {
      word: "",
    },
  ];
  const wordsString = str.split(" ");
  for (let i = 0; i < wordsString.length; i++) {
    let wordString = wordsString[i].split("");
    for (let j = 1; j <= wordString.length; j++) {
      let upper = wordString.length;
      let lower = 0;
      let mid = Math.floor((upper + lower) / 2);
      if (wordString[mid] === j) {
        words[i] = wordString;
      } else if (wordString[mid] > j) {
        upper = mid - 1;
      } else {
        lower = mid + 1;
      }
    }
    return (
      words[0].word +
      " " +
      words[1].word +
      " " +
      words[2].word +
      " " +
      words[3].word +
      " " +
      words[4].word +
      " " +
      words[5].word +
      " " +
      words[6].word +
      " " +
      words[7].word +
      " " +
      words[8].word +
      " " +
      words[9].word
    );
  }
};

console.log(sortString("4of Fo1r pe6ople g3ood th5e the2"));
// //
