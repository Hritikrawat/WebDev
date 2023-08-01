var date;
let internl_id;
function gettingTime()
{
    date=new Date().toLocaleTimeString();
    document.getElementById('td').innerHTML = date;
}

gettingTime();
function Stop_btn()
{
    clearInterval(internl_id);
}
  
function Start()
{
    
    internl_id=setInterval(gettingTime,1000);
}
