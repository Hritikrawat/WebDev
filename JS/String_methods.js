
// we can access an individual character in a Sting.


const naam='Ritik';
const surname=' Rawat';
const sentence='Hello there , i am Ram';


//chatAt() provides the char value at a specific index in a Sting.
console.log(naam.charAt(2))
// console.log("naam"[2]);


//concat() adds up the strings 
console.log(naam.concat(surname));


//provides the position of the spcific character.
console.log(naam.indexOf('t'))


//lastindexof provides the position of a character prestn in a string from the last postion.
console.log(naam.lastIndexOf('i'));


//Serach searches a specific expression and returns its postion
console.log(sentence.search('there'))  // ouput-7
console.log(sentence.search(' '))      // 5


//match
// console.log(sentence.match("Ram"));
// console.log(sentence.match(/Ram/));


//replace
console.log(naam.replace('i','ee')); // replaced only first 'i' with 'ee'




//SubString
console.log(naam.substring(1,4));
// this is how we replace a substring.
console.log(sentence.replace(sentence.substring(1,4),'yyy'));


//slice()
console.log(naam.slice(1,4));

//lower/uppercase

console.log(sentence.toLocaleLowerCase());
console.log(sentence.toUpperCase());

// Valueof();
const x=new String(4);
console.log(x.valueOf());  // value of string. we dont need to explicitly
console.log(x);  //object of string



//split()
console.log(naam.split('i'));  // returns array of character of string except the charcter given in that function.   ---> ['R','t','k'];

//trim function trims the white sapces from the left and right side of the string.