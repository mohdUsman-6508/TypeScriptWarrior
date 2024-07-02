"use strict";
//
// Generics, that is, being able to create a component that can work over a variety of types rather than a single one.
// This allows users to consume these components and use their own types.
//without generics
const id = [];
let names = [];
function identity1(val) {
    return "";
}
// let's say if we want to pass the number in identity1 then we cannot, or we have to define our function other way
function identity2(val) {
    return val;
}
// so much type checking, not flexible
function identity3(val) {
    return val;
}
let a = identity3(true);
// another short way
function identity4(val) {
    return val;
}
let s1 = identity4({ name: "abc", id: 2 });
