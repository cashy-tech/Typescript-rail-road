function addTwo(num: number): number {
  return num + 2;
}

addTwo(8);

function getUpper(val: string) {
  return val.toUpperCase;
}
getUpper("teacher");

function signUp(name: string, age: number, isPaid: boolean) {}
signUp("Cashy", 24, false);

//arrow functions
const getHello = (s: string): string => {
  return "j";
};

const heros = ["thor", "spiderman", "ironman"];

heros.map((hero): string => {
  return `hero is ${hero}`;
});

//void: returns nothing
function consoleError(errmsg: string): void {
  console.log(errmsg);
}

//never: never returns anything
function handleError(errmsg: string): never {
  throw new Error(errmsg);
}
export {};
