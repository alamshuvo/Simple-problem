// -Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.
const removeDuplicates = (numbers)=>{
    const uniqueNumbers = numbers.filter((num,index)=> numbers.indexOf(num) === index);
    return uniqueNumbers;
}
 const num = [1,2,2,5,6,3,8,1,2]
console.log(removeDuplicates(num));
//some comit added 