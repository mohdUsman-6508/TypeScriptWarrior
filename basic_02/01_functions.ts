function square(num: number) {
  return num * num;
}

let sq3 = square(3);
//Note: here in function we should define the type of parameter

// let a: string = square(10); wrong
// square("10") gives warning

function user(name: string, email: string, isPaid: boolean) {
  let user1 = { name, email, isPaid };
  return user1;
}

user("osman", "osman@mail.com", true);

// optional parameter

let login = (name: string, email: string, isVarified: boolean = false) => {};
login("osman", "osman@mail.com");

// it will be a good idea if we could define the return type of fn

export {};
