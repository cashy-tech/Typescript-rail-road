function createUser({ name: string, isPaid: boolean }) {}
let newUser = { name: "cashy", isPaid: false, email: "cashy@gmail.com" };
createUser(newUser);

function createCourse(): { name: string; price: number } {
  return { name: "reactJs", price: 344 };
}

//Type Aliases
type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createNewUser(user: User): User {
  return { name: "cashy", email: "cashy@gmail.com", isActive: true };
}
createNewUser({ name: "cashy", email: "cashy@gmail.com", isActive: true });

export {};
