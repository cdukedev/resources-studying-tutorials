// ukg Test

// divide each number of the matrix by 2

// var values = [
//   [3, 4, 6],
//   [8, 10, 12],
//   [14, 16, 18],
// ];

// function divideNumbers(numbers) {
//   for (var i = 0; i < numbers.length; i++) {
//     for (var j = 0; j < numbers[i].length; j++) {
//       numbers[i][j] = numbers[i][j] / 2;
//     }
//   }
//   return numbers;
// }

// console.log(divideNumbers(values).toString());

process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
  input += chunk;
});

function BST(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

// BST.prototype.insert = function(value){
//     if(value <= this.value){
//         if(!this.left){
//             this.left = new BST(value);
//         }
//         else{
//             this.left.insert(value);
//         }
//     }
//     else if(value > this.value){
//         if(!this.right){
//             this.right = new BST(value);
//         }
//         else{
//             this.right.insert(value);
//         }
//     }
// }

BST.prototype.contains = function (value) {
  //determine if value is in the binary search tree
  console.log(this.value);
  if (value === this.value) {
    return true;
  } else if (value < this.value) {
    if (this.left) {
      return this.left.contains(value);
    } else {
      return false;
    }
  } else if (value > this.value) {
    if (this.right) {
      return this.right.contains(value);
    } else {
      return false;
    }
  }

  return false;
};

//   console.log(start, end);
//     while (start <= end) {
//         let mid = Math.floor((start + end) / 2);
//         if (value[mid] === this.value) {
//             return true;
//         } else if (value[mid] < this.value) {
//             start = mid + 1;
//         } else {
//             end = mid - 1;
//         }
//         }
// };

console.log(BST.prototype.contains(1));

process.stdin.on("end", function () {
  var values = input.split(",");
  var tree = new BST(values[1]);
  for (var i = 2; i < values.length; i++) {
    tree.insert(values[i]);
  }

  console.log(tree.contains(values[0]));
});
