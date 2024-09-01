let a = 10,
  b = 5;
let r1 = (a += b);
let r2 = (a -= b);
let r3 = (a *= b);
let r4 = (a %= b);

console.log(r1);
console.log(r2);
console.log(r3);
console.log(r4);

let x = 10;
let y = 10;
x = 10 + y;
console.log(x);
x += 5;
console.log(x);
x -= 5;
console.log(x);
x *= 5;
console.log(x);
x **= y;
console.log(x);
x /= 5;
console.log(x);
x %= 5;
console.log(x);
