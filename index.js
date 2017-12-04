var name = 'Keith'

var printName = function () {
  console.log('My name is ' + name)
}

printName()

/**
 * Output: "My name is Keith
 * logs "My name is " and the global variable 'name' to the console
 */

score = 5

var result = function () {
  var score = 3
  return score
}

console.log(result())

/**
 * Output: 3
 * the variable declaration inside the funciton is returned instead of the global variable
 */

var myAnimals = ['Chickens', 'Cats', 'Rabbits']

var listAnimals = function () {
  myAnimals = ['Ducks', 'Dogs', 'Lions']
  for (var i = 0; i < myAnimals.length; i++) {
    console.log(i + ': ' + myAnimals[i])
  }
}

listAnimals()

/**
 * Output:
 * 0: Ducks
 * 1: Dogs
 * 2: Lions
 *
 * Loops through the myAnimals array and logs the index and the value at that index
 */

var suspectOne = 'Jay'
var suspectTwo = 'Val'
var suspectThree = 'Keith'
var suspectFour = 'Rick'

var allSuspects = function () {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
}

allSuspects()
console.log('Suspect three is:' + suspectThree)

/**
 * Output:
 * Suspects include: Jay, Val, Harvey, Rick
 * Suspect three is: Keith
 *
 * suspectThree's name is re-defined within the allSuspects method but the global variable is not changed
 */

var detective = {
  name: 'Ace Ventura',
  pet: 'monkey'
}

var printName = function (detective) {
  return detective.name
}

var detectiveInfo = function () {
  detective['name'] = 'Poirot'
  return printName(detective)
}

console.log(detectiveInfo())

/**
 * Output: Poirot
 *
 * detectiveInfor sets the name property of detective to 'Poirot'
 * printName will always return 'Poirot'
 */

var murderer = 'rick'

var outerFunction = function () {
  var murderer = 'marc'

  var innerFunction = function () {
    murderer = 'valerie'
  }

  innerFunction()
}

outerFunction()
console.log('the murderer is ', murderer)

/**
 * Output:
 * the murderer is rick
 *
 * the outerFunction re-defines murderer and innerFunction changes it but the global murderer variable is not changed
 */

