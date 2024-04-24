let score: string | number = 33;

score = "49";
score = 90;

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let Cashy: User | Admin = { name: "cashy", id: 2456 };
Cashy = { username: "admincashy", id: 8970 };

function getId(id: number | string) {
  console.log(`Here's the id : ${id}`);
}
getId(980);
getId("76");

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  } else {
    id + 2;
  }
}

//array
const data1: number[] = [1, 2, 3];
const data2: string[] = ["1", "hi", "9"];

//using union types on arrays
const data3: (string | number)[] = [6, "hi", 8];

 
export {};
