/*

Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
const library = [
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games',
       readingStatus: false
   }
];

*/

const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

console.log(" --- 1. Display the reading status of the following books ---");

// Solution 1: Using forEach() method

library.forEach((book) => {
  console.log(
    `Book: ${book.title}, Author: ${book.author}, Reading Status: ${
      book.readingStatus ? "Already read" : "Not read yet"
    }`
  );
});

// Solution 2: Using for loop

for (let i = 0; i < library.length; i++) {
  console.log(
    `Book: ${library[i].title}, Author: ${library[i].author}, Reading Status: ${
      library[i].readingStatus ? "Already read" : "Not read yet"
    }`
  );
}

// Solution 3: Using for...of loop

for(const book of library) {
  console.log(
    `Book: ${book.title}, Author: ${book.author}, Reading Status: ${
      book.readingStatus ? "Already read" : "Not read yet"
    }`
  );
}