// Bai 1
const sumArray = (arr) => {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index]
  }
  return sum;
}
export { sumArray }
// Bai 2
const countOccurrences = (arr, value) => {
  let dem = 0;
  for (let index = 0; index < arr.length; index++) {
    if (value === arr[index]) {
      dem++
    }
  }
  return dem;
}
export { countOccurrences }
// Bai 3
const removeDuplicates = (arr) => {
  let myArray = [];
  for (let index = 0; index < arr.length; index++) {
    if (!myArray.find((value) => { return value == arr[index] })) {
      myArray.push(arr[index]);
    }
  }
  return myArray;
}
export { removeDuplicates }
// Bai 4
const flattenArray = (arr) => {
  let myArray = [...arr[0]];
  for (let index = 1; index < arr.length; index++) {
    myArray = myArray.concat(arr[index]);
  }
  return myArray;
}
export { flattenArray }
// Bai 5
const isSymmetric = (arr) => {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    if (arr[start] === arr[end]) {
      start++;
      end--;
    }
    else { console.log(false); break; }
    if (start >= end) {
      console.log(true);
    }
  }

}
export { isSymmetric }
// Bai 6
const findSecondLargest = (arr) => {
  let max = arr[0];
  let second = -Infinity;
  for (let index = 1; index < arr.length; index++) {
    if (arr[index] > max) {
      second = max;
      max = arr[index];
    } else if (arr[index] < max && arr[index] > second) {
      second = arr[index];
    }
  }
  return second;
}
export { findSecondLargest }
// Bai 7
const sortProductsByPrice = (products) => {
  let myArray = [];
  let result = [];
  for (let index = 0; index < products.length; index++) {
    myArray.push(products[index].price)
  }
  let sortArray = myArray.sort();

  for (let index = 0; index < sortArray.length; index++) {
    for (let j = 0; j < products.length; j++) {
      if (sortArray[index] == products[j].price) {
        result.push(products[j]);
        products.splice(j, 1);
      }
    }

  }
  return result;
}
export { sortProductsByPrice }
// Bai 9
// arr = [
//     { type: 'fruit', name: 'apple' },
//     { type: 'vegetable', name: 'carrot' },
//     { type: 'fruit', name: 'banana' }
// ];

const groupByType = (arr) => {
  return arr.reduce((accumulator, obj) => {
    if (!accumulator[obj.type]) {
      accumulator[obj.type] = [];
    }
    accumulator[obj.type].push(obj.name)
    return accumulator;
  }, {})
}
export { groupByType }

// // Bai 12
// obj1 = { a: 10, b: 20 };
// obj2 = { b: 30, c: 40 };

const mergeObjectsSumValues = (obj1, obj2) => {
  let myArray = [];
  myArray.push(obj1);
  myArray.push(obj2);
  return myArray.reduce((accumulator, obj) => {
    for (let key in obj) {
      if (!accumulator[key]) {
        accumulator[key] = 0;
      }
      accumulator[key] += obj[key];
    }
    return accumulator;
  }, {})
}
export { mergeObjectsSumValues }