function largestNumber(arrayNumbers) {
  let max = 0
  for (let i = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] > max ) {
      max = arrayNumbers[i]
    }
  }
  return max
}

function smallestNumber(arrayNumbers) {
  let min = 0
  for (let i = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] < min) {
      min = arrayNumbers[i]
    }
  }
  return min
}

function greaterThanK(arrayNumbers, k) {
  for (let i = 0; i < arrayNumbers.length; i++ ) {
    if (arrayNumbers[i] != k) {
      console.log(arrayNumbers[i])
    }
  }
}
function even(arrayNumbers) {
  for (let i = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] % 2 === 0) {
      console.log(arrayNumbers[i])
    }
  }
}
function sorting(arrayNumbers) {
  console.log(arrayNumbers.sort());
  console.log(arrayNumbers.sort(function(a,b){return b - a}))
}

console.log("-------------largest number function------------------")
console.log(largestNumber([1,2,3,4]));
console.log("-------------smallest number function------------------")
console.log(smallestNumber(1,2,3,4));
console.log("-------------greater than k function------------------")
greaterThanK([1,2,3,4], 1);
console.log("-------------even function------------------")
even([1,2,3,4]);
console.log("-------------sorting function------------------")
sorting([4,1,3,2]);
