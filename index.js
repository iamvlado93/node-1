const lodash = require('lodash');

// const data1 = [
//     {
//       "age": 3,
//       "name": "Curtis Greene",
//       "email": "curtis.greene@zaj.ca",
//     },
//     {
//       "age": 23,
//       "name": "Nikki Lowe",
//       "email": "nikki.lowe@darwinium.tv",
//     },
//     {
//       "age": 39,
//       "name": "Barr Copeland",
//       "email": "barr.copeland@nipaz.me",
//     },
//   ];
//   const data2 = [
//     {
//       "age": 29,
//       "name": "Calhoun Woodward",
//       "email": "calhoun.woodward@medmex.info",
//     },
//     {
//       "age": 21,
//       "name": "Leta Lee",
//       "email": "leta.lee@qnekt.com",
//     },
//     {
//       "age": 40,
//       "name": "James Dinh",
//       "email": "j.dink@erw.com",
//     }
//   ];
// // Task 1
let index = lodash.findIndex(data1, item => item.age === 23)
console.log(index);

// // Task 2
let concatArr = lodash.concat(data1, data2)
console.log(concatArr);

// // Task 3
let copyArray = lodash.pick(data2[2], 'name', 'email')
console.log(copyArray)

// //Task 4

const oldArray = {
  "age": 29,
  "name": "Calhoun Woodward",
  "email": "calhoun.woodward@medmex.info",
}

const {age, ...newArr} = oldArray;
console.log(newArr);