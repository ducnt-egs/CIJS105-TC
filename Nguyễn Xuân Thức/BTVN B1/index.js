import utils from './utils.js';
import {removeDuplicates, firstElement , sum, users,
    namePeople , stringLength , toUpperCase, valueMax,
     isPrime , repeatString , sumOld , sumGreaterThan,
    formatDate, firstThree, containsChar} from './utils.js';
const {productInfo, greet, sumUpTo, square, isEven} = utils;

console.log(productInfo("Sach", 20000));
console.log(greet("An"));
console.log(sumUpTo(5));
console.log(square(6));
console.log(isEven(4));

const arr = [1, 2, 2, 3, 4, 4, 6, 2, 3, 6];
console.log(removeDuplicates(arr));

console.log(firstElement(arr));

const arr1 = [1, 2, 3, 4, 7, 9, 8];
console.log(sum(...arr1));

// b8
const dataUsers = {
    name: "Nguyen Van A",
    age: 25
}
console.log(users(dataUsers));
// b9
const people = [{name:"An"}, {name:"Binh"}, {name:"Cuong"}];
console.log(namePeople(people));
// b10
const str = "Hello World";
console.log(stringLength(str));
// b11
const str1 = "dai hoc Thuy Loi";
console.log((toUpperCase(str1)));
// b13
console.log("=====value max=========",valueMax(arr1));
// b14
console.log(isPrime(3));

// b15
repeatString("Hello",5);
// b16
console.log(sumOld(arr1));
// b17
console.log(sumGreaterThan(arr1, 7));
// b18
const date = "2024-11-27";
console.log(formatDate(date));
// b19
console.log(firstThree(arr1));

// b20
const str9 = "dai hoc Thuy Loi";
console.log(containsChar(str9, 'T'));
