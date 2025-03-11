type Point = {
  x: number;
  y: number;
};

function coordinate(pt: Point): Point {
  return { x: 2, y: 4 };
}

coordinate({ x: 5, y: 9 });

type User = {
  id: number;
  name: string;
  email: string;
};

const createUser = (user: User): User => {
  return { id: user.id, name: user.name, email: user.email };
};

createUser({ name: "osman", email: "abc@mail.com", id: 10 });

type Point3D = {
  x: number;
  y: number;
  z: number;
};

let p: Point3D = {
  x: 2,
  y: 3,
  z: 0,
};

function getPosition(position: Point3D): string {
  return `Aim at x:${position.x}, y:${position.y}, z:${position.z}`;
}

console.log(getPosition(p));

export {};
