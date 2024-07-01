"use strict";
// in the situation when you are not 100 percent sure about the type, have dilemma then use union types
Object.defineProperty(exports, "__esModule", { value: true });
var bruce;
bruce = { name: "bruce", city: "gotham" };
bruce = { name: "batman", power: "money" };
function convertKmtom(value) {
    if (typeof value == "number")
        return 1000 * value;
    return "";
}
var price = [];
price = ["1", "10", 20];
