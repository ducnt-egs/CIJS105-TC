import { sumArray , countOccurrences ,removeDuplicates, flattenArray} from "./utils.js";

const arr1 = [1, 2, 3, 3, 4, 5];
const arr2 = [1, 2, 2, 3, 4, 4, 6, 2, 3, 6]
console.log(sumArray(arr1));
console.log(countOccurrences(arr1, 3));
console.log(removeDuplicates(arr2));
console.log(flattenArray(arr1, arr2));