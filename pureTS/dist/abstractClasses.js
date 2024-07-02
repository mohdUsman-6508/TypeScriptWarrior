"use strict";
// we cannot create object of abstract classes, we need another class which inherit it, and through it we can create objects of it.
// we can override methods also
class socialMedia {
    constructor(isReel, downloads, rating) {
        this.isReel = isReel;
        this.downloads = downloads;
        this.rating = rating;
    }
    giveWarning(usingTime) {
        if (usingTime > 60)
            return "You are overusing it";
        else
            return " You can use it.";
    }
}
// jo abstract he usko define karna he padega
class Instagram extends socialMedia {
    constructor(isReel, downloads, rating) {
        super(isReel, downloads, rating);
        this.isReel = isReel;
        this.downloads = downloads;
        this.rating = rating;
    }
    getRating() {
        return this.rating;
    }
    giveWarning(usingTime) {
        return "use it as much as you want no restrictions.";
    }
}
const insta = new Instagram(true, 1000, 4);
insta.giveWarning(10);
