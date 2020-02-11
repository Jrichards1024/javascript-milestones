function stringToArray(){
  console.log(" ")
  sentence = "sunflowers are yellow"
  console.log(`sentence is currently a string: ${sentence}`)
  console.log(" ")
  sentence = sentence.split(' ')
  console.log(`to break the string into an array of words you can use the split function: ${sentence}`)
  console.log(" ")
  sentence = sentence.join(' ')
  console.log(`you can put the string back together usign the join function: ${sentence}`)
  console.log(" ")
  sentence = sentence.split(' ')
  sentence = sentence.join('|')
  console.log(`you can join the string with something in between by putting what you want in the join par.: ${sentence}`)

}
stringToArray()
