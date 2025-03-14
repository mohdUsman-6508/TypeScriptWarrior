function add(a: number, b: number): number {
  return a + b;
}
console.log(add(1, 1));

//type inferrence
let age = 25;
let isStudent = true;

type data = { name: string; age: number };

function logDetails(data: data) {
  console.log(data.name, data.age);
}

function multiply(a: number, b: number): number {
  return a * b;
}

let multiplyArr = (a: number, b: number): number => {
  return a * b;
};

interface User {
  readonly id: number;
  email?: string;
}

let user: User = {
  id: 1,
  email: "abc@mail.com",
};
// user.id = 1;

type Coordinates = {
  x: number;
  y: number;
};

function locateMe(input: Coordinates): string {
  return `Your location is: ${(input.x, input.y)}`;
}

interface Book {
  readonly isbn: string;
  genere?: string;
}

type numStr = number | string;
let mixedArr: numStr[] = [1, "two"];

function printId(id: number | string) {
  console.log(id);
}

let userDetails: [string, number, boolean] = ["User", 1, false];
console.log(userDetails[2]);

enum Direction {
  NORTH = "North",
  SOUTH = "South",
  EAST = "East",
  WEST = "West",
}

enum Seats {
  AISLE,
  WINDOW,
  MIDDLE,
}

interface Car {
  model: string;
  startEngine(): void;
}

class Audi implements Car {
  constructor(public model: string) {}
  startEngine(): void {}
}

type Person = {
  name: string;
  age: number;
};

interface Employee {
  id: number;
  name: string;
  getRole(): string;
}

interface Employee {
  salary: number;
}

class Animal {
  constructor(public id: number) {}

  get getId(): number {
    return this.id;
  }

  protected makeSound(): void {
    console.log("This is my natural sound.");
  }
}

class Dog extends Animal {
  constructor(public id: number, private color: string) {
    super(id);
  }
  makeSound(): void {
    console.log("I am barking");
  }

  get getColor(): string {
    return this.color;
  }
}

class BankAccount {
  constructor(private balance: number) {}

  public deposit(amount: number): number {
    if (amount < 0) throw new Error("Amount cannot be negative");
    return this.balance + amount;
  }

  get getBalance(): number {
    return this.balance;
  }
}

class User {
  constructor(private firstName: string, private lastName: string) {}

  get getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
}

class Shape {
  protected kind: string;
  constructor(kind: string) {
    this.kind = kind;
  }
}

class Circle extends Shape {
  constructor(kind: string, public radius: number) {
    super(kind);
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

abstract class DatabaseConnector {
  abstract connect(): boolean;
}

function identity<T>(arg: T): T {
  return arg;
}

console.log(identity(2));
console.log(identity("Hello"));

const reverse = <T>(arr: T[]): T[] => [...arr].reverse();

class Box<T> {
  constructor(public type: T) {}
}

function padLeft(value: string | number) {
  if (typeof padLeft === "string" && padLeft.length != 0) {
    console.log("Padded value" + padLeft);
  } else {
    console.log(value);
  }
}

interface Dog {
  bark(): void;
}

interface Cat {
  meow(): void;
}

function petNoise(animal: Dog | Cat) {
  if ("meow" in animal) {
    return animal.meow();
  }
  return animal.bark();
}

function isStringArray(arr: any[]): arr is string[] {
  return true;
}

interface Cir {
  kind: "circle";
}

interface Squ {
  kind: "square";
}
interface Tri {
  kind: "triangle";
}

type Sha = Cir | Squ | Tri;

function getName(shape: Sha) {
  switch (shape.kind) {
    case "circle":
      return "circle";
    case "square":
      return "square";
    case "triangle":
      return "triangle";
    default:
      const _ex: never = shape;
      return _ex;
  }
}
