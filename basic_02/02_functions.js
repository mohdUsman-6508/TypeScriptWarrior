"use strict";
// A better way to write a function
function sayHello(name) {
    console.log(`Hello! ${name}`);
}
function add(x, y) {
    let sum = x + y;
    return sum;
}
let sum = add(1, 1);
const sayGoodBye = (name) => {
    console.log(`GoodBye ${name}`);
    return; // returning nothing
};
sayGoodBye("Osman");
const throwError = (error) => {
    throw error;
};
const infoAboutString = (str) => {
    let len = str.length;
    let vowLen = 0;
    let strs = "aeiou";
    for (let i = 0; i < str.length; i++) {
        if (strs.indexOf(str.charAt(i)) != -1) {
            vowLen += 1;
        }
    }
    return `Your string is of length ${len} and it contains ${vowLen} vowels.`;
};
console.log(infoAboutString("hellooo"));
