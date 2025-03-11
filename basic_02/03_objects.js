"use strict";
// bad behaviour of ts--> in case of object when we pass an object to a function then we can pass more values to an object
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    name: "osman",
    isPaid: false,
    isMarried: false,
};
function createUser({ name: string, isPaid: boolean }) {
    return {};
}
// createUser({
//   name: "osman",
//   isPaid: false,
//   isMarried: false,
// });  //give error but
createUser(user); // does not give error -- bad behaviour
const setUser = (name, email) => {
    return { name, email };
};
