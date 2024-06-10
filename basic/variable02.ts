let greeting: string = "Marhaba! Osman";
console.log(greeting);

greeting.toLowerCase();

//number

let scoreA: number = 10; /// it is obvious so we can drop the :number (do not overuse TS);
let scoreB = 20; // type inference

let ans: number = scoreA + scoreB;
console.log(ans);

export {};
