// OBJECTS
const mysym = Symbol('key1');

const user = {
  Name: 'Himadri Manna',
  [mysym]: 'mykey1', //for writting symbol as a key value pair we have to add [] also while accessing the value we have to add []
  name: 'Himadri', // "name" as a key can be there in object which cannot be accesed with dot operator so it can accessed with syntax user["name"]
  age: 22,
  location: 'Bhayandar',
  email: 'himadrimanna792@gmail.com',
  isLastlogin: false,
  Lastlogindays: ['Monday', 'Tuesday'],
};

console.log(user.Name);
console.log(user.name);
console.log(user['location']);
console.log(typeof user[mysym]);

console.log(user);
user.email = 'himadricustom1@gmail.com';
console.log(user);

//Object.freeze(user); //this function is used to freeze the manipulation of the object
//user.email = 'abc@gmail.com';
//console.log(user);

//function integration on object
user.greetings = function () {
  console.log('Hello User');
};

user.greetingstwo = function () {
  console.log(`Hello user ${this.Name}`);
};

console.log(user.greetings());
console.log(user.greetingstwo());
