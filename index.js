function theBeatlesPlay (musicians, instruments) {
  var roles = []
  for (let i = 0; i < 4; i++) {
  roles.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return roles
}


function johnLennonFacts (facts) {
  let n = 3
  var array2 = []
  while (n > 0) {
  array2.push([`${facts[n--]}` + "!!!"])
  }
  return array2
}

function iLoveTheBeatles (n) {
  var array = []
  do {
    array.push("I love the Beatles!")
    n++
  } while (n < 15)
  return array
}


//  for theBeatlesPlay() needs to be i is 0-3
