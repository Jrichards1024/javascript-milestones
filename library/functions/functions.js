function greet(name) {
  console.log(`Hello ${name}, how are you doing this evening`)
}
console.log(`----------------greet function ---------------`)
greet('Joseph')
console.log(' ')

function hotOrCold(number) {
  if (number > 100) {
    return "hot"
  }
  if (number === 100) {
    return "correct"
  }
  if (number < 100) {
    return "cold"
  }
}
console.log(`----------------Hot or Cold function ---------------`)
console.log(hotOrCold(100))
console.log(' ')

function add(num1, num2) {
  return num1 + num2

}
console.log(`----------------Add function ---------------`)
console.log(add(1,2))
console.log(' ')

function sum(arrayNumbers) {
  let totalSum = 0;
  for (let i = 1; i <= arrayNumbers.length; i = i + 2) {
    totalSum = totalSum + add(arrayNumbers[i], arrayNumbers[i - 1])
  }
  return totalSum
}
console.log(`----------------sum function ---------------`)
console.log(sum([1,2,3,4]))
console.log(' ')

function larger(num1, num2) {
  if (num1 > num2) {
    return num1
  }
  if (num1 < num2) {
    return num2
}
}
//console.log(`----------------larger function ---------------`)
//console.log(larger(4,3))
//console.log(' ')

function largest(arrayNumbers) {
  let largestSoFar = 0
  for (let i = 1; i <= arrayNumbers.length; i = i + 2) {
    if (larger(arrayNumbers[i], arrayNumbers[i - 1]) > largestSoFar) {
      largestSoFar = larger(arrayNumbers[i], arrayNumbers[i - 1])
    }
    }
    return largestSoFar
}
console.log(`----------------largest function ---------------`)
console.log(largest([2,7,3,1,6]))
console.log(' ')

function longer(stringOne, stringTwo) {
  if (stringOne.length > stringTwo.length) {
    return stringOne
  }
  else if (stringOne.length < stringTwo.length) {
    return stringTwo
  }
  else if (stringOne.length === stringTwo.length) {
    return false
  }
}
//console.log(`----------------longer function ---------------`)
//longer("hello","sunflower")
//console.log(' ')

function longest(arrayStrings) {
  let largestString = ""
  for (let i = 1; i < arrayStrings.length; i = i + 2) {
    word = longer(arrayStrings[i], arrayStrings[i - 1])
    if (word.length > largestString.length) {
      largestString = word
    }
    }
    return largestString
}
console.log(`----------------longest function ---------------`)
console.log(longest(["hello","world", "sunflowers", "are", "yellow","the","sky","is","blue"]))
console.log(' ')

function reverse(arrayOf) {
  let lengthOfArray = arrayOf.length
  let empty = [];
  for (let i = 1; i < lengthOfArray + 1; i++) {
    empty.push(arrayOf[lengthOfArray - i])
  }
  return empty
}
console.log(`----------------reverse function ---------------`)
console.log(reverse([1,2,3,4,5]))
console.log(' ')

function isChicagoPhoneNumber(phoneNumbers) {
  for (let number of phoneNumbers) {
    areaCode = number.slice(0,3)
    if (areaCode === "773" || areaCode === "312" || areaCode === "872"){
      console.log(`this is the phone number that is of chicago origin: ${number}`)
      return true
    }
  }
}
console.log(`----------------is Chicago Phone Number function ---------------`)
console.log(isChicagoPhoneNumber(["123-353-4893", "760-654-3234", "343-243-2345", "773-345-5432"]))
console.log(' ')

function letterCounts(string) {
  let collection = {}
  for (let i = 0; i < string.length; i ++) {
    if (Object.keys(collection).includes(string[i])) {
      collection[string[i]] =  collection[string[i]] + 1
    }
    else {
      collection[string[i]] = 1
    }
  }
  console.log(collection)
  return collection
}
console.log(`----------------letter counts function ---------------`)
letterCounts('wowowowowowow')
console.log(' ')
