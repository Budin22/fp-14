'use strict';

let num = +prompt('Введите число')
let result = true;

if (num <= 1) {
    result = false;
} else {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            result = false;
            break;
        }
    }
}
console.log(result);