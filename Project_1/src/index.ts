class Student {
  id: number;
  name: string;
  standard: string;
  private address: string = "Hyderabad";
  readonly city: string = "Hyderabad";

  constructor(id: number, name: string, standard: string) {
    this.id = id;
    this.name = name;
    this.standard = standard;
  }

  intro() {
    console.log(
      `Hello my name is ${this.name} and I study in ${this.standard}`
    );
  }

  private marks(): number {
    return 100;
  }

  get getCity(): string {
    return `Welcome to ${this.city}`;
  }

  get getAddress(): string {
    return this.address;
  }

  //it cannot have a return type
  set setAddress(address: string) {
    if (address == "") throw new Error("Address cannot be empty");
    this.address = address;
  }
}

let s1 = new Student(1, "Issac Newton", "B.tech");
s1.intro();
console.log(s1.getCity);
console.log(s1.getAddress);
s1.setAddress = "Mumbai";
console.log(s1.getAddress);

class Teacher {
  readonly school: string = "MIT";
  constructor(
    public id: string,
    public name: string,
    private address: string
  ) {}
}
