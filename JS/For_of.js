var arr=[1,2,3,4,5];
var str='Hello Dear';

for (const ele of arr)      // unlike forin , forof(in java foreach) returns element from collecntion.
                            // it doesnt work foobject.
{
    console.log(ele);    
}

for (const st of str)
{
    console.log(st);    
}