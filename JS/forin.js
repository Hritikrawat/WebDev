//ForIn returns the index of the element


var arr=[1,2,3,4,5,6,7,8];

for (let I in arr )
{
    // console.log(I)                       // index position
    console.log(arr[I])                     //element at positon I
}


let str="RItik";
for (let key in str) 
{
    console.log(str[key])
}


var object={id:1,Name:'ritik',salary:80000}
for(let k in object)                                    // here it returns the key inside objects.
{
    console.log(k,object[k]);
}


    // practical use of Forin loop



var emp_dta=[
    {emp_id:1,emp_name:'Raj',emp_sal:30000},
    {emp_id:2,emp_name:'Khawab',emp_sal:40000},
    {emp_id:3,emp_name:'Taz',emp_sal:30000}
]

 

console.log("\n\n");

for(let x in emp_dta)
{
    var count=0;
    var obj=emp_dta[x];    // x is retuning the index value of array(emp_data)
                            // emp_data[x]  returning obj (elemnent of array).
    for(let ob in obj)      // ob returns the key of obj ,,  and obj[ob] returning the key and its value in the object.
    {
        console.log(ob+" at "+x+" index :"+obj[ob])
        count++;
        if(count%3==0) console.log("\n");
        else continue;
    }
       
}