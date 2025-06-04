// -Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.
const sumEvenNumbers = (numbers) => {
  const sum = numbers.reduce((accumulator, current) => {
    if (current % 2 === 0) {
      return accumulator + current;
    }
    return accumulator;
  }, 0);
  return sum;
};
// const num = [1,2,2,5,6,3,8]
//  console.log(sumEvenNumbers(num));
