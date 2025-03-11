"use strict";
class Student {
    constructor(id, name, standard) {
        this.address = "Hyderabad";
        this.city = "Hyderabad";
        this.id = id;
        this.name = name;
        this.standard = standard;
    }
    intro() {
        console.log(`Hello my name is ${this.name} and I study in ${this.standard}`);
    }
    marks() {
        return 100;
    }
    get getCity() {
        return `Welcome to ${this.city}`;
    }
    get getAddress() {
        return this.address;
    }
    //it cannot have a return type
    set setAddress(address) {
        if (address == "")
            throw new Error("Address cannot be empty");
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
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.school = "MIT";
    }
}
