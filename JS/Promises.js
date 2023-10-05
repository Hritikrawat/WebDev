// Promises are used to iron out the problem of complexity in Callback hell. and it makes code much readable.




// creating promises.

const promise = new Promise(function(resolve,reject){
    setTimeout(function(){console.log("Promise 1 created");resolve()},5000);
}) 

//
promise.then(function(){console.log("Promise1 consumed");})



new Promise(function(resolve,reject)
{
    setTimeout(function()
    {console.log("Promise2 created");
    resolve()},2000)
}).then(function(){console.log("Promise 2 consumed");})



new Promise(function(resolve,reject)
{
    setTimeout(function(){console.log("Promise 3 cretaed with data ");resolve({name:"Ritik",Age:22})},1000)
}).then(function(obj){console.log(obj)})





// using reject 
let po=new Promise((resolve,reject)=>
{
    let error=true;
    if(!error) resolve({name:"Ritik",Age:22})
    else reject("Something went wrong"); 
}).then().catch((str)=>console.log(str));




let prom=new Promise(function(resolve,reject)
{
    let error=false;
    if(!error) resolve({name:"Ritik",Age:22})
    else reject ("Something went wrong");
})

// Chaining of then  ***IMPORTANT****.
prom
.then(
    (obj)=>{
        // console.log(obj);
        return obj.name;}   // we can do this by destructuring by we wont.Here return value from a then() will return value to the child then()
    ).then((name)=>{console.log(name)});


//finally() is act like a default it will always get executed.






