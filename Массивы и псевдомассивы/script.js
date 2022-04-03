"use strict";

const arr = [16, 2, 33, 6, 8];

arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

arr.pop();
arr.push(10);

console.log(arr);

for (let i =0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
} 
arr[99] = 0;
console.log(arr.length);
console.log(arr);

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри масиива ${arr}`);
});

const str = prompt("", "");
const products = str.split(", ");
console.log(products);
products.sort();
console.log(products.join(';'));