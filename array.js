



function findUnique(wordsArr) {
  let firstMotUnique = "";
  for (i = 0; i < wordsArr.length; i++) {
    if (wordsArr.filter((elem) => elem === wordsArr[i]).length == 1) {
      return wordsArr[i];
    } else if ((wordsArr.filter((elem) => elem === wordsArr[i]).length = 0)) {
      return null;
    }
  }
}
a = ["foo", "bar", "foo", "baz", "bar", "fizz", "foo"];


// function findUnique(wordsArr){
//     if(!wordsArr.length) return false
//     for(let i = 0; i < wordsArr.length; i++){
//         let word = wordsArr[i]
//         if(wordsArr.indexOf(word) === wordsArr.lastIndexOf(word)){
//             return word
//         }
//     }


// }

// const findUnique = (wordsArr) => {
//     if(!wordsArr.length) return false
//     // for(let i = 0; wordsArr.length; i++){
//     //     wordsArr
//     // }
  
//     return myWord
// }
a = ["foo", "bar", "foo", "baz", "bar", "fizz", "foo"];

const myWord = a.filter((element, index, array) => {
    return array.indexOf(element) = index 
 })

 
console.log(myWord)

// console.log(findUnique(a));

// const ages = [26, 27, 26, 26, 28, 28, 29, 29, 30]
// const uniqueAges = ages.filter((x, i, a) => a.indexOf(x) == i)
// console.log(uniqueAges)



// function getFullName(personObj) {
//     return `${personObj.firstName} ${personObj.lastName}`
//   }


function doesWordExist(wordsArr, word) {
    // your code
  }

//   filter((element, index, array) => { /* … */ })
