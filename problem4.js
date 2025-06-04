// -Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.
const sortCarsByYear = (cars)=>{
    const result = cars.sort((a, b) => a.year - b.year);
    return result;
}
// const cars = [
//     { make: "Toyota", model: "Camry", year: 2018 },
//     { make: "Honda", model: "Civic", year: 2015 },
//     { make: "Chevrolet", model: "Impala", year: 2000 },
//     { make: "Ford", model: "Mustang", year: 2020 },
//     { make: "Chevrolet", model: "Impala", year: 2010 },
//   ];
// console.log(sortCarsByYear(cars));