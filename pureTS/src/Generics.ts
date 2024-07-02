//
// Generics, that is, being able to create a component that can work over a variety of types rather than a single one.
// This allows users to consume these components and use their own types.

//without generics

const id: Array<number> = [];
let names: Array<string> = [];

function identity1(val: string): string {
  return "";
}

// let's say if we want to pass the number in identity1 then we cannot, or we have to define our function other way

function identity2(val: string | number) {
  return val;
}

// so much type checking, not flexible

function identity3<Type>(val: Type): Type {
  return val;
}

let a = identity3(true);

// another short way

function identity4<T>(val: T): T {
  return val;
}

// we can make our own types or interface and pass to i

interface Student1 {
  name: string;
  id: number;
}

/// array

let s1: Student1 = identity4({ name: "abc", id: 2 });

function getProducts<T>(products: T[]): T {
  //do some db op
  return products[1];
}

const getMoreProducts = <T>(products: T[]): T => {
  //do some more db op
  const myidx = 2;
  return products[myidx];
};

////more on generics

interface DB {
  connection: string;
  dbname: string;
  password: string;
}

// U DB type ka he hoga

function anotherFunction<T, U extends DB>(val1: T, val2: U): object {
  return {
    val1,
    val2,
  };
}

anotherFunction(2, { connection: "", dbname: "", password: "" });

//generics on classes

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  price: number;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}
