function add(num1, num2) {
  console.log(`num1: ${num1}`)
  console.log(`num2: ${num2}`)
  console.log(`The sum of num1 and num2 = ${num1 + num2}`)
  return num1 + num2
}
function subtract(num1, num2) {
  console.log(`num1: ${num1}`)
  console.log(`num2: ${num2}`)
  console.log(`The difference of num1 and num2 = ${num1 - num2}`)
  return num1 - num2
}
function multiplication(num1, num2) {
  console.log(`num1: ${num1}`)
  console.log(`num2: ${num2}`)
  console.log(`The product of num1 times num2 = ${num1 * num2}`)
  return num1 * num2
}
function division(num1, num2) {
  console.log(`num1: ${num1}`)
  console.log(`num2: ${num2}`)
  console.log(`The quotient of num1 divided by num2 = ${num1 / num2}`)
  return num1 / num2
}
function modulus(num1, num2) {
  console.log(`num1: ${num1}`)
  console.log(`num2: ${num2}`)
  console.log(`The modulus of num1 and num2 = ${num1 % num2}`)
  return num1 % num2
}
function exponential(num1,num2){
  console.log(`num1: ${num1}`)
  console.log(`num2: ${num2}`)
  console.log(`num1 to the num2 power = ${num1 ** num2}`)
  return num1 ** num2
}

function mathFloor(num1, num2){
  console.log(`num1: ${num1}`)
  console.log(`num2: ${num2}`)
  console.log(`the math.floor of the quotient of num1 divided by num2 = ${Math.floor(num1 / num2)}`)
  return Math.floor(num1 / num2)
}
console.log(add(15,2) === 17);
console.log(add(25,18) === 43);
console.log(subtract(15,2) === 13);
console.log(subtract(25,18) === 7);
console.log(multiplication(15,2) === 30);
console.log(multiplication(7,4) === 28);
console.log(division(15,3) === 5);
console.log(division(8,2) === 4);
console.log(modulus(13,3) === 1);
console.log(modulus(19,5) === 4);
console.log(exponential(4,2) === 16);
console.log(exponential(3,4) === 81);
console.log(mathFloor(5,2) === 2);
console.log(mathFloor(16,3) === 5);
