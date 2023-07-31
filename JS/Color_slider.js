// Event fucntion.

function slider()
{
    var x=document.getElementById('r1').value;
    var y=document.getElementById('r2').value;
    var z=document.getElementById('r3').value;
    document.getElementById('main_div').innerText="RGB("+x+','+y+','+z+")";

    change_color(x,y,z); 
}


//Normal funtcion
function change_color(red,green,blue)
{

   var ele=document.getElementById('main_div');
   ele.style.backgroundColor='rgb('+red+','+green+','+blue+')';

  
   

}


