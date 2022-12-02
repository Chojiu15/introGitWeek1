// Iteration #1: Find the maximum
// Implement the function maxOfTwoNumbers that takes two numbers as arguments and returns the bigger number.

const maxOfTwoNumbers = (a, b) => {
  return a > b ? a : b;
};

// function maxOfTwoNumbers(a, b){
//     return a > b ? a : b
// }

console.log(maxOfTwoNumbers(10, 11));

// Iteration #2: Find the longest word
// Implement the function findLongestWord that takes as an argument an array of words and returns the longest one. If there are 2 with the same length, it should return the first occurrence.

// You can use the following array to test your solution:



// const findLongestWord = (words) =>{
//     if(!words.length) return null
//     let longestWord= ''
//     for(let i = 0; i < words.length; i++){
//         if(words[i].length > longestWord.length ){
//             longestWord = words[i]
//         }
//     }
//     return longestWord
// }
// console.log(findLongestWord(words))
const words = [
    "mystery",
    "brother",
    "aviator",
    "crocodile",
    "pearl",
    "orchard",
    "crackpot",
  ];

const findLongestWord = (words) => {
    if(!words.length) return null
    let longestWord = ''
    for(element of words){
        if(element.length > longestWord.length ){
            longestWord = element
           
        }
    }
    return longestWord
};

// Iteration #3.1: Sum numbers

// Calculating a sum can be as simple as iterating over an array and adding each of the elements together.

// Implement the function named sumNumbers that takes an array of numbers as an argument, and returns the sum of all of the numbers in the array. Later in the course we will learn how to do this by using the reduce array method, which will make your work significantly easier. For now, let's practice "declarative" way adding values, using loops.

// You can use the following array to test your solution:
// const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// const sumNumbers = numbers => {
//         let sum = 0
//         for(let i = 0; i < numbers.length; i++){
//             sum += numbers[i]
//         }
//         return sum
    
// }

// console.log(sumNumbers(numbers))

// In the iteration 3, you created a function that returns the sum of an array of numbers. But what if we wanted to know how much is the sum of the length of all of the words in an array? What if we wanted to add boolean values to the mix? We wouldn't be able to use the same function as above, or better saying, we would have to tweak it a little bit so that it can be reused no matter what is in the array that is passed as argument when function sumNumbers() is called.

// Here we are applying a concept we call polymorphism, that is, dealing with a functions' input independently of the types they are passed as.

// Let's implement the function sum() that calculates the sum for array filled with (almost) any type of data. Note that strings should have their length added to the total, and boolean values should be coerced into their corresponding numeric values. Check the tests for more details.

// You can use the following array to test your solution:


// const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];


// const sumMixArray = (arr) =>{
//     let sum = 0
    
//     for(let i = 0; i < arr.length; i++){
//         if(typeof arr[i] == )
//         if(typeof arr[i] === 'string'){
//             sum += arr[i].length
//         }
//         else if(typeof arr[i] === 'number'){
//             sum += arr[i]
//         }
//         // else if(typeof arr[i] === 'boolean'){
//         //     arr[i] ? sum += 1 : sum += 0
//         // }
//         else {
           
//         }
//     }
//     return sum
// }
// console.log(sumMixArray(mixedArr))

// // should return: 57


// Return a new array which contains the sum of each element on the 2 arrays
// nested loops
const arr1 = [1, 4, 5, 7, 18, 554, 21]
const arr2 = [21, 45, 821, 15, 87, 11]

// array3 = []
// for(let i = 0; i < array1.length; i++){
    
// }
// array3 = [25, 49, 828, 33, 641, 32]
// const arr3 = []
// for(let i = 0; i< arr1.length;i++){
//     if(!arr1[i]) {
//          arr1[i] = 0
//     }
//     else if(!arr2[i]) {
//         arr2[i] = 0
//    }
//     arr3.push(arr1[i]+ arr2[i])
// }
// console.log(arr3)

// const sumArr = (arr1, arr2) => {
//     const arr3 = []
//     if(arr1.length < arr2.length){
//         let j = arr2.length
//     }
//     else{
//         let j = arr1.length
//     }
//     for(let i = 0; i< j ;i++) {
//         arr3.push((arr1[i] || 0) + (arr2[i] || 0))
//     }
//     return arr3
// }


// let studentsData = [['Jack', 24], ['Sara', 23],];
// for(element of studentsData){
//     for(element2 of element){
//         console.log(element2)
//     }
// }