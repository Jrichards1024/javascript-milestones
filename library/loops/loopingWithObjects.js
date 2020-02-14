let objectMonths = require("../Objects/objects.js")

function loopingWithObjects(coolObjects) {
  console.log("This object has the top selling artist of all time and their amount of number 1 hits")
  console.log(" ")
  for (let key in coolObjects) {
    console.log(`the first key is: ${key}`)
    console.log(`the value is: ${coolObjects[key]}`)
  }
}

function sort(coolObjects) {
  console.log(`array of keys will collect and alphabetize the keys of coolObjects`)
  console.log(" ")
  let arrayOfKeys = [];
  console.log("sorted will hold the value of the sorted keys")
  console.log(" ")
  let sorted;
  for (let key in coolObjects) {
    arrayOfKeys.push(key)
  }
  console.log(`array of keys is now equivalent to ${arrayOfKeys}`)
  console.log(" ")
  sorted = arrayOfKeys.sort()
  console.log(`sorted is now equivalent to ${sorted}`)
  console.log(" ")
  console.log(`this for loop now attaches the key to the value`)
  console.log(" ")
  for (let element of sorted) {
    console.log(`${element}:${coolObjects[element]}`)
  }
  console.log(" ")
  console.log(`this for loop now attaches the key to the value in ----- REVERSED ORDER -----`)
  console.log(" ")
  for (let element of sorted.reverse()) {
    console.log(`${element}:${coolObjects[element]}`)
  }
}
function daysInMonth(Months) {
  console.log("the following for loop iterates over the keys within the Months dictionary")
  console.log(" ")
  for (let key in Months) {
    if (Months[key] === 31) {
      console.log(`the if statement was entered meaning the following month has 31 days: ~${key}~`)
      console.log(" ")
    }
  }

}
console.log(`-----------------------------Looping with Objects Function -----------------------------`)
loopingWithObjects({'Mariah Carey': 19, 'Elvis Presley': 17, 'The Beatles': 20, 'Rihanna': 14, 'Michael Jackson': 13})
console.log(`-----------------------------Sort Function -----------------------------`)
sort({'Mariah Carey': 19, 'Elvis Presley': 17, 'The Beatles': 20, 'Rihanna': 14, 'Michael Jackson': 13})
console.log(`-----------------------------Days in Month Function -----------------------------`)
daysInMonth(objectMonths)
