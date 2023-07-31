// //Javascript is a synchornous (single-threaded) language. i.e we cant perform two task at a time. to make this work we will use Asynchorunous.

// var i=0;
// function counter()
// {
//     if(i>10) clearInterval(counter);
    
//     else { console.log(i);}
//     i++;    
// }
// setInterval(counter,1000);
// // setTimeout(() => {console.log("line 11")}, 1000);

// console.log("end");  // this will run first as the setInterval makes the counter function asynchronous.



function timer()
{
    var x=new Date().toLocaleTimeString();
    console.log(x);
}

setInterval(timer,1000);

// clearInterval(timer(),5000);
clearInterval(timer);