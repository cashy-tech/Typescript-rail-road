//string
let greetings: string = "Hello Cashy";
greetings.toLowerCase();
console.log(greetings);

//number
let userId: number = 7839;

//boolean
let isLoggeIn: boolean = false;

//any: not a good practice! 
let hero;

function getHero() {
  return "Horray";
}
hero = getHero();
console.log(hero);

export {};
