function stringAssignment() {
  console.log(" ------string assignment function ------")
  let str1;
  let str2;
  console.log(`the values of str1 and str2 currently are ${str1}`)
  console.log(" ")
  str1 = "this is being set to equal str1"
  str2 = "this is being set to equal str2"
  console.log(`now the values of str1 and str2 equal "${str1}" and "${str2}"`)
}
stringAssignment()
console.log(" ")

function concatenation() {
  console.log("------------concatenation function-----------")
  let str1 = "this is str1"
  let str2 = "this is str2"
  console.log(`currently str1 = '${str1}', and str2 = '${str2}'`)
  console.log(" ")
  console.log(`In order to add them you use the addition operator and get: ${str1 + str2}`)
}
concatenation()
console.log(" ")
console.log("--------------includes function-----------------")

function Includes(str1Value, str2Value) {
  let str1 = str1Value;
  let str2 = str2Value;
  console.log(`currently str1 = '${str1}', and str2 = '${str2}'`)
  if (str1.includes(str2)) {
    console.log(` since str2 is in str1 the includes function will return ${str1.includes(str2)}`)
    console.log(" ")
    return
  }
  console.log(` since str2 is not in str1 the includes function will return ${str1.includes(str2)}`)
  console.log(" ")
}
Includes("hello how are you", "hello");
Includes("I love roses", "Sunflower")
