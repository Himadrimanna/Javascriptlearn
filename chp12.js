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
console.log(user[mysym]);

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

//Object nesting
const regularuser = {
  email: 'some@gmail.com',
  fullname: {
    usefullname: {
      firstname: 'Himadri',
      lastname: 'Manna',
    },
  },
};

console.log(regularuser.fullname.usefullname.lastname);

//object merger

const obj1 = { a: 0, b: 1 };
const obj2 = { c: 'c', d: 'd' };

const obj3 = { obj1, obj2 };
console.log(obj3);
const obj4 = Object.assign({}, obj1, obj2); //Object Assign method
console.log(obj4);
const obj5 = { ...obj1, ...obj2 }; // Seperator method
console.log(obj5);

//When Data is comed from Database
const user2 = [
  {
    id: 1,
    name: 'Himadri Manna',
  },
  {
    id: 2,
    name: 'Faiz Sayed',
  },
];

console.log(user2[1]);

//checking all the key and values present in the object
const tinderuser = {
  name: 'Hritik solanki',
  email: 'hritik@gmail.com',
  isLoggedin: 'True',
};

console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

// Object Destructoring
const Student = {
  student1: 'Sharaddha Mishra',
  student2: 'Krishna Gupta',
};

const { student1 } = Student; //The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
console.log(student1);
const { student2: stud } = Student; //giving name to the destructured assignment and it will be called during execution
console.log(stud);
