/*
  Input: num = 123
  Output: "One Hundred Twenty Three"
  
  Input: num = 1234567
  Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
*/

//
// Solution 1:
// special numbers {11: eleven, 12: twelve, 13: thirteen, 14: fourteen, 15: fifteen, 16: sixteen, 17: seventeen, 18: eighteen, 19: nineteen}
const specialNumbers = {
  11: "Eleven",
  12: "Twelve",
  13: "Thirteen",
  14: "Fourteen",
  15: "Fifteen",
  16: "Sixteen",
  17: "Seventeen",
  18: "Eighteen",
  19: "Nineteen",
};

// single {0: zero, 1: One, 2: Two, 3: Three, 4: Four, 5: Five, 6: Six, 7: Seven, 8: Eight, 9: Nine}
const singles = {
  0: "Zero",
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine",
};
// tensDigit {1: Ten, 2: Twenty, 3: Thirty, 4: Forty, 5: Fifty, 6: Sixty, 7: Seventy, 8: Eighty, 9: Ninety}
const tensDigit = {
  1: "Ten",
  2: "Twenty",
  3: "Thirty",
  4: "Forty",
  5: "Fifty",
  6: "Sixty",
  7: "Seventy",
  8: "Eighty",
  9: "Ninety",
};

// hundredsDigit {1: Hundred, 2: Two Hundred, 3: Three Hundred, 4: Four Hundred, 5: Five Hundred, 6: Six Hundred, 7: Seven Hundred, 8: Eight Hundred, 9: Nine Hundred}
const hundredsDigit = {
  1: "Hundred",
  2: "Two Hundred",
  3: "Three Hundred",
  4: "Four Hundred",
  5: "Five Hundred",
  6: "Six Hundred",
  7: "Seven Hundred",
  8: "Eight Hundred",
  9: "Nine Hundred",
};

//index of the number in the string
//length of num -1 = single digit

// split number

//Formats
// if >= 13 && < 16
//trillions = [ "", "", "", "Trillion", "", "", "", "Billion", "", "", "", "Million", "", "", "", "Thousand", "", "", "",]

// if >= 10 && < 13
//billions = [ "", "", "", "Billion", "", "", "", "Million", "", "", "", "Thousand", "", "", "",]

// if >= 7 && < 10
//millions = [ "", "", "", "Million", "", "", "", "Thousand", "", "", "",]

// if >= 4 && < 7
//thousands = [ "", "", "", "Thousand"]

//if less than 4
//hundreds = ["", "", ""]

// create function to split number and return array of strings joined by spaces

const convertNumberToStringVersion = (num) => {
  const numSplit = num.toString().split("");
  const numLen = numSplit.length;
  const numString = [];
};
