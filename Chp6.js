/**
 * Operators in Javascript
 *
 *Types of JavaScript Operators
There are different types of JavaScript operators:

Arithmetic Operators
Assignment Operators
Comparison Operators
String Operators
Logical Operators
Bitwise Operators
Ternary Operators
Type Operators

Arithmetic Operators are used to perform arithmetic on numbers:
Additional Operator +
Subtraction Operator -
Multipliaction Operator *
Division Operator /
Modulus (remainder) %
Exponential Operator **
 */

console.log(2 + 4);
console.log(5 - 3);
console.log(5 * 3);
console.log(6 / 2);
console.log(13 % 4);
console.log(2 ** 10);

/*
MATH OBJECT
The JavaScript Math object allows you to perform mathematical tasks on numbers.

The Math Object
Unlike other objects, the Math object has no constructor.
The Math object is static.
All methods and properties can be used without creating a Math object first.

*/
console.log(Math.E); // returns Euler's number
console.log(Math.PI); // returns PI
console.log(Math.SQRT2); // returns the square root of 2
console.log(Math.SQRT1_2); // returns the square root of 1/2
console.log(Math.LN2); // returns the natural logarithm of 2
console.log(Math.LN10); // returns the natural logarithm of 10
console.log(Math.LOG2E); // returns base 2 logarithm of E
console.log(Math.LOG10E); // returns base 10 logarithm of E

/*
Math Methods
The syntax for Math any methods is : Math.method(number)

Number to Integer
There are 4 common methods to round a number to an integer:

Math.round(x)	Returns x rounded to its nearest integer
Math.ceil(x)	Returns x rounded up to its nearest integer
Math.floor(x)	Returns x rounded down to its nearest integer
Math.trunc(x)	Returns the integer part of x (new in ES6)
*/

console.log(Math.round(4.6));
console.log(Math.ceil(4.4));
console.log(Math.floor(4.6));
console.log(Math.trunc(4.9));

/**
Math.sign()
Math.sign(x) returns if x is negative, null or positive:
Math.pow()
Math.pow(x, y) returns the value of x to the power of y:
Math.sqrt()
Math.sqrt(x) returns the square root of x:
Math.abs()
Math.abs(x) returns the absolute (positive) value of x:
 */

console.log(Math.sign(-4));
console.log(Math.sign(0));
console.log(Math.sign(4));
console.log(Math.pow(8, 2));
console.log(Math.sqrt(64));
console.log(Math.abs(-4.7));

/**
Math.random()
Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):
Math.min() and Math.max()
Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:
 */
console.log(Math.random());
console.log(Math.min(0, 150, 30, 20, -8, -200));
console.log(Math.max(0, 150, 30, 20, -8, -200));
Math.floor(Math.random() * (max - min + 1)) + min;
