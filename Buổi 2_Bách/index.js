import { sumArray, removeDuplicates, flattenArray, isSymmetric, sortProductsByPrice, groupByType, mergeObjectsSumValues } from './utils.js'
// // Bai 1
// console.log(sumArray([1, 2, 3, 4]))
// // Bai 3
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 6, 2, 3, 6]))
// // Bai 4
// console.log(flattenArray([[1, 2], [3, 4]]))
// // Bai 5
// isSymmetric([1, 2, 3, 4, 5, 2, 1])
// // Bai 7
// console.log(sortProductsByPrice([
//   { name: 'Product A', price: 30 },
//   { name: 'Product B', price: 20 },
//   { name: 'Product C', price: 50 }
// ]
// ));
// // Bai 7
// console.log(groupByType([
//   { type: 'fruit', name: 'apple' },
//   { type: 'vegetable', name: 'carrot' },
//   { type: 'fruit', name: 'banana' }
// ]
// ));
// Bai 12
console.log(mergeObjectsSumValues({ a: 10, b: 20 }, { b: 30, c: 40 }));