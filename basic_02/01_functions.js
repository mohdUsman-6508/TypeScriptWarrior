"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function square(num) {
    return num * num;
}
var sq3 = square(3);
//Note: here in function we should define the type of parameter
// let a: string = square(10); wrong
// square("10") gives warning
function user(name, email, isPaid) {
    var user1 = { name: name, email: email, isPaid: isPaid };
    return user1;
}
user("osman", "osman@mail.com", true);
var login = function (name, email, isVarified) {
    if (isVarified === void 0) { isVarified = false; }
};
login("osman", "osman@mail.com");
