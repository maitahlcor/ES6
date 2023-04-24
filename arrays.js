const arr = [1, 2, 3, 4, 5, 6];
const doble = arr.map((element) => element * 2);
console.log(doble);
const isPar = arr.filter((number) => number % 2 === 0);
console.log(isPar);
const suma = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(suma);