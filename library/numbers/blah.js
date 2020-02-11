function setBlah(num) {
  let blah;
  console.log(`num = ${num}`)
  console.log(`blah = ${blah} `)
  blah = num
  console.log(`now blah = ${blah}`)
  return blah
}

function rightMostDigit(blah) {
  console.log(`blah = ${blah}`)
  Digit = blah % 10
  console.log(`the right most digit = ${Digit}`)
  return Digit
}

function evenOrOdd(blah) {
  console.log(`blah = ${blah}`)
  if (blah % 2 === 0) {
    console.log(`blah is even`)
    return "even"
    }
    console.log(`blah is odd`)
    return "odd"
}

function increments(blah, val) {
  console.log(`initially blah = ${blah}`)
  console.log(`blah is being incremented by ${val}`)
  for (let i = blah; i < 50; i = i + val) {
  console.log(`blah is now ${blah = i}`)}
}
function decrements(blah, val) {
  console.log(`initially blah = ${blah}`)
  console.log(`blah is being decremented by ${val}`)
  for (let i = blah; i > 0; i = i - val) {
    blah = i
  console.log(`blah is now ${blah}`) }
}



console.log("----- Set Blah Function -----")
console.log(setBlah(15) === 15);
console.log(' ')
console.log(setBlah(67) === 67);
console.log(' ')
console.log("-----Right Most Digit Function -----")
console.log(rightMostDigit(15) === 5);
console.log(' ')
console.log(rightMostDigit(67) === 7);
console.log(' ')
console.log('------Even or Odd Function------')
console.log(evenOrOdd(15) === "odd");
console.log(' ')
console.log(evenOrOdd(8) === "even");
console.log(' ')
console.log('-------Increment function ------')
increments(15, 2)
console.log(' ')
increments(4, 2)
console.log(' ')
console.log('------ Decrement function--------')
decrements(16, 2)
console.log(' ')
decrements(20, 4)
