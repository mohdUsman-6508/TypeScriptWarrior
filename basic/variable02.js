"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greeting = "Marhaba! Osman";
console.log(greeting);
greeting.toLowerCase();
//number
var scoreA = 10; /// it is obvious so we can drop the :number (do not overuse TS);
var scoreB = 20; // type inference
var ans = scoreA + scoreB;
console.log(ans);
//
var name;
var age;
(name = "Osman"), (age = 10);
console.log("".concat(name, " is ").concat(age, " years old."));
// type inference: TS is smart enough ,in case if you are doing immediate assigment
var id = 1;
// not possible id="abc"
// number-- every thing is number
// primitive types--> string, number, boolean
var isOk = true;
var isEligible;
