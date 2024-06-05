/*
Comparison Operator

==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to

*/

const num1 = '24'; // no as string
const num2 = 24; // Integer
const num3 = 14; // Integer
console.log(num1 == num2); // it will give true as value is equal irrespective of type
console.log(num1 === num2); // it will give false as type is not same
console.log(+num1 === num2); // can be explicitly convert to number
console.log(parseInt(num1) === num2);
console.log(num3 != num2); // will give true as both are not equal
console.log(num1 !== num2); // will give true as both type are not equal irrespective of value is equal or not
console.log(num2 > num3);
console.log(num2 < num3);
console.log(num2 >= num3);
console.log(num2 <= num3);
