

//Event handler funtions h
function add_btn()
{
    var num1=document.getElementById("num1").value;
    var num2=document.getElementById("num2").value;
    var r=document.getElementById("res");
    //alert(num1+" "+num2);
    
    var n1=parseInt(num1);    
     var n2=parseInt(num2);   
     var res=add(n1,n2);

     r.value=res;     
}

function sub_btn()
{  
    var num1=document.getElementById("num1").value;
    var num2=document.getElementById("num2").value;
    var res=document.getElementById("res");

    var n1=parseInt(num1);
    var n2=parseInt(num2);

    var r1=sub(n1,n2);
    res.value=r1;

}

function mul_btn()
{
    var num1=document.getElementById("num1").value;
    var num2=document.getElementById("num2").value;
    var res=document.getElementById("res");

    var n1=parseInt(num1);
    var n2=parseInt(num2);

    var ree=mul(n1,n2);
    res.value=ree;
}

function div_btn()
{
    var num1=document.getElementById("num1").value;
    var num2=document.getElementById("num2").value;
    var res=document.getElementById("res");

    var n1=parseInt(num1);
    var n2=parseInt(num2);

    var ree=div(n1,n2);
    res.value=ree;
}

// Event handlers funtions ends here




// Normal functions 

function add(num1,num2)
{
    var res=num1+num2;
    return res;
}

function sub(num1,num2)
{
    var res=num1-num2;
    return res;
}

function mul(num1,num2)
{
    var res=num2*num1;
    return res;
}

function div(num1,num2)
{
    var res=num1/num2;
    return res;
}