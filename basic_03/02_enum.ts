// restrict the choice , or options within the boundary
// put the const before enum , will generate cleaner js code, but have pitfalls as well

const enum size {
  S = 24,
  M,
  L,
  XL = 38,
  XXL,
}
const tshirt = size.M;

enum Seat {
  WINDOW = "window",
  ISLE = "isle",
  MIDDLE = "middle",
  "SIDE UPPER" = "side upper",
  LOWER = "lower",
}

let seatChoice = Seat["SIDE UPPER"];
let anotherChoice = Seat.WINDOW; //more reliable code
console.log(`You first choose ${seatChoice}, second choice ${anotherChoice}`);

export {};
