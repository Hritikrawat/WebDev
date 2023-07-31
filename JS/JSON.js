// Javascript objbect Notation 
// Serialization:- js object to JSON(text-based) fromat.
// de-serialization:-  JSON to js object.

//This is the general syntax of JSON text format :- '("key":integer, "key2":"string")'

var ob={id:1,name:'Raman',Dept:'Finance'};   

var on=JSON.stringify(ob);   // serialization
console.log(typeof on);      //JSON exists as string 

var obj=JSON.parse(on)       //Deserialization
console.log(obj.id)              
console.log(obj['id'])