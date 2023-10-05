var promise=fetch('https://dummyjson.com/products/categories');         // will return a promise to get its response we will use then
promise.then((result)=>
{
    var data=result.json();                            // .json return a promise to get its response we will use then
    data.then((data)=>(console.log(data)));
})
 