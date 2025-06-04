// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const getMaleNames = (peoples) => {
 const remainingPeople = peoples.filter(person => person.gender !== "female").map(person => person.name);
 return remainingPeople;
}

// const people =[
//     { name: "Alice", age: 25, gender: "female" },
//     { name: "Bob", age: 30, gender: "male" },
//     { name: "Carol", age: 22, gender: "female" },
//     { name: "David", age: 35, gender: "male" },
// ]
// console.log(getMaleNames(people));