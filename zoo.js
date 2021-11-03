
// console.log("Hello World")

// Data Types:
// string - "words" "123 this is $ string!" "2"
// boolean - true or false
// integer(number) - 29 not "29"
// floats - 29.02
// arrays 
// objects

const concat = "Monkey " + "Cat"
// console.log (concat)
// console.log(2 + 2)
// console.log("2"+"2")
// console.log(true)
// console.log(2.15)
// console.log(`This is a ${concat}`)

const animal = {
  id: 1,
  name: "Chico",
  species: "Monkey"
}

// console.log("animal", animal)

//Find the Monkey
// console.log(animal.species)


const animals1 = ['elephant', 'Giraffe', 'Zebra', 'Monkey', 'Ostrich']

// console.log(animals1)
//Find the Monkey
// console.log(animals1[3])

const animalArray = [1, "Chico", "Monkey", false, 2.2]
// console.log(animalArray)



// console.log("monkey1", animals1[3])

const monkey2 = {
  id: 1,
  name: "Reggie",
  species: "monkey"
}

console.log("monkey2", monkey2.species)

const arrayObjMonkey = [
  {
    id: 1,
    name: "Joel", 
    species: "Rhino"
  },
  {
    id: 2,
    name: "Becky", 
    species: "Wolf"
  },
  {
    id: 3,
    name: "Silas", 
    species: "Turtle"
  },
  {
    id: 4,
    name: "Reggie", 
    species: "Monkey"
  }
]
// console.log(arrayObjMonkey[2])
//find the monkey
// console.log(arrayObjMonkey[3].species)

// console.log("arrayObjMonkey", arrayObjMonkey[3].species)

const arrayObjMonkey2 = [
  {
    id: 1,
    name: "Joel", 
    species: "Rhino"
  },
  {
    id: 2,
    name: "Becky", 
    species: "Wolf"
  },
  {
    id: 3,
    name: "Silas", 
    species: "Turtle"
  },
  ['elephant', 'Monkey', 'Giraffe', 'Zebra', 'Ostrich']
]

// console.log(arrayObjMonkey2[3][1])



// console.log("arrayObjMonkey2", arrayObjMonkey2[3][1])

// Practice Problems:

const findTheMonkey = [2, "George", "curious", "monkey", true]

// Output "George"
// console.log(findTheMonkey[1])
// // Output 2
// console.log(findTheMonkey[0])
// // Output true
// console.log(findTheMonkey[4])
// // Output "monkey"
// console.log(findTheMonkey[3])
// // Output "curious monkey"
// console.log(findTheMonkey[2] + " " + findTheMonkey[3])
// // Output "George is a monkey."
// console.log(findTheMonkey[1] + " is a " + findTheMonkey[3])

const findTheMonkey2 = {
  id: 2,
  name: "George",
  trait: "curious",
  species: "monkey",
  isReal: true
}

const findTheMonkey3 = [
  {
    id: 3,
    name: "Rex",
    trait: "mischievous",
    species: "dog",
    isReal: true
  },
  {
    id: 5,
    name: "Cleo",
    trait: "friendly",
    species: "rat",
    isReal: true
  },
  {
    id: 8,
    name: "Draco",
    trait: "grumpy",
    species: "dragon",
    isReal: false
  },
  {
    id: 2,
    name: "George",
    trait: "curious",
    species: "monkey",
    isReal: true
  },
  {
    id: 1,
    name: "Peanut",
    trait: "needy",
    species: "cat",
    isReal: true
  }
]

// Output "monkey"
console.log(findTheMonkey3[3].species)
// Output "The monkey is George."
console.log(`The ${findTheMonkey3[3].species} is ${findTheMonkey3[3].name}.`)
// Output "Peanut is a cat."
console.log(`${findTheMonkey3[4].name} is a ${findTheMonkey3[4].species}.`)
// Output "Cleo is friendly."
console.log(`${findTheMonkey3[1].name} is ${findTheMonkey3[1].trait}.`)
// output "Rex is a mischievous dog."
console.log(`${findTheMonkey3[0].name} is a ${findTheMonkey3[0].trait} ${findTheMonkey3[0].species}`)

//Practice Problems:

// const findTheMonkey = [2, "George", "curious", "monkey", true]

// Output "George"
  // Output 2
  // Output true
  // Output "monkey"
  // Output "The monkey is curious."
  // Output "George is a monkey."
  // console.log(`${findTheMonkey[1]} is the ${findTheMonkey[3]}.`)

  // const findTheMonkey2 = {
  //   id: 2,
  //   name: "George",
  //   trait: "curious",
  //   species: "monkey",
  //   isReal: true
  // }
  
  // // Output "George"
  // // Output 2
  // // Output true
  // // Output "monkey"
  // // Output "The monkey is curious."
  // // Output "George is a monkey."