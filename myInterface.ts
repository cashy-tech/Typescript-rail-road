interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string; //optional
  startTrial(): string;
  getCoupon(couponname: string): number;
}

//Reopening of the interface => Adding values to the same interface
interface User {
  githubToken: string;
}

//interface Admin extends interface user to inherit it's members
interface Admin extends User {
  role: string;
}
const cashy: Admin = {
  dbId: 22,
  email: "cashy@ndush.com",
  userId: 8907,
  role: "admin",
  githubToken: "github",
  startTrial: () => {
    return "Trial started";
  },
  getCoupon: () => {
    return 24244;
  },
};
