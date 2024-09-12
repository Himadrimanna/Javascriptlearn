/**
 Logical Operators

&&	and	(x < 10 && y > 1) is true
||	or	(x == 5 || y == 5) is false
!	not	!(x == y) is true
 */
const age = 23;
const iscollegestudent = age >= 18 && age <= 24;
const isschoolstudent = age >= 5 && age <= 18;
console.log(iscollegestudent);
console.log(isschoolstudent);
const isvalidstudent = iscollegestudent || isschoolstudent;
console.log(isvalidstudent);

console.log(!(6 == 6));
