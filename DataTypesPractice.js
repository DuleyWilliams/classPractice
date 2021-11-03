/*
  Use your newfound JavaScript skills to log the requested phrases to the console.

  While you can make everything a string, practice use the variables for any value availble.
  */

  // example:
  const example = {
    id: 4,
    isExample: true,
    text: "example",
    city: "Nashville",
    state: "TN"
  }

  // Output "Nashville"
    //   console.log(example.city)
  
  // Output "Nasvhille is in TN."
    //   console.log(`${example.city} is in ${example.state}.`)

const findTheMonkey = [2, "George", "curious", "monkey", true]

// Output "George"
// Output 2
// Output true
// Output "monkey"
// Output "The monkey is curious."
// Output "George is a monkey."

const findTheMonkey2 = {
  id: 2,
  name: "George",
  trait: "curious",
  species: "monkey",
  isReal: true
}

// Output "George"
// Output 2
// Output true
// Output "monkey"
// Output "The monkey is curious."
// Output "George is a monkey."

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
// Output "The monkey is George."
// Output "Peanut is a cat."
// Output "Cleo is friendly."
// output "Rex is a mischievous dog."


console.log(findTheMonkey3[3].name)

console.log(findTheMonkey3[3].id)

console.log(findTheMonkey3[3].isReal)

console.log(findTheMonkey3[3].species)

console.log(`The ${findTheMonkey3[3].species} is curious`)

console.log(`${findTheMonkey3[3].name} is a ${findTheMonkey3[3].species}.`)

console.log(`The ${findTheMonkey3[3].species} is ${findTheMonkey3[3].name}.`)

console.log(`${findTheMonkey3[4].name} is a ${findTheMonkey3[4].species}.`)

console.log(`${findTheMonkey3[1].name} is ${findTheMonkey3[1].trait}.`)

console.log(`${findTheMonkey3[0].name} is a ${findTheMonkey3[0].trait} ${findTheMonkey3[0].species}.`) 