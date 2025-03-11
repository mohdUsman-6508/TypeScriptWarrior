"use strict";
// in interfaces we can do reopening of it , but in types we cannot
// Reopening
var subType;
(function (subType) {
    subType["Standard"] = "Standard";
    subType["Premium"] = "Premium";
    subType["Super"] = "Super";
})(subType || (subType = {}));
// const newton: User = {
//   id: 1,
//   email: "n@n.com",
//   startTrial: () => "Trial started!",
//   getCoupon: (name: "nn10", off: 10) => 10,
//   subscriptionType: subType.Premium,
//   _courseCount: 0,
//   _permanentAddress: "",
//   name: "",
//   city: "",
//   deleteToken: function (): void {
//     throw new Error("Function not implemented.");
//   },
//   getDetails: "",
//   courseCount: 0,
// };
var Year;
(function (Year) {
    Year[Year["FIRST"] = 1] = "FIRST";
    Year[Year["SECOND"] = 2] = "SECOND";
    Year[Year["THIRD"] = 3] = "THIRD";
    Year[Year["FINAL"] = 4] = "FINAL";
})(Year || (Year = {}));
let issac = {
    _enrolNum: 1,
    facNum: 1,
    course: "B.tech",
    year: Year.FINAL,
    intro: (name) => "hello",
    noOfPatent: 2,
    hasHumanitiesSubject: false,
    university: "MIT",
    id: 0,
    name: "newton",
};
console.log(issac);
