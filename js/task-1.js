function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}
console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));

// const age = 16;
// const isAdult = age >= 18;
// console.log(isAdult);

// const correctPassword = 'jqueryismyjam';
// const userPassword = 'mangodab3st';
// const isValid = correctPassword === userPassword;
// console.log(isValid);

// console.log(Number(undefined));
// console.log(Number('10'));
// console.log(Number('25px'));
// console.log(10 > '5');

// console.log(Number.parseInt('12q74we'));
// console.log(Number.parseFloat('12.46qwe79'));

// const value = '24.5px';
// const numerical = Number.parseFloat(value);
// console.log(numerical);

// function sayHi() {
//   console.log('Hello, this is my first function!');
// }
// sayHi();

// function multiply(x, y, z) {
//   console.log(`Result: ${x / y - z}`);
// }
// multiply(18, 32, 42);

// function multip(x, y, z) {
//   return x / y / z;
// }
// const result = multip(27, 3, 9);
// console.log(result);

// function add(a, b, c) {
//   return a + b + c;
// }
// console.log(add(10, 10, 2));
