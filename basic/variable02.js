"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let greeting = "Marhaba! Osman";
console.log(greeting);
greeting.toLowerCase();
//number
let scoreA = 10; /// it is obvious so we can drop the :number (do not overuse TS);
let scoreB = 20; // type inference
let ans = scoreA + scoreB;
console.log(ans);
//
let name;
let age;
(name = "Osman"), (age = 10);
console.log(`${name} is ${age} years old.`);
// type inference: TS is smart enough ,in case if you are doing immediate assigment
let id = 1;
// not possible id="abc"
// number-- every thing is number
// primitive types--> string, number, boolean
let isOk = true;
let isEligible;
