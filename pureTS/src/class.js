"use strict";
// classes
// access modifiers-- private, public
// here city is private and can only be access within the class
class User {
    constructor(email, name) {
        this._courseCount = 1;
        this._permanentAddress = "Baker street,London";
        this.city = "Hyderabad";
        this.email = email;
        this.name = name;
    }
    deleteToken() {
        console.log("Token deleted!");
    }
    get getDetails() {
        return `You can contact ${this.name} at his email: ${this.email} .`;
    }
    get courseCount() {
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
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.university = "MIT";
    }
}
//getters and setters
// getters can be use to access private or public properties of the class with additional logic or restrictions
// setters allows to set properties which are not directly accessible
console.log(batman.getDetails);
batman.courseCount;
// protected -- can access wihtin the class as well as in the class which inherit parent class
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeAddress() {
        this._permanentAddress = "Royal Street, London";
    }
}
