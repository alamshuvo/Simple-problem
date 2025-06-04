// -Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

const updateAgeByName = (people, name, newAge) => {
    const person = people.find(person=>person.name === name);
    if(person){
        person.age = newAge;
    }
    return people;
}

// const people = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Carol", age: 22 },
//   ];
//   const updatedPeople = updateAgeByName(people, "Bob", 45);
// console.log(updatedPeople);