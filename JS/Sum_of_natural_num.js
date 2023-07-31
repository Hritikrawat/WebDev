
function Show_Ans()
{
    var input = document.getElementById('num').value;
    var answer=document.getElementById('sum');
    answer.value=sum(input);


}


function sum(x)
{
    let c=0;
    for(var i=1;i<=x;i++)
    {
        c+=i;
    }

    return c;
}