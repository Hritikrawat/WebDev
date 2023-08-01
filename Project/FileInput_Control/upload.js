function Show_file()
{
    var imgs=document.getElementById('input');
    var tbupld=document.getElementById('image');
   
    
    var read=new FileReader();

    read.onload=function()
    {
        var img=read.result;
        tbupld.setAttribute('src',img,'width','100px');
    }

    read.readAsDataURL(imgs.files[0]);
    // alert("done");
}