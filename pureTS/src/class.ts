// classes
// access modifiers-- private, public
// here city is private and can only be access within the class

class User {
  private _courseCount = 1;
  protected _permanentAddress = "Baker street,London";
  email: string;
  name: string;
  private readonly city: string = "Hyderabad";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }

  private deleteToken() {
    console.log("Token deleted!");
  }

  get getDetails(): string {
    return `You can contact ${this.name} at his email: ${this.email} .`;
  }

  get courseCount(): number {
    return this._courseCount;
  }
  // set accessor cannot have a return type

  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("course count should be more than 1");
    }

    this._courseCount = courseNum;
  }
}

const batman = new User("bat@man.com", "batman");

// shortcut way of defining a class using modifier
class Student {
  readonly university: string = "MIT";
  constructor(public id: number, public name: string) {}
}

//getters and setters
// getters can be use to access private or public properties of the class with additional logic or restrictions
// setters allows to set properties which are not directly accessible

console.log(batman.getDetails);
batman.courseCount;

// protected -- can access wihtin the class as well as in the class which inherit parent class
class SubUser extends User {
  isFamily: boolean = true;
  changeAddress() {
    this._permanentAddress = "Royal Street, London";
  }
}
