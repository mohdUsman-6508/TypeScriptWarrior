"use strict";
function printAll(strs) {
    if (strs) {
        /////
        // Warning -- DO NOT DO THIS
        /////
        //it means it is not null
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return true;
    }
    else
        return false;
}
// instanceof
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toLocaleString());
    }
    else {
        console.log(x.toLocaleUpperCase);
    }
}
function isFish(pet) {
    //this is the crunch
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fist food";
    }
    else {
        pet;
        return "bird food";
    }
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return Math.pow(shape.side, 2);
        ///meant for running never
        default:
            const _defaultforShape = shape;
            return _defaultforShape;
    }
}
