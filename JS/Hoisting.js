//In JavaScript, a variable can be declared after it has been used.

//*** declaration are hoisted***

console.log(a);    // this is give undifined due to hoisting.
var a=10           // declaration here but using a before decalaring the a this is what hoisting does


hoist();  

function hoist()
{
    console.log("This fucntion is called prior than describing it");
}



x();                   // function expression and class expression are not hoisted
var x=function hoist2()
{
    console.log("This fucntion is called prior than describing it function 2")
}
