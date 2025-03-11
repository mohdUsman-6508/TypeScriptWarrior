"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let newton = {
    _enrollmentNo: "A10",
    name: "Newton",
    class: 11,
    rollNo: 10,
};
newton.name = "Issac Newton";
// newton._enrollmentNo = "A11";
let totalStudents = [];
function getAdmission(s) {
    totalStudents.push(s);
    return true;
}
getAdmission(newton);
console.log(totalStudents);
let creditCard;
const idArr = [1, 2, 3];
let newIdArr = [...idArr, 3, 4];
