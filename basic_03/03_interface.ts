interface User {
  readonly id: number;
  email: string;
  googleId?: string;
  //this make difference from type
  // startTrial:()=>string
  startTrial(): string;
  getCoupon(couponname: string, value: number): number;
}

// in interfaces we can do reopening of it , but in types we cannot
// Reopening

enum subType {
  Standard = "Standard",
  Premium = "Premium",
  Super = "Super",
}

interface User {
  subscriptionType: subType;
}

// inheritents

interface Admin extends User {
  hiddenMovies: boolean;
}

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

enum Year {
  FIRST = 1,
  SECOND,
  THIRD,
  FINAL,
}

interface Student {
  readonly _enrolNum: number;
  facNum: number;
  course: string;
  year: Year;
  isInClub?: boolean;
  intro(name: string): string;
}

interface Student {
  hasHumanitiesSubject: boolean;
}

interface SmartStudent extends Student {
  noOfPatent: number;
}

let issac: SmartStudent = {
  _enrolNum: 1,
  facNum: 1,
  course: "B.tech",
  year: Year.FINAL,
  intro: (name: "newton") => "hello",
  noOfPatent: 2,
  hasHumanitiesSubject: false,
  university: "MIT",
  id: 0,
  name: "newton",
};

console.log(issac);
