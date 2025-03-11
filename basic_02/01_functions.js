"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function square(num) {
    return num * num;
}
let sq3 = square(3);
//Note: here in function we should define the type of parameter
// let a: string = square(10); wrong
// square("10") gives warning
function user(name, email, isPaid) {
    let user1 = { name, email, isPaid };
    return user1;
}
user("osman", "osman@mail.com", true);
// optional parameter
let login = (name, email, isVarified = false) => { };
login("osman", "osman@mail.com");
