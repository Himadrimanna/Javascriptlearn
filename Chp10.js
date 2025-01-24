// Stack and Heap Memory
/**
 *  Stack memory is used for Primitive Data type
 *  Size is known at compile time
 *  Fixed memory allocation
 *
 *  Heap memory is used for non primitive datatype
 *	Size is known at run time
	No limit for object memory


 */

let myname = 'Himadri'; //Primitive datatype stored in stack
let mysurname = myname; // Primitive datatype stored in stack

console.log(myname); // Output in stack
console.log(mysurname); // Copy of the object not reference to the same object

mysurname = 'Manna'; // SO if we change any thing on second data it will not affect the original data
console.log(mysurname);

let detail = {
  // This data of object is stored in Heap memory but its object `detail` is stored in stack memory and having a refernce to its data in Heap memory
  name: 'Himadri',
  age: 22,
};

let user1 = detail; // The user1 gets stored in stack memory and get reference of the details of object detail in heap memory
user1.age = 25;

console.log(detail.age); // Hence when data is change by the help of user1 it changes the original data also because instead of getting copy it gets reference of the data
