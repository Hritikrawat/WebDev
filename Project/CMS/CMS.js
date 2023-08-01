var arr_cus = [];
var index = 0;
var naam = document.getElementById('Name_input');
var id = document.getElementById('Id_input');
var pno = document.getElementById('P_no_input');
var adress = document.getElementById('address_input');
var OutTab = document.getElementById('output_table');
var inputImage=document.getElementById('Image');
// var loadData=document.getElementById('saveData');
// var saveData=document.getElementById('loadData');




                    //E V E N T _____  H A N D L E R .

function add_btn() {
    // alert("clicked");
    let name = naam.value;
    let Id = parseInt(id.value);
    let P_no = pno.value;
    let addres = adress.value;

    var reader=new FileReader();

    reader.onload=function()
    {
        var show=reader.result;
        add_listener(name, Id, P_no, addres,show);
    }


    reader.readAsDataURL(inputImage.files[0]);

    // alert("Customer added successfully");

}
function saveData()
{
    var data_in_json=JSON.stringify(arr_cus);  // converting array into json string (serialization)
    localStorage['data']=data_in_json;
    alert("Data saved");
}

function loadData()
{
        var data_in_json=localStorage['data'];
        arr_cus=JSON.parse(data_in_json);
        for(let obj of arr_cus)
        {
            showingOutput(obj);
        }


}

function Search_btn() {
    let Id = parseInt(id.value);

    var obj = search(Id);
    if (obj == undefined) { alert("Id not found"); }
    else {
        naam.value = obj.GoodName;
        pno.value = obj.Pno;
        adress.value = obj.Address;
    }

    document.getElementById('tr_' + obj.Id.toString()).style.backgroundColor = 'grey';  // this line is to set backgroundcolor on dymnamically created Id or tr
    
}

function dlt_btn() {
    var Id = parseInt(id.value);
    Delete(Id);
    
}
function First_btn() {
    
    index = 0;
    showelementbyIndex(index);
    document.getElementById('tr_' + obj.Id.toString()).style.backgroundColor = 'grey';  // this line is to set backgroundcolor on dymnamically created Id or tr
    // document.getElementById('tr_'+ obj.Id.toString()).style.backgroundColor="lime"
}
function Last_btn() {
    var index = arr_cus.length;
    index -= 1;
    showelementbyIndex(index);

}

function Next_btn() {
    if (index !== arr_cus.length) {
        index++;
        showelementbyIndex(index);
    }
    else if (index == arr_cus.length) alert("this is the last element");
    else alert("Add some data first")

}
function Previous_btn() {
    if (index !== 0) {
        index--;
        showelementbyIndex(index);
    }
    else if (index == 0) alert("This is the first element");
    else alert("Add some data first")
}









                //N O R M A L ___ F U N C T I O N 


function add_listener(name, Id, P_no, addres,image) {
    let obj = { GoodName: name, Id: Id, Pno: P_no, Address: addres,Image:image };  //carefull on wiritng obj's properties name will needed throughout the programm.
    arr_cus.push(obj);
    showingOutput(obj);
}


function search(Id) {
    var obj = arr_cus.find((e) => e.Id == Id);  //when e.Id==Id is true it will return the obj which conataing the Id.
    console.log(typeof obj)
    return obj;

}



function showingOutput(obj) {
    //cretaing dyanmic table tow and column.


    var Tr = document.createElement('tr');
    Tr.setAttribute('id', 'tr_' + obj.Id.toString());          //inserting ID to tr dynamically

    var Td_rmv = document.createElement('td');
    var Td_rmv_btn = document.createElement('button');
    var Td_rmv_text = document.createTextNode('Remove');
    Td_rmv_btn.appendChild(Td_rmv_text);
    Td_rmv.appendChild(Td_rmv_btn);
    Tr.appendChild(Td_rmv);



    var TdId = document.createElement('td');
    // var TextId= document.createTextNode(obj.Id.value);
    var TextId = document.createTextNode(obj.Id);
    TdId.appendChild(TextId);
    Tr.appendChild(TdId);


    var TdName = document.createElement('td');
    // var TextName=document.createTextNode(obj.GoodNameame.value);
    var TextName = document.createTextNode(obj.GoodName);
    TdName.appendChild(TextName);
    Tr.append(TdName);


    var TdPno = document.createElement('td');
    var TextPno = document.createTextNode(obj.Pno);
    // var TextPno=document.createTextNode(obj.Pno.value);
    TdPno.appendChild(TextPno);
    Tr.appendChild(TdPno);

    var Tdadress = document.createElement('td');
    // var Textadress=document.createTextNode(obj.Address.value);
    var Textadress = document.createTextNode(obj.Address);
    Tdadress.appendChild(Textadress);
    Tr.appendChild(Tdadress);

    
    var TdImage=document.createElement('td');
    var cusImg=document.createElement('img')
    cusImg.setAttribute('src',obj.Image);
    cusImg.setAttribute('width','100px');
    TdImage.appendChild(cusImg);
    Tr.appendChild(TdImage);

    OutTab.appendChild(Tr);


}

function removeOutput(id_rmv) {
    // var obj = arr_cus[index];
    document.getElementById('tr_' + id_rmv.toString()).remove();
    // alert("Customer Removed")
    ;
}

function Delete(Id) {
    var index = arr_cus.findIndex(e => e.Id == Id)   //returns index of the element(object here) 
    if (index !== -1) {
        var id_rmv = arr_cus[index].Id;
        arr_cus.splice(index, 1);
        removeOutput(id_rmv);
    }
    else alert("Id not found");

}

function showelementbyIndex(index) {
    var obj = arr_cus[index];
    if (arr_cus.length !== 0) {
        naam.value = obj.GoodName;
        id.value = obj.Id;
        pno.value = obj.Pno;
        adress.value = obj.Address;
    }
    else alert("Add some data First")
}

