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
/// array
let s1 = identity4({ name: "abc", id: 2 });
function getProducts(products) {
    //do some db op
    return products[1];
}
const getMoreProducts = (products) => {
    //do some more db op
    const myidx = 2;
    return products[myidx];
};
// U DB type ka he hoga
function anotherFunction(val1, val2) {
    return {
        val1,
        val2,
    };
}
anotherFunction(2, { connection: "", dbname: "", password: "" });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
