
function loopingWithArrays() {
  let coolArray = [1,2,3,4];
  for (let i = 0; i < coolArray.length; i ++) { //This prints every element of cool Array
    console.log(coolArray[i]);
  }
  console.log(" ")
  for (let i = 0; i < coolArray.length; i = i + 2) { //This prints every other element of cool Array
    console.log(coolArray[i]);
  }
  console.log(" ")
  for (let i = 0; i < coolArray.length; i ++) { //This prints every element of cool Array from the end
    console.log(coolArray.reverse()[i]);
    coolArray.reverse() //you have to reset the array after reversing it


  }

}
loopingWithArrays()
