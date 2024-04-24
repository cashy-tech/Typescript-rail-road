const superHeros: string[] = [];
superHeros.push("spiderman", "ironman");

const heroPower: Array<number> = [];
heroPower.push(2);

type User = {
  name: string;
  isActive: boolean;
};

const allUsers: User[] = [];
allUsers.push(
  { name: "Cashy", isActive: true },
  { name: "Ken", isActive: false }
);

//Arrays inside an array
const Models: number[][] = [
  [255, 255, 255],
  [198, 162, 1, 1],
];

export {};
