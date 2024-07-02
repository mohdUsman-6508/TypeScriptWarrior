interface User {
  readonly id: number;
  email: string;
  googleId?: string;
  //this make difference from type
  // startTrial:()=>string
  startTrial(): string;
  getCoupon(couponname: string, value: number): number;
}

// in interfaces we can do reopening of it , but in types we cannot
// Reopening

enum subType {
  Standard = "Standard",
  Premium = "Premium",
  Super = "Super",
}

interface User {
  subscriptionType: subType;
}

// inheritents

interface Admin extends User {
  hiddenMovies: boolean;
}

const newton: User = {
  id: 1,
  email: "n@n.com",
  startTrial: () => "Trial started!",
  getCoupon: (name: "nn10", off: 10) => 10,
  subscriptionType: subType.Premium,
};
