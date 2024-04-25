enum Direction {
  Up = 0,
  Down = 1,
  Left = 2,
  Right = 3,
}

//using enums
let playerDirection: Direction = Direction.Right;
console.log(playerDirection); //output will be 3

//Accessing enum values
console.log(Direction.Up);
console.log(Direction[2]);

//Heterogenous Enums
enum Status {
  success = 200,
  NotFound = "Not Found",
}

console.log(Status.success); //output=200
let statusName: string = Status.NotFound;
console.log(statusName);

//use case => dealing with fixed sets of values ie days of the week, directions, status codes etc.
enum DayOfWeek {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

let today: DayOfWeek = DayOfWeek.Thursday;
