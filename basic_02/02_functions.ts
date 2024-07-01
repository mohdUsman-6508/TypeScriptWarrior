// A better way to write a function

function sayHello(name: string): void {
  console.log(`Hello! ${name}`);
}

function add(x: number, y: number): number {
  let sum = x + y;
  return sum;
}

let sum = add(1, 1);

const sayGoodBye = (name: string): void => {
  console.log(`GoodBye ${name}`);
  return; // returning nothing
};

sayGoodBye("Osman");

const throwError = (error: string): never => {
  throw error;
};
