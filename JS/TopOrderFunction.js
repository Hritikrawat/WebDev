function doAnyTask(n1,n2,anytask)    // here anytask will be known as callback function.  
{                                   // and doAnyTask will be knwon as TopOrder function.
    var x=anytask(n1,n2);
    return x;
}


function add(n1,n2)
{
    return n1+n2;
}

function subtract(n1,n2)
{
    return n1-n2;
}
function multiply(n1,n2)
{
    return n1*n2;
}
function divide(n1,n2)
{
    return n1/n2;
}

console.log(doAnyTask(3,2,add));
console.log(doAnyTask(3,2,subtract));
console.log(doAnyTask(3,2,multiply));
console.log(doAnyTask(3,2,divide));

