var emp_dta=[
                {emp_id:1,emp_name:'Raj',emp_sal:30000},
                {emp_id:2,emp_name:'Khawab',emp_sal:40000},
                {emp_id:3,emp_name:'Taz',emp_sal:30000}
            ]

            //print name and salary of the employ
            for(var i=0;i<emp_dta.length;i++)
            {
                let x=emp_dta[i];
                console.log(x.emp_name+'\'s Salary: '+x.emp_sal)
            }

console.log("\n")

                                                // storing and retreving data.


var arr=[1,2,3]              

// adding object inside array
arr.push({id:1,Name:'Ritik'});

//I want to add salary key in object.
arr[3]['salary']=40000;

//I want to change the salary 
arr[3]['salary']=70000;
console.log(arr)

// adding a new array at 1 index position
arr.splice(1,0,[2,6,8]);
console.log(arr);

//i also want to add 10 inside the array at index 1
arr[1].push(10);
console.log(arr);


//add an interger array inside the object at index 4
arr[4]['data']=[22,33,44];
console.log(arr)

// now add {emp_id:---,address:----} b/w array element 22 and 33 which we have added in the previous question.
arr[4]['data'].splice(1,0,{E_id:23,address:"Indirapuram"});            //not showing output
console.log(arr);