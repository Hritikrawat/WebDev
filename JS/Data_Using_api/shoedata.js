function showData()
{
    getAllcategory();
}


function getAllcategory()
{

    var prom = fetch('https://dummyjson.com/products/categories');
    prom.then((result)=>
    {
        var prom1=result.json();
        prom1.then((res)=>{
            
            var div=document.getElementById('allcategory')
            var allcategory=' ';
            allcategory+='<select>'
            for(let cat of res)
            {
                allcategory+= '<option value="'+cat+'">'+cat+'</option>'
            }
            allcategory+='</select>'
            
            div.innerHTML=allcategory;
            // alert(res)
        });
    })
}