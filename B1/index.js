// Ex 1
function productinfo(name, price) {
  const realprice = price.toLocaleString("de-DE");
  return "Sản Phẩm: " + name + ", Giá: " + realprice + " VNĐ";
}
console.log(productinfo("Sách", 20000));

// Ex 2
function greet(name) {
  return "Xin chào, " + name + "!";
}
console.log(greet("An"));

// Ex 3
function sum(a) {
  b = 0;
  for (let i = 0; i <= a; i++) {
    b += i;
  }
  return b;
}
console.log(sum(5));

// Ex 4
function square(n) {
  return n * n;
}
console.log(square(6));

// Ex 5
function isEven(n) {
  return n % 2 === 0;
}
console.log(isEven(7));

// Ex 6
function firstelement(arr) {
  return arr[0];
}
console.log(firstelement([1, 2, 3, 4, 5]));

// Ex 7
function sumarr(...arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total
}
console.log(sumarr(1, 2, 3, 4));

// Ex 8

// Ex 9

// Ex 10
function stringlength(str) {
  return str.length;
}
console.log(stringlength("Hello World"));

// Ex 11
function touppercase(str) {
  return str.toUpperCase();
}
console.log(touppercase("javascript"));

// Ex 12
function formatcurrency(amount) {
  return amount.toLocaleString("de-De") + " VNĐ";
}
console.log(formatcurrency(1000000));

// Ex 13
function max(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Ex 14
function isprime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Ex 15
function repeatstring(str, times) {
  let result = "";
  for (let i = 0; i < times; i++) {
    result += str;
    result += " ";
  }
  return result;
}
console.log(repeatstring("Hello", 3));

// Ex 16 
// em chua xong a...