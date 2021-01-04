// ASSESSMENT 6: JavaScript Coding Practical Questions


// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is a president of the galaxy." "Arthus Dent is a radio employee."

const nameFinder = (array) => {
  let name = array.map(value => value.name)
  let nameSplit = name.map(value => value.split(" "))
  console.log(name)
  let capitalLettering = nameSplit.map(value => value.map(value => value[0].toUpperCase() + value.slice(1)))
  let joinNames = capitalLettering.map(value => value.join(" "))
  let occupation = array.map(value => value.occupation)
  let nameAndOccupation = []
  for(let i=0; i<array.length; i++){
    nameAndOccupation.push(`${joinNames[i]} is a ${occupation[i]}`)
  }
  return nameAndOccupation.join("")
}
// console.log(nameFinder(people))


const sentCap = (array) => {
  let describe = array.map(value => {
    let namesCap = value.name.split(" ").map(value => value.charAt(0).toUpperCase() + value.slice(1)).join(" ")
    return `${namesCap} is a ${value.occupation}`
  })
  return describe
}
// console.log(sentCap(people))

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDER of the numbers when divided by 3.

var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
// Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// numbers only
// remainder of the numbers

const numRemainder = (array) => {
  let numFilter = array.filter(Number.isFinite)
  return numFilter.map(value => value % 3)
}
// console.log(numRemainder(testingArray1))
// console.log(numRemainder(testingArray2))

const remainder = (array) => {
  return array.filter(value => typeof value === 'number').map(value => value % 3)
}
// console.log(remainder(testingArray1))
// console.log(remainder(testingArray2))

// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]


const merge = (arr1, arr2) => {
  let allArray = arr1.concat(arr2)
  return allArray.filter((item, index) => allArray.indexOf(item) === index)
}
// console.log(merge(testingArray3, testingArray4))


const nodups = (array1, array2) => {
  let concat = array1.concat(array2)
  let set = new Set(concat)
  return [...set]
}
console.log(nodups(testingArray3, testingArray4))
