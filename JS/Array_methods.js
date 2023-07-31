
                                                        //Adding elements in an array:-
                                                        
                                                        

// // array having ojects as its element.
// var arr1 = [{ std1: 'Ritk', id: 2 }, { std2: 'Rahul', id: 4 }];

// arr1.push(8);                                                               // adds the new element to the end of the array

// arr1.unshift({ std: 'Naman', id: 0 });                                      // adds element to beginning of array and rtuens length

// console.log(arr1);

// //splice(indexPosition from where to add, 0, all the elemenst to add).  
// arr1.splice(1, 0, "Aman", 20, 40);                                      // adding element to the specific index postion here 0 means we are adding an element. 
// console.log(arr1);



                                                    

                                        


                                                    //Read:(find/search) elements from an array. 

    
// var arr=[1,2,3,2,4,5,7];

// console.log(arr.indexOf(2));                                            //if the element is not in array this will return -1 ,works only for String,number.
// console.log(arr.lastIndexOf(2));

// console.log(arr.includes(9));   // false
// console.log(arr.includes(7));   // ture

// arr.unshift({Nme:'Raman',age:21});
// console.log(arr.includes({nme:'Raman',age:21}));                        // like indexof includes cant find the object in an array.




// function match(element)                                           //find function important.
// {
    //     return element==5;
    // }
    
    
    // var arr=[1,2,3,2,4,5,7];
    // var i=arr.find(match);
    // console.log(i);
    
    
    function match(element)
    {
        return element.model=="note 6";
    }
    
    var arry=[{brand:'mi', model:'note 6'}, {brand:'1+' ,model:'Nord'},{brand:'Nothing' ,model:'one'}];
    var x=arry.find(match);
    console.log(x);
    









                                                    // update or modify an element in array


// var arr=[1,2,3,{naam:'raj',no:2}]
// console.log(arr); 
// arr[3] = 0;
// console.log(arr)







                                                    // Remove/Delete an element from array.

// var arr=[1,2,3,4,5]
// // var arrr=new Array(1,2,3,4,5);

// console.log(arr);

// console.log(arr.pop());                                         // removes and return last element of array.
// console.log(arr)

// console.log(arr.shift())                                        // removes and return first element of array.
// console.log(arr)


// arr=[1,2,3,4,6]
// //splice(startindex from where , number of elements to be removed)
// console.log(arr.splice(1,2));                                   //returns the elements which awe are going to remove.
// console.log(arr)        

