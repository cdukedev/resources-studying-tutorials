// ================== invertString ======================
// Question:
// You are given a string of words, for each word within the string you need to turn the word 'inside out'. The internal letters will move out, and the external letters will move toward the centre. If the word is even in length, all letters will move. If the word in length is odd, you are expected to leave the 'middle' letter of the word where it is.
// ======================================================

const stringToInvert = "hellos Im string";


//ORIGINAL ANSWER
// const invertString = (str) => {
//   //split the string into an array of words
//   let stringArray = str.split(" ");
//   let newString = "";
//   // steps to turn string inside out
//   //loop through the array
//   for (let i = 0; i < stringArray.length; i++) {
//     let step = 1;
//     let wordChar = "";
//     //split the word into an array of characters
//     let wordArray = stringArray[i].split("");
//     //if the word is even in length
//     if (stringArray[i].length % 2 === 0) {
//       for (let j = 0; j < stringArray[i].length; j++) {
//         step = j + 1;
//         wordChar = wordArray[j];
//         //splice wordChar into stringArray at step
//         wordArray.slice(i, step, wordChar);
//         wordChar = wordArray[-step];
//         //splice wordChar into stringArray at step
//         wordArray.slice(i, -step, wordChar);
//       }
//     }
//     step++;
//     newString += wordArray.join("") + " ";
//   }
//   //join the array into a string
//   return newString;
// };


//TRYING JORDANS ANSWER



function shift(){
    //reverse the string
}


console.log(invertString(stringToInvert));
