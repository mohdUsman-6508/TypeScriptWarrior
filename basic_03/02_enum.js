"use strict";
// restrict the choice , or options within the boundary
// put the const before enum , will generate cleaner js code, but have pitfalls as well
Object.defineProperty(exports, "__esModule", { value: true });
const tshirt = 25 /* size.M */;
var Seat;
(function (Seat) {
    Seat["WINDOW"] = "window";
    Seat["ISLE"] = "isle";
    Seat["MIDDLE"] = "middle";
    Seat["SIDE UPPER"] = "side upper";
    Seat["LOWER"] = "lower";
})(Seat || (Seat = {}));
let seatChoice = Seat["SIDE UPPER"];
let anotherChoice = Seat.WINDOW; //more reliable code
console.log(`You first choose ${seatChoice}, second choice ${anotherChoice}`);
