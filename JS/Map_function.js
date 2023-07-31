var arr = [5, 4, 2];
var arr_new = [];


function task(e) {
    return e * e;
}


// here map() takes every element of arr one by one and passes it to callbacck funtion internally 
//map() returns a new array.

var arr_new = arr.map(task);                 // the argument of task() is given by map() interally. 
console.log(arr_new);


var arr_new_1 = arr.map((e) => e * e);           // here we are using lambda function as argument of map().
console.log("\n This is using lambda function: ");
console.log(arr_new_1);










// Question :- return an array of emp having increment of 500 in their salaries.

// loop method.

var emp_arr = [{ id: 1, name: 'Ritik', salary: 35000 }, { id: 2, name: 'Aman', salary: 40000 }, { id: 3, name: 'Anurag', salary: 30000 }];
var arr_n = [];
var i = 0;

for (i = 0; i < emp_arr.length; i++) {
    e = emp_arr[i].salary + 500;
    arr_n.push(e);
}

console.log("\n Using loop method");
console.log(arr_n);



//using map() function. 

function increment(e) {
    return e.salary += 500;
}

var emp_arr = [{ id: 1, name: 'Ritik', salary: 35000 }, { id: 2, name: 'Aman', salary: 40000 }, { id: 3, name: 'Anurag', salary: 30000 }];

var salary_increment = emp_arr.map(increment);
console.log("\n Using map function");
console.log(salary_increment);







// Important.

// var arr_l=emp_arr.map(e=>(e.salary+=500));
// console.log(arr_l)
// var arr_l=emp_arr.map(e=>({...e,salary:e.salary+=500}));
// console.log(arr_l)