fs = require('fs');

function files() {
  text = fs.readFileSync('../inputObject/data.txt', 'utf-8')
  text = text.split('\n')
  longest = ""
  shortest = text[0]

  for (let i = 0; i < text.length; i ++) {
    if (text[i].length > longest.length) {
      longest = text[i]
    }
    if (text[i].length < shortest.length && text[i] != "") {
      shortest = text[i]
    }
  }
  console.log(`the longest line is: "${longest}"`)
  console.log(`the shortest line is: "${shortest}"`)
}
files()
