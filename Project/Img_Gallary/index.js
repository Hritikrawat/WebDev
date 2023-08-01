var img_arr=[];
var td=0;
var i=0;
var inputImage=document.getElementById('inputFile');
var outputImage=document.getElementById('outputTable');
var btn=document.getElementById('addBtn');

function  addImage()
{
   
    
    var reader =new FileReader();
    reader.onload=()=>
    {

        img_arr[i]=reader.result;    
        // var Tr=document.createElement('tr');
        var Td=document.createElement('td');
        var div=document.createElement('div')
        var Dimg=document.createElement('img');
        div.appendChild(Dimg);
        Td.appendChild(div);
        Dimg.setAttribute('src',img_arr[i]);
        Dimg.setAttribute('width','100px');
        // Tr.appendChild(Td);
        // if(td/4==0) document.createElement('br')s
         outputImage.appendChild(Td);
        td++
        // alert("added")
    }

    for(i=0;i<inputImage.files.length;i++)
    {
    reader.readAsDataURL(inputImage.files[i])
    }



}