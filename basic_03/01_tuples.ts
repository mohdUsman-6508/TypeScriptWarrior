// in tuples besides type, order in which types are written also important

let student: [number, string];
student = [1, "thor"];

type User = [number, string];

let rgb: [number, number, number] = [233, 255, 112];

let u1: User = [3, "loki"];
// u1.push("o");
// console.log(u1);
// it is not guaranteed that you cannot push the other datatype before
// but now it gives warning

type Roohafza = [string, string, number];

let drink: Roohafza = ["Lemon-water", "rooh-afza-water", 1000];
// drink.push("a"); bad behavior
console.log(drink);

export {};
