function printAll(strs: string | string[] | null) {
  if (strs) {
    /////
    // Warning -- DO NOT DO THIS
    /////
    //it means it is not null
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

// here "" is falsy value this above logic is not handling it

// in operator in narrowing

interface User {
  name: string;
  email: string;
}

interface Admin extends User {
  isAdmin: boolean;
}

function isAdminAccount(account: User | Admin) {
  if ("isAdmin" in account) {
    return true;
  } else return false;
}

// instanceof

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toLocaleString());
  } else {
    console.log(x.toLocaleUpperCase);
  }
}

// type predicates

type Fish = { swim: () => void };
type Bird = {
  fly: () => void;
};

function isFish(pet: Fish | Bird): pet is Fish {
  //this is the crunch
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    return "fist food";
  } else {
    pet;
    return "bird food";
  }
}

/// exhaustiveness checking

// never type

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;

    case "square":
      return shape.side ** 2;

    ///meant for running never
    default:
      const _defaultforShape: never = shape;
      return _defaultforShape;
  }
}
