function theBeatlesPlay (musicians, instruments) {
  var roles = []
  for (let i = 0; i < 4; i++) {
  roles.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return roles
}

/*
function johnLennonFacts (facts) {
  let n = 3
  while (n > 0) {
  return console.log([`${facts[n--]}` + "!!!"])
  }
}*/

function iLoveTheBeatles (n) {
  var array = []
  do {
    array.push("I love the Beatles!")
    n++
  } while (n - 1 < 15)
}


//  for theBeatlesPlay() needs to be i is 0-3
