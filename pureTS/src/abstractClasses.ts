// we cannot create object of abstract classes, we need another class which inherit it, and through it we can create objects of it.
// we can override methods also

abstract class socialMedia {
  constructor(
    public isReel: boolean,
    public downloads: number,
    public rating: number
  ) {}

  abstract getRating(): number;

  giveWarning(usingTime: number): string {
    if (usingTime > 60) return "You are overusing it";
    else return " You can use it.";
  }
}

// jo abstract he usko define karna he padega

class Instagram extends socialMedia {
  constructor(
    public isReel: boolean,
    public downloads: number,
    public rating: number
  ) {
    super(isReel, downloads, rating);
  }

  getRating(): number {
    return this.rating;
  }
  giveWarning(usingTime: number): string {
    return "use it as much as you want no restrictions.";
  }
}

const insta = new Instagram(true, 1000, 4);
insta.giveWarning(10);
