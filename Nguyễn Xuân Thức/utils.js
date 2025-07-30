const productInfo = (a,b) => {
    return `"San pham: ${a}, Gia: ${b.toLocaleString()} VND"`;
}

const greet = a =>{
     return `"Xin chao, ${a}!"`
}

const sumUpTo = n =>{
    let sum = 0;
    for(let i = 1 ; i <= n ; i++){
        sum += i;
    }
    return sum
}

const square = n => {
    return n * n ;
}

const isEven = n => {
    if (Number.isNaN(n)) {
        return `${n} khong phai la so!`;
    }
    else if (n % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

export default {
    productInfo,
    greet,
    sumUpTo,
    square,
    isEven
};