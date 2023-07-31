//Now We will use async await to handle the promises.

// const ProMise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let x = true;
//         if (x) resolve({ Name: "Ritik", age: 22 })
//         else reject("Error")
//     }, 3000)
// })

// async function Promise1Consumed() {
//     let response = await ProMise;  // promise is an Object so we wont write it as a function
//     console.log("Response from Promise 2");
//     console.log(response);
// }

// Promise1Consumed();


// if response is an error


// const Prom=new Promise((resolve,reject)=>
// {
//     setTimeout(()=>{
//         let x=false;
//         if(x) resolve({Name:"Rahul",age:25})
//         else reject("Something went wrong");
//     },5000)
// })

// async function Promise2Consumed()
// {
//     try {
//         let response=await Prom;
//         console.log("Response from Promise 2");
//         console.log(response);
//     } catch (error) 
//     {
//         console.log(error);
//     }

// }

// Promise2Consumed();




// Data

async function datafetch()
{
    try {
        const response= await fetch('https://jsonplaceholder.typicode.com/todos/1');  // response will take some time 
        const data= await response.json();  // parsing json into js obj which will take some time.
        console.log(data);

} 
catch (error) {
    console.log("E :",error);    
}
    
}

datafetch();








async function Api()
{
try {
        const rep= await fetch('https://dummyjson.com/users/1');
        let data= await rep.json();
        console.log(data)
    } 
catch (error) {
    console.log("error : ",error)
}
}
 Api()





















