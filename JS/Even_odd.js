function check()
{
    var z=document.getElementById(ans);
    var Ans= checking();
    ans.value=Ans;
}
function grn_clr()
{
    document.getElementById('btn').style.backgroundColor='lightgreen';
}
function ylw_clr()
{
document.getElementById('btn').style.backgroundColor='yellow';
}

function checking()
{
    let x=document.getElementById('Number').value;
    const odd='Odd';
    if(x%2==0)
    {           
        let even='Even';
        return even;
    }
    else return odd;

}