
function longestStringInArray(listOfStrings) {
  let longestString = ""
  console.log("longestString variable will hold the string with the longest length")
  for (let i of listOfStrings) {
    if (i.length > longestString.length) {
      console.log(" ")
      console.log("if statement entered because the length of the element is the new longest")
      longestString = i
      console.log(" ")
      console.log(`longest string is now: ${longestString}`)
      console.log()
    }
  }
  return longestString
}

function shortestStringInArray(listOfStrings) {
  let shortestString = listOfStrings[0];
  console.log("shortestString variable will hold the string with the shortest length")
  for (let i of listOfStrings) {
    if (i.length < shortestString.length) {
      console.log(" ")
      console.log("if statement entered because the length of the element is the new shortest")
      shortestString = i
      console.log(" ")
      console.log(`shortest string is now: ${shortestString}`)
      console.log()
    }
  }
  return shortestString
}
function minimumLength(listOfStrings, minLength) {
  let correctStrings = [];
  console.log(`- correct strings is an empty array that will hold the strings larger than minLength of ${minLength}`)
  console.log(" ")
  for (let i of listOfStrings) {
    if (i.length > minLength) {
      correctStrings.push(i)
      console.log(`- if statement entered because element, "${i}", is greater than minLength`)
      console.log(" ")
      console.log(`- correctStrings now looks like this: [ ${correctStrings} ]`)
      console.log(" ")
    }
  }
}
function needleInAHaystack(listOfStrings,needle) {
  console.log(`the needle is "${needle}"`)
  console.log(" ")
  for (let i of listOfStrings) {
    if (i.includes(needle)) {
      console.log(`if statement entered because i, "${i}", includes or is equivalent to the 'needle'`)
      console.log(" ")
      console.log("FOUND IT")
      return
    }
  }
}
function sortArray(listOfStrings) {
  console.log(`this is the list of strings in the beginning: ${listOfStrings}`)
  console.log(' ')
  console.log(`This is the list of strings after being sorted: ${listOfStrings.sort()}`)
  console.log(' ')
  sorted = listOfStrings.sort()
  console.log(`This is the list of strings after being reversed sorted: ${sorted.reverse()}`)

}
console.log("-----------------------Longest String Function------------------------")
console.log(longestStringInArray(["hello","world", "sunflowers", "are", "yellow","the","sky","is","blue"]))
console.log("------------------------Shortest String Function-----------------------")
console.log(shortestStringInArray(["hello","world", "sunflowers", "are", "yellow","the","sky","is","blue"]))
console.log("---------------------Minimun Length Function-------------------------")
minimumLength(["hello","world", "sunflowers", "are", "yellow","the","sky","is","blue"], 3)
console.log("--------------------Needle in Haystack Function--------------------------")
needleInAHaystack(["hello","world", "sunflowers", "are", "yellow","the","sky","is","blue"],"a")
console.log("-------------------------Sort Array Function--------------------------")
sortArray(["hello","world", "sunflowers", "are", "yellow","the","sky","is","blue"])
