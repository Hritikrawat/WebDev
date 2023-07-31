//Event handler
var x,y,z,res,Ans;
function Show_Ans()
{
    
    x = document.getElementById('num1').value;
     y = document.getElementById('num2').value;  
     z = document.getElementById('num3').value;
     res=document.getElementById('res');
    
    var Ans= result(x,y,z);
    res.value=Ans;


}


function result(a,b,c)
{
    
  
    if (a > b)
{
    if (a > c) 
    {
        return (a+" is the biggest number");
    }
    
    else return (c+" is the biggest number");
}
    
  else if (b > c) 
  {
    if (b > a) {return (b + " is the biggest number");}
    
    else return (a + "is the biggest number");
  }

  else if (c > a) 
  {
    if (c> b) {return (c + " is the biggest number");}
    
    else return (b+" is the biggest number");
  }
   
  else return ("Please enter some values");

}
