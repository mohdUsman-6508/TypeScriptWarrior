type Student = {
  readonly _enrollmentNo: string;
  rollNo: number;
  name: string;
  class: number;
  favouriteSubject?: string;
};

let newton: Student = {
  _enrollmentNo: "A10",
  name: "Newton",
  class: 11,
  rollNo: 10,
};

newton.name = "Issac Newton";
// newton._enrollmentNo = "A11";

let totalStudents: Student[] = [];

function getAdmission(s: Student): boolean {
  totalStudents.push(s);
  return true;
}

getAdmission(newton);
console.log(totalStudents);

//
type cardNumber = { cardNumber: number };
type cardType = { type: string };

type Card = cardNumber &
  cardType & {
    cvv: number;
  };

let creditCard: Card;

export {};
