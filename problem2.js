// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.
const getBookTitles = (books)=>{
    const titles = books.map(book=> book.title);
    return titles;
}
// const books = [
//     { title: "1984", author: "George Orwell", year: 1949 },
//     { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
//     { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
//   ];
// console.log(getBookTitles(books));