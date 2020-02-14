function papaya(meow) {
  //this function finds the largest element in the list
  let x = meow[0];

  for (let zork = 0; zork < meow.length; zork++) {
    let potato = meow[zork];

    if (potato > x) {
      x = potato;
    }
  }
  return x;
}

console.log(papaya([10, 1000, 40, 50, 108, 17]))

function clowntown(octopus) {
  //Makes negative numbers positive
  if (octopus < 0) {
    return -1 * octopus;
  } else {
    return octopus;
  }
}

console.log('clowntown(20) is:', clowntown(20));
console.log('clowntown(-20) is:', clowntown(-20));
console.log('clowntown(0) is:', clowntown(0));
console.log('clowntown(-108) is:', clowntown(-108));

function chowhound(llama) {
  // reverses the aray that was given as a parameter
  let razzleDazzle = [];

  for (let qq = 1; qq <= llama.length; qq++) {
    razzleDazzle.push(llama[llama.length - qq]);
  }

  return razzleDazzle;
}

console.log(chowhound(['A', 'B', 'C', 'D', 'E', 'F']));
