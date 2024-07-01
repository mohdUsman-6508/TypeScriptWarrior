let id: number[] = [];
let name: Array<string> = [];

id.push(1, 2, 3);
name.push("a", "b", "c");

type Employee = {
  readonly id: string;
  name: string;
  stack: string;
  salary?: number;
};

let employees: Employee[] = [];

employees.push({
  id: "1A",
  name: "Tesla",
  stack: "Science",
});

let picture: number[][] = [];

let picture1 = [233, 202, 200];
picture.push(picture1);
export {};
