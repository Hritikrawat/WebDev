var data;
function getData()
{

    data=this.responseText;
    document.querySelector('p').innerHTML=data;
    // alert(data);

}


//GET request to get data 

// var xyz=new XMLHttpRequest();
// xyz.open('Get','https://dummyjson.com/products',true);
// xyz.onload=getData;
// xyz.send();


//POST request to add a product.

var request =new XMLHttpRequest();
request.open('Post','https://dummyjson.com/products/add',true);
request.onload=getData;
var jsonData=
{
      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "..."
}

request.send(JSON.stringify(jsonData));
