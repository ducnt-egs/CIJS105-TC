export const sumArray = arr => {
    if ( !Array.isArray(arr) || arr.length === 0) {
        console.log("Input khong phai la mang hoac mang rong");
    }
    let sum = 0;
    arr.forEach(e => {
        sum += e;
    });
    return sum;
}
// b2 Viết hàm countOccurrences(arr, value) đếm số lần xuất hiện của value trong mảng arr
export const countOccurrences = (arr, value) => {
    if (!Array.isArray(arr) || !Number.isNaN(value)){
        console.log("Input khong phai la mang hoac gia tri k phai la so");
    }
    let count = 0;
    arr.forEach(e => {
        if (e === value) {
            count++;
        }
    });
    return count;
}
// b3 Viết hàm removeDuplicates(arr) trả về mảng không có phần tử trùng lặp.
export const removeDuplicates = arr => {
    if (!Array.isArray(arr)){
        console.log("Input khong phai la mang");
    }
    else{
        let uniqueArray = [];
        arr.map(e => {
            if (!uniqueArray.includes(e)) {
                uniqueArray.push(e);
            }
        })
        return uniqueArray;
    }
}
// b4 Viết hàm flattenArray(arr) chuyển một mảng gồm các phần tử mảng 2D (2 chiều) thành mảng 1D (1 chiều)
export const flattenArray = (arr1, arr2) => {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        console.log("Input khong phai la mang");
    }
    let newArray = [...arr1, ...arr2];
    return newArray;
}