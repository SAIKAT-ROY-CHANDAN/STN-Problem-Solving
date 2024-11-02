// 1
const people = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Charlie", age: 35, gender: "male" },
];

function filterMalesAndMapNames(personArray) {
  const males = personArray.filter((person) => {
    return person.gender === "male";
  });

  const maleNames = males.map((person) => person.name);

  return maleNames;
}

// console.log(filterMalesAndMapNames(people));

// 2
const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
];

function getBookTitles(bookArray) {
  const titles = [];
  for (let i = 0; i < bookArray.length; i++) {
    titles.push(bookArray[i].title);
  }
  return titles;
}

// console.log(getBookTitles(books));

// 3
function square(number) {
  return number * number;
}

function double(number) {
  return number * 2;
}

function addFive(number) {
  return number + 5;
}

function composedFunction(number) {
  const squared = square(number);
  const doubled = double(squared);
  return addFive(doubled);
}

// console.log(composedFunction(4));

// 4
const peoples = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

function updatePersonAge(personArray, personName, newAge) {
  for (let i = 0; i < personArray.length; i++) {
    if (personArray[i].name === personName) {
      personArray[i].age = newAge;
      break;
    }
  }
  return personArray;
}

// console.log(updatePersonAge(people, "Charlie", 10));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

function sumEvenNumbers(numArray) {
  return numArray.reduce((acc, curr) => {
    if (curr % 2 === 0) {
      acc += curr;
    }
    return acc;
  }, 0);
}

console.log(sumEvenNumbers(numbers));
