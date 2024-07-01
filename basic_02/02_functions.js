// A better way to write a function
function sayHello(name) {
    console.log("Hello! ".concat(name));
}
function add(x, y) {
    var sum = x + y;
    return sum;
}
var sum = add(1, 1);
var sayGoodBye = function (name) {
    console.log("GoodBye ".concat(name));
    return; // returning nothing
};
sayGoodBye("Osman");
var throwError = function (error) {
    throw error;
};
