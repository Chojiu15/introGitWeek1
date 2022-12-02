const inventors = [
    {
      first: "Albert",
      last: "Einstein",
      year: 1879,
      passed: 1955,
      categories: ["man", "physicist"]
    },
    {
      first: "Isaac",
      last: "Newton",
      year: 1643,
      passed: 1727,
      categories: ["man", "mathematician"]
    },
    { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
    {
      first: "Marie",
      last: "Curie",
      year: 1867,
      passed: 1934,
      categories: ["woman", "physicist"]
    },
    { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
    { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
    { first: "Max", last: "Planck", year: 1858, passed: 1947 },
    {
      first: "Katherine",
      last: "Blodgett",
      year: 1898,
      passed: 1979,
      categories: ["woman", "physicist"]
    },
    { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
    { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
    {
      first: "Lise",
      last: "Meitner",
      year: 1878,
      passed: 1968,
      categories: ["woman", "physicist"]
    },
    {
      first: "Hanna",
      last: "Hammarström",
      year: 1829,
      passed: 1909,
      categories: ["woman", "inventor"]
    }
  ];



  






//   const myNewArray = inventors.map(element => element.first)
//   const mySecondArray = myNewArray.filter(element => element.length < 5)
//   const greaterThan1900 = inventors.filter(element => element.passed > 1900 )
//   const allCategories = inventors.filter(element => element.categories)
//   const myNewCategory = allCategories.map(category => category.categories)
//   const lastMap = myNewCategory.map(element =>element.map(e =>console.log(e)) )
//   const
// console.log(lastMap)
//   console.log(myNewCategory.forEach(element => element))


// const array1 = [1, 2, 3, 4, 5, 12, 24];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 5;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator * currentValue,
//   initialValue
// );

// console.log(sumWithInitial);
// // expected output: 10

// const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

// const countedNames = names.reduce((allNames, name) => {
//   console.log(allNames, name)  
//   const currCount = allNames[name] ?? 0;
//   return {
//     ...allNames,
//     [name]: currCount + 1,
//   };
// }, {});
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

// const myArray = ['Hello', 'World', 'Test']
// const myNewArray = ['John', 'Doe', ...myArray]
// console.log(myNewArray)