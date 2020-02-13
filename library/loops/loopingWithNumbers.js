function betweenMinMax(min,max) {
  for (let i = min; i < max + 1; i++) {
    console.log(i)
  }
}
//betweenFortySixty()

function evenBetweenMinMax(min,max) {
  for (let i = min; i < max + 1; i = i + 2) {
    console.log(i)
  }
}

function firstMultiplesOf(k,n) {
  let highestAmount = k * n
  let multipleArray = []
  let product = 0
  for (let i = 1; product < k * n; i ++ ) {
    product = i * k
    console.log(product)
  }
}

// betweenMinMax(40,60)
// console.log(" ")
// evenBetweenMinMax(40,60)
// console.log(" ")
firstMultiplesOf(7,3)
