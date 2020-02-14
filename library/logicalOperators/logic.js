function logic(num1, num2) {
  // use the && as a way to "and"
  if (num1 % 2 === 0 && num2 % 2 === 0) {
    console.log(`they are both even!`)
  }
   // use the || as a way to "and"
  else if (num1 % 2 === 0 || num2 % 2 === 0) {
    console.log(`only one was even`)
  }
  // use the != to mean not equal to
  else if (num1 % 2 != 0 && num2 % 2 != 0) {
    console.log(`neither were even`)
  }
}
logic(1,3)
