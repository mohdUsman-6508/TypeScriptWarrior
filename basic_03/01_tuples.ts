// in tuples besides type, order in which types are written also important

let student: [number, string];
student = [1, "thor"];

type User = [number, string];

let rgb: [number, number, number] = [233, 255, 112];

let u1: User = [3, "loki"];

// it is not guaranteed that you cannot push the other datatype before
// but now it gives warning

export {};
