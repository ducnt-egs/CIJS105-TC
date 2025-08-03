const productInfo = (a, b) => {
  return `"San pham: ${a}, Gia: ${b.toLocaleString()} VND"`;
};

const greet = (a) => {
  return `"Xin chao, ${a}!"`;
};

const sumUpTo = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

const square = (n) => {
  return n * n;
};

const isEven = (n) => {
  if (Number.isNaN(n)) {
    return `${n} khong phai la so!`;
  } else if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
};


export const removeDuplicates = (arr) => {
    const res = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (!res.includes(arr[i])){
        res.push(arr[i]);
      }
    }
    return res;
};

export const firstElement = arr => {
  let [firstElement, ...rest] = arr;
  return firstElement;
}

// b7
export const sum = (...arr1) => {
  let sum = 0;
  for (let i = 0 ; i < arr1.length; i++) {
    sum += arr1[i];
  }
  return sum;
}
//  b8
export const users = user => {
  return `Name: ${user.name}, Age: ${user.age}`;
}
// b9

export const namePeople = arr => {
  return arr.map(item => {
    return `"${item.name}"`
  })
}

// b10
export const stringLength = str => {
  if (typeof str !== 'string') {
    return 'Input khong la chuoi!';
  }
  return `Do dai cua chuoi: ${str.length}`;
}
//  b11
export const toUpperCase  = str => {
  if( typeof str !== 'string'){
    return 'Input khong la chuoi!';
  } else {
    return str.toUpperCase();
  }
}

// b13
export const valueMax = arr => {
  if ( !Array.isArray(arr) || arr.length ===0){
    return `Input khong phai la mang hoac mang rong!`;
  }
  let max = arr[0];
  for (let i = 1; i < arr.length ; i++){
    if( arr[i] > max){
      max = arr[i];
    }
  }
  return max;
}

// b14
export const isPrime = n => {
  if(Number.isNaN(n) || n < 2){
    return `${n} khong phai la so nguyen to!`;
  }
  else {
    for (let i = 2; i <=  Math.sqrt(n) ; i++){
      if (n % i === 0){
        return false;
      }
    }
    return true;
  }
}

// b15
export const repeatString = (str,n) =>{
  if (typeof str !== 'string' || typeof n !== 'number' || n < 0) {
    return 'Input khong hop le!';
  }
  else {
    let result = '';
    for ( let i = 0 ; i < n ; i++){
      result += str;
      if( i < n -1 ){
        result += ' ';
      }
    }
    console.log(result);

    return result;
    
  }
}

// b16
export const sumOld = arr => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 !== 0 ){
      sum += arr[i];
    }
  }
  return sum;
}

// b17
export const sumGreaterThan = (arr, n) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return 'Input khong phai la mang hoac mang rong!';
  }
  let sum = 0;
  arr.map(item => {
    if (item > n) {
      sum += item;
    }
  });
  return sum;
}
// b18
export const formatDate = date => {
  if (typeof date !== 'string'){
    return 'Input khong phai la chuoi!';
  }
  else {
    return date.split('-').reverse().join('/');
  }
}
// b19
export const firstThree = arr => {
  if (!Array.isArray(arr) || arr.length < 3) {
    return 'Input khong phai la mang hoac mang co it nhat 3 phan tu!';
  }
  else{
    return arr.slice(0, 3); 
  }
}
// b20
export const containsChar = (str, character) => {
  if (typeof str !== 'string' || typeof character !== 'string') {
    return 'Input khong phai la chuoi!';
  }
  else{
    return str.includes(character);
  }
}



export default {
  productInfo,
  greet,
  sumUpTo,
  square,
  isEven,
};
