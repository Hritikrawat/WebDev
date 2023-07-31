function kuchbhi(arr,task)
{
    var i=0;
    var arr1=[];
    while(i<arr.length)
    {
        e=arr[i];
        arr1.push(task(e));
        i++;
    }
    return arr1;
}

// function sqofnum(no)
// {
//     return no*no;
// }

// function Mulitply_by_2(no)
// {
//     return no*2;
// }


var arr=[2,3,4];
var arr1=[];


// var arr1=kuchbhi(arr,sqofnum)
var arr1=kuchbhi(arr,(no)=>no*no)                 // lambda function/
console.log("Squared array: "+arr1)


// var arr1=kuchbhi(arr,Multiply_by_2)
var arr1=kuchbhi(arr,(no)=>no*2)
console.log("Multiplies array :"+arr1)


var a=1;
var b=2;
var c=3;
var d=4;
var e=5;


// console.log(a);
// setTimeout(()=>console.log(3),1000);
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(d);
// console.log(e);


