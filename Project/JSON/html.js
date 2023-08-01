var jsob='{"id":1,"title":"iPhone 9","description":"An apple mobile which is nothing like apple","price":549,"discountPercentage":12.96,"rating":4.69,"stock":94,"brand":"Apple","category":"smartphones","thumbnail":"https://i.dummyjson.com/data/products/1/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/1/1.jpg","https://i.dummyjson.com/data/products/1/2.jpg","https://i.dummyjson.com/data/products/1/3.jpg","https://i.dummyjson.com/data/products/1/4.jpg","https://i.dummyjson.com/data/products/1/thumbnail.jpg"]}'

var Nobj=JSON.parse(jsob);   //deserialization.

// console.log(Nobj['description'])
// console.log(Nobj.title);

document.getElementById('heading').innerText=Nobj.title;
document.getElementById('image').src=Nobj.thumbnail;
for(let dta of Nobj.images)
{
    var div=document.getElementById('maindiv');
    // creating img tag dynamically
    var img =document.createElement('img');
    img.setAttribute('src',dta);
    img.setAttribute('width','100px');
    div.appendChild(img);
}

document.getElementById('caption').innerHTML=Nobj.description;
