"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function coordinate(pt) {
    return { x: 2, y: 4 };
}
coordinate({ x: 5, y: 9 });
const createUser = (user) => {
    return { id: user.id, name: user.name, email: user.email };
};
createUser({ name: "osman", email: "abc@mail.com", id: 10 });
let p = {
    x: 2,
    y: 3,
    z: 0,
};
function getPosition(position) {
    return `Aim at x:${position.x}, y:${position.y}, z:${position.z}`;
}
console.log(getPosition(p));
