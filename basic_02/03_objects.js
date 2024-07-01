"use strict";
// bad behaviour of ts--> in case of object when we pass an object to a function then we can pass more values to an object
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "osman",
    isPaid: false,
    isMarried: false,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
    return {};
}
// createUser({
//   name: "osman",
//   isPaid: false,
//   isMarried: false,
// });  //give error but
createUser(user); // does not give error -- bad behaviour
var setUser = function (name, email) {
    return { name: name, email: email };
};
