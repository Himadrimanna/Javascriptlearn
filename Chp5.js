/* Template Literal of String
Back ticks are used for (` `) rather than  quotes (" ")

	example
*/
let text = `Hello World!`;
console.log(text);
/*
Quotes Inside Strings
Template Strings allow both single and double quotes inside a string:

Example
*/
let text1 = `He's often called "Johnny"`;
console.log(text1);
/*
Multiline Strings
Template Strings allow multiline strings:

Example
*/
let text2 = `The quick
brown fox
jumps over
the lazy dog`;
console.log(text2);

/**
 * Interpolation
Template String provide an easy way to interpolate variables and expressions into strings.
The method is called string interpolation.
The syntax is: ${...}
without concat or + sign we can interpolate variables inside the string
 */
let firstName = 'Himadri';
let lastName = 'Manna';

let text3 = `Welcome ${firstName}, ${lastName}!`;
console.log(text3);

/**
 * include()
 * it checks whether a particular string is present inside the given string '
 * it will return true or false
 */
console.log(text1.includes('often'));
console.log(text1.includes('Often'));

/**
 * indexof()
 * it returns the index of the character from the string
 */

console.log(text1.indexOf('o'));

/**
 * padstart()
 * this method is used hide the string from start mainly used for hiding password from front
 * eg password with 10 digit it will show *******789
 */

let passworddigit = '789';
console.log(passworddigit.padStart(10, '*'));
