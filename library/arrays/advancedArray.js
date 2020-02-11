  function advancedArray(k) {
  let coolArray = [1,2,3,4,5]
  console.log(`coolArray is now ${coolArray}`)
  coolArray.splice(0,1,6)
  console.log(`1. to replace value in an array you can use the SPLICE function. Replacing the first element in cool array with 6: ${coolArray}`)
  console.log(' ')
  coolArray.splice(1,1,7)
  console.log(`2. to replace value in an array you can use the SPLICE function. Replacing the second element in cool array with 7: ${coolArray}`);
  console.log(' ')
  coolArray.splice(coolArray.length - 1,1,'last')
  console.log(`3. to replace value in an array you can use the SPLICE function. Replacing the last element in cool array with 'last':${coolArray}`);
  console.log(' ')
  coolArray.splice(k,1,'joe')
  console.log(`4. to replace value in an array you can use the SPLICE function. k = ${k}. Replacing the kth element in cool array with 'joe':${coolArray}`);
  console.log(' ')
  coolArray.push('a')
  console.log(`5. to add something to an array you use the PUSH function. adding a to coolArray = ${coolArray}`);
  console.log(' ')
  coolArray.pop()
  console.log(`6. to take away the last element in an array you can use POP function. Removing the last element of coolArray = ${coolArray}`);
  console.log(' ')
  coolArray.unshift('here')
  console.log(`7. to add a value to the beginning of an array you can use the UNSHIFT function. Adding 'here' to the beginning of coolArray = ${coolArray}`);
  console.log(' ')
  coolArray.shift()
  console.log(`8. to take away the value from the beginning of an array you can use the SHIFT function. Taking away 'here' from the beginning of coolArray = ${coolArray}`);
  }

  advancedArray(3)
