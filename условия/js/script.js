"use strict";
if (4 == 9) {
    console.log('Ok!');
} else {
console.log('Error!');
}

// const num = 50;
// if (num < 49) {
//     console.log('Error');
// } else if(num >100) {
//     console.log('Много');
// } else {
//     console.log('Ok');
// }

// (num === 50) ? console.log('Ok') :console.log('Error');

const num = 50;

switch (num) {
    case 49:
        console.log('wrong');
        break;
    case 100:
        console.log('wrong');
        break;
    case 50:
        console.log('yes');
        break;
    default:
        console.log('next time');
        break;   
}