function featuresOfWaffles(waffleValue, k) {
  let waffle = waffleValue;
  console.log(`1. the value for waffle is now ${waffle}`)
  console.log(" ")
  console.log(`2. using the length function to find the length of waffles the length of waffles =  ${waffle.length}`)
  console.log(" ")
  console.log(`3. in order to capitalize a string you use the capitalize function and the capitalized string = ${waffle.toUpperCase()}`)
  console.log(" ")
  console.log(`4. in order to lowercase a string you use the lowercase function and the lowercased string = ${waffle.toLowerCase()}`)
  console.log(" ")
  console.log(`5. the first value in a string is represented by 0 so using the 0 index the first value in waffle = ${waffle[0]}`)
  console.log(" ")
  console.log(`6. by the same logic the second value is represented by 1 so the second value in waffle = ${waffle[1]}`)
  console.log(' ')
  console.log(`7. by using the length function - 1 in the index you can get the last value of a string. The last value of waffle = ${waffle[waffle.length - 1]}`)
  console.log(' ')
  console.log(`8. k is a changing value. Now k = ${k}. To get the kth value you index the string at k which, in waffle, is ${waffle[k]}`)
  console.log(' ')
  console.log(`9. To add to the end of a string you use the addition operator. a added to the end of waffle = ${waffle = waffle + 'a'}`)
  console.log(' ')

}

featuresOfWaffles("this is the value of waffles", 3)
