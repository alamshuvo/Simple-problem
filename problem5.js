// -Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

// const updateAgeByName = (people, name, newAge) => {
//     const person = people.find(person=>person.name === name);
//     if(person){
//         person.age = newAge;
//     }
//     return people;
// }

// const people = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Carol", age: 22 },
//   ];
//   const updatedPeople = updateAgeByName(people, "Bob", 45);
// console.log(updatedPeople);

// Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array. 

const UpdateAgeByName =(people, name, newAge) => {
    const person =people.find(person =>person.name.toLowerCase() === name.toLowerCase());
    if (!person) {
        console.log(`Person with name ${name} not found.`);
        return;  
    }
    person.age = newAge
    console.log(people);
}

const people = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 22 },
    { name: 'Alice', age: 30 } ];
UpdateAgeByName(people,'john',555) 
// some code added some code added 