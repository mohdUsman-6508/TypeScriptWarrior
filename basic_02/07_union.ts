// in the situation when you are not 100 percent sure about the type, have dilemma then use union types

type Man = {
  name: string;
  city: string;
};

type SuperHero = {
  name: string;
  power: string;
};

let bruce: Man | SuperHero;

bruce = { name: "bruce", city: "gotham" };
bruce = { name: "batman", power: "money" };

function convertKmtom(value: number | string): number | string {
  if (typeof value == "number") return 1000 * value;

  return "";
}

let price: (number | string)[] = [];
price = ["1", "10", 20];

let seat: "aisle" | "middle" | "side";
// seat can only among aisle, middle, side

seat = "aisle";

export {};
