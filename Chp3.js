/**
 * Just like we follow some rules while speaking english (the grammer) we have some rules to follow while writing a javascript program The set of these rules is called syntax in Javascript.
 *
 * What is Variable
 * A Variable is a container that stores a value
 * This is very similiar to the container used to store the products
 *
 * The Value of a javascript variable can be changed during the execution of a program
 *
 * Rules for choosing the variable names
 * -- Letter ,digits, underscores and $ sign allowed
 * -- Must begin with a $ _ or a letter
 * -- Javscript reserved words cannot be used as a variable name
 * -- Himadri and himadri are different variable  (case sensetive)
 *
 *
 */
let name = 'Himadri';
let surname = 'Manna';
let age = 21;
let isHappy = true;

console.log(typeof name); // string
console.log(typeof surname); // string
console.log(typeof age); //number
console.log(typeof isHappy); //boolean

console.log(
  'Hi, my name is ' +
    name +
    ' ' +
    surname +
    ' ' +
    'my age is' +
    ' ' +
    age +
    ' ' +
    'years'
);

/**Before ES6 (2015), JavaScript did not have Block Scope.
JavaScript had Global Scope and Function Scope.
ES6 introduced the two new JavaScript keywords: let and const.
These two keywords provided Block Scope in JavaScript:
{
  let x = 2;
}
// x can NOT be used here

Variables declared with the var always have Global Scope.

Variables declared with the var keyword can NOT have block scope:
{
  var x = 2;
}
// x CAN be used here

Variables defined with let can not be redeclared.
You can not accidentally redeclare a variable declared with let.

The let and const keywords are not supported in Internet Explorer 11 or earlier.*/

// Javascript Const
/**
 *The const keyword was introduced in ES6 (2015)
Variables defined with const cannot be Redeclared
Variables defined with const cannot be Reassigned
Variables defined with const have Block Scope

Always declare a variable with const when you know that the value should not be changed.

Use const when you declare:
A new Array
A new Object
A new Function
A new RegExp

The keyword const is a little misleading.

It does not define a constant value. It defines a constant reference to a value.

Because of this you can NOT:

Reassign a constant value
Reassign a constant array
Reassign a constant object
But you CAN:

Change the elements of constant array
Example ---
*/
// You can create a constant array:
const cars = ['Saab', 'Volvo', 'BMW'];
console.log(cars);
// You can change an element:
cars[0] = 'Toyota';

// You can add an element:
cars.push('Audi');
console.log(cars);
