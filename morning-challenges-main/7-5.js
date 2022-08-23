// ================== doubleUp ======================

// Question:
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
// "Hello World" => "HHeelloo  WWoorrlldd"

// ==================================================

const str = "Hello World";

const doubleUp = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[i] + str[i];
  }
  return result;
};

console.log(doubleUp(str));

//redo doubleUp with map and split
const doubleUp2 = (str) => {
  return str
    .split("")
    .map((char) => char + char)
    .join("");
};

console.log(str.split(""));


//expected output: "HHeelloo  WWoorrlldd"
