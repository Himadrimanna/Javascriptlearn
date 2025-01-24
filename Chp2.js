// Data types in Javascript
/**
 * there are two types of data type
 * 1. Primitive data type
 * 2. Non Primitive data
 *
 * There are seven types of primitive data
 * 1.Number
 *A number such as Integer, decimal, float, all types of number are lie on numbers in javascript
 */
console.log(100); //int
console.log(-44); // integer
console.log(100.89); // decimal

//convert number to string
/**
 * A number can be converted in to string by adding an empty string with the number Eg. (100 + "") */
console.log(typeof (100 + '')); //output will be string
console.log(typeof ('' + 100)); //output will be string
//If want string to convert into a number
/**Add a + sign before the string  */
console.log(typeof +'100'); // output will be number
console.log(typeof +'Himadri'); //output will be number
console.log(+'Himadri'); // type will be number but when it is print it will give "NAN" as output i.e not a number

// another method to convert string to number because of limitation in adding + sign
//Using parseInt

console.log(parseInt('1000himadri')); // output will be 1000 it will remove the alphabets and give number
/**
 *2.String
 /*A string are used to store textual form of data like word , sentence. It follows zero based Indexing
 This is a sequence of text known as a string. To signify that the value is a string, enclose it in single or double quote marks.*/
console.log('Himadri');
console.log('Himadri');
console.log(`Himadri`);
//backtics support new line text but inverted commas dont it will give error
console.log(`Himadri
manna`); // it will give output Himadri \n Manna

//Differnet methods in Strings
let str = 'Himadri';
console.log(str.charAt(0)); // It will give the character from the string work as array because it start indexing from 0
console.log(str.slice(2, 7)); // it will slice the text from start number to end number
console.log(str.slice(-6)); // if negative no is pass in slice it will start counting from backward and return the string
console.log(str.substring(2, 7)); // substring is similiar to slice but it will take negative number as 0
console.log(str.substring(-6)); // it will take -6 as 0 and give Himadri as output
console.log(str.substr(2, 5)); // It will take start number from wher to start substring and length of substring
console.log(str.toLowerCase()); //convert string to lowercase
console.log(str.toUpperCase()); //convert string to UPPERCASE
console.log(str.charCodeAt(2));

let str1 = '        Himadri    ';
console.log(str1.trim()); //It will trim the empty spaces
console.log(str1.trimStart()); //It will trim the empty spaces form start
console.log(str1.trimEnd()); //It will trim the empty spaces from end
console.log(str1.length + ',' + str.length); // it will string length of both the string

//Concat string
let str2 = 'Himadri';
let str3 = 'Manna';
console.log(str2.concat(' ', str3)); //It will join two string for this it will give output as Himadr Manna

console.log(str.replace('Himadri', 'Rishita')); //It will replace the original string with new string
console.log(str.repeat(2)); // It will repeat the string by the number specified

/**
 * 3.Boolean
 *This is a True/False value. The words true and false are special keywords that don't need quote marks.
 */
let x = 10;
let y = 12;
let z = 10;
console.log(x == z);
console.log(x == y);

/**
 * 4.Undefined
 *Accessing an uninitialized variable returns undefined
 */
let str4;
console.log(str4);
/**Accessing a non - existing property of an object returns undefined
 * Accessing a out - of - bounds array element returns undefined
 */

/**5. Null
 * Null means no value assign to variable. type of null returns object It is an bug in Javascript
 * Null is treated as false value
 */
console.log(null);
console.log(typeof null);
console.log(+null);

/**
 * 6. BigInt
 * BigInt is a primitive Datatype which is used for large numeric value it doesn't represent decimal values
 * It is used to represent values greater than 253-1
 */

let num = 12345678901234567890n;
console.log(typeof num);

/**
 * 7. Symbol
 * Symbol is a primitive Datatype which is used to give uniquness to its value if we want to create some unique data we will use
 * Symbol Datatype
 * NOTE: If we declare same data using Symbol Datatype it will give false on equating
 */

const id = Symbol('123');
const anotherid = Symbol('123');

console.log(id == anotherid);

/**
 * There are 3 Non Primitive Data types
 * They are all call by reference Data type
 * 1. ARRAY
 */
//Array
const arr = new Array(2, 4, 6, 8);
console.log(arr);
console.log(arr.includes(9));

const newarr = arr.join();
console.log(arr);
console.log(newarr);
console.log(typeof newarr);
/**
 * Slice It is a method in which it return the portion of array from start range(inclusive) to last range (exclusive)
 * in a new array without manipulating the original array
 *
 * Splice It ia a method in which it return the portion of array from start range to last range(inclusive) by manipulating the
 * original array by deleting the portion
 */
const myn1 = arr.slice(0, 3);
console.log(myn1); // [4,6]
console.log(arr); //[2,4,6,8]
const myn2 = arr.splice(0, 3);
console.log(myn2); //[4,6,8]
console.log(arr); //[2]

/**New concept */
const marvel_heros = ['Ironman', 'Captain America', 'Thor'];
const dc_heroes = ['Superman', 'Batman', 'Aquaman'];
marvel_heros.push(dc_heroes); //It will combine both array and manipulate the original array. It will give array of 4 elements with dc_heroes whole array as an element
console.log(marvel_heros);

const all_heros = marvel_heros.concat(dc_heroes); // This method forms a new array by combining two or more arrays without manipulating the original array
console.log(all_heros);

//Spread Opretor
const allnewheros = [...marvel_heros, ...dc_heroes]; //This operator is used in industry practise and we can combine n number of arrays
console.log(allnewheros);

console.log(Array.from('Himadri'));
console.log(Array.from({ name: 'Himadri' }));
//OBJECTS
const obj1 = {
  Name: 'Himadri Manna',
  Age: '22',
}; //Object

const func1 = function () {
  console.log('Hello World');
}; //Function

//console.log(typeof obj1);
