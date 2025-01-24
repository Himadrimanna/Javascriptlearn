//Dates
let mydate = new Date(); // Creates a date object Date() is a constructor
console.log(mydate.toString());
console.log(mydate.toLocaleString());
console.log(mydate.toDateString());
console.log(mydate.toUTCString());
console.log(typeof mydate); // Date is a object data type

let createdate = new Date(2025, 0, 1); // Create a date where month index start from 0 as January and 11 as December
console.log(createdate);
console.log(createdate.toString());
let createdate1 = new Date(2025, 0, 1, 5, 3);
console.log(createdate1.toString());
let createdate2 = new Date('01-05-2025');
console.log(createdate2.toLocaleString());

let timestamp = Date.now(); //it gives time in milisecond calculating from 1st jan 1970 upto till date
console.log(timestamp);
console.log(createdate.getTime());
