// Bài 1: In ra chuỗi sử dụng Template Literals, kết hợp Function như sau:
const productInfo = (name, price) => {
  return console.log(`Sản phẩm: ${name}, Giá: ${price} VNĐ`)
}

export { productInfo };

//  Bài 2: Viết hàm chào người dùng theo tên
const greet = (name) => {
  return alert(`Xin chào, ${name}`)
}
export { greet };


// Bài 3: Tính tổng các số từ 1 đến n
const sumUpTo = (number) => {
  if (number == 1) { return 1; }
  else { return sumUpTo(number - 1) + number }
}
export { sumUpTo };

// Bài 4; Tính bình phương một số
const square = (number) => {
  return number ** 2
}
export { square };

// Bài 5: Kiểm tra số chẵn hay lẻ
const isEven = (number) => {
  if (isNaN(number)) { alert("Nhập số đi") }
  else {
    if (number % 2 == 0) { alert("Số chắn") }
    else { alert("Số lẻ") }
  }
}
export { isEven };

// Bài 6: Viết hàm trả về phần tử đầu tiên của mảng
const firstElement = (array) => {
  return console.log(array[0]);
}
export { firstElement };

// Bài 7: Sử dụng Rest Operator để tính tổng
const sum = (...args) => {
  let total = 0;
  for (let index = 0; index < args.length; index++) {
    total += args[index];
  }
  return console.log(total);
}
export { sum };

// Bài 8: Tách giá trị từ đối tượng
const extractObject = (object) => {
  return `Name: ${object.name} , Age: ${object.age} `
}
export { extractObject };

// Bài 9: In ra danh sách tên từ mảng đối tượng
const extractArrayObject = (ArrayObject) => {
  let holder = '';
  for (let i = 0; i < ArrayObject.length; i++) {
    if (i == ArrayObject.length - 1) { holder += ArrayObject[i].name; }
    else { holder += ArrayObject[i].name + ', ' }
  }
  return console.log(holder)
}
export { extractArrayObject };

// Bài 10: Tính độ dài chuỗi

const stringLength = (array) => {
  return console.log(array.length)
}
export { stringLength };

// Bài 11: Chuyển đổi chuỗi thành chữ hoa
const toUpperCase = (string) => {
  return string.toUpperCase();
}
export { toUpperCase };

// Bài 12: Chuyển đổi số sang dạng tiền tệ

const formatCurrency = (number) => {
  let VND = new Intl.NumberFormat('en-VN', {
    style: 'currency',
    currency: 'VND',
  });

  return VND.format(number);
}
export { formatCurrency };


// Bài 13: Tính giá trị lớn nhất trong mảng
const max = (array) => {
  let Highest = array[0];
  for (let index = 0; index < array.length; index++) {
    if (array[index] > Highest) {
      Highest = array[index];
    }
  }
  return Highest
}
export { max };

// Bài 14: Viết hàm kiểm tra số nguyên tố

const isPrime = (number) => {
  let dem = 0;
  for (let index = 0; index <= number / 2; index++) {
    if (number % index === 0) {
      dem += 1
    }
  }
  if (dem > 1) {
    console.log(`${number} ko là số nguyên tố`)
  } else {
    console.log(`${number} là số nguyên tố`)
  }
}
export { isPrime };

// Bài 15: In ra chuỗi n lần

const repeatString = (text, times) => {
  let holder = "";
  for (let index = 0; index < times; index++) {
    holder += `${text} `
  }
  return holder;
}
export { repeatString };
// Bài 16. Tính tổng số lẻ trong mảng
const sumOdd = (array) => {
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 != 0) {
      sum += array[index];
    }
  }
  return sum;
}
export { sumOdd };
// Bài 17. Tính tổng các số lớn hơn n
const sumGreaterThan = (array, n) => {
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] > n) {
      sum += array[index];
    }
  }
  return sum;
}
export { sumGreaterThan };
// Bài 18. Chuyển đổi ngày từ dạng YYYY-MM-DD sang DD/MM/YYYY
const formatDate = (date) => {
  return date.split('-').reverse().join('-')
}
export { formatDate };
// Bài 19. Lấy 3 phần tử đầu tiên trong mảng
const firstThree = (array) => {
  if (array.length >= 3) {
    return [array[0], array[1], array[2]]
  }
}
export { firstThree };
// Bài 20: Kiểm tra xem chuỗi có chứa ký tự cụ thể hay không
const containsChar = (string, letter) => string.includes(letter);

export { containsChar };
// Bài 21: Gộp hai mảng thành một
const mergeArrays = (array1, array2) => array1.concat(array2);
export { mergeArrays };
// Bài 22: Đếm số lần xuất hiện của một phần tử trong mảng
const countOccurrences = (array1, n) => {
  const result = array1.filter((number) => { return number == n });
  return result.length
}
export { countOccurrences };
// Bài 23: Lọc các số lẻ từ mảng
const filterOdd = (array1) => {
  const result = array1.filter((number) => { return number % 2 != 0 });
  return result
}
export { filterOdd };
// Bài 24: Tìm các số lớn hơn một giá trị cho trước
const greaterThan = (array1, n) => {
  const result = array1.filter((number) => { return number > n });
  return result
}
export { greaterThan };
// Bài 25: Tính giai thừa của một số
const factorial = (n) => {
  if (n == 1) return 1;
  else return factorial(n - 1) * n;
}
export { factorial };
// Bài 26: Tách riêng số chẵn và số lẻ trong mảng
const separateEvenOdd = (array) => {
  const resultOdd = array.filter((number) => { return number % 2 != 0 });
  const resultEven = array.filter((number) => { return number % 2 == 0 });
  return { 'even': resultEven, 'odd': resultOdd }
}
export { separateEvenOdd };
// Bài 27:  Sắp xếp mảng tăng dần
const sortAsc = (array) => {
  let so;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        so = array[i];
        array[i] = array[j];
        array[j] = so;
      }
    }
  }
  return array;
}
export { sortAsc };

// Bài 28: Tính tổng các số ở vị trí chẵn trong mảng
const sumEvenIndex = (array) => {
  let sum = 0;
  for (let index = 0; index < array.length; index = index + 2) {
    sum += array[index];

  }
  return sum;
}
export { sumEvenIndex };
// Bài 29: Tạo một mảng các số nhân với 2
const multiplyByTwo = (array) => {
  return array.map((number) => { return number * 2 });
}
export { multiplyByTwo };
// Bài 30: Tạo một mảng các số nhân với 2
const arrayToString = (array) => {
  return array.join('')
}
export { arrayToString };