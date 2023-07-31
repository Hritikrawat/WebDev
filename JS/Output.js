document.getElementById('id').innerHTML='This line has been written using javascript innerHTML';           
                    // document.getElementById('id').innerHTML=5+6;         // innerHTML will re-write the whole document..(line 21 would over write line 19)
                    
                    
                    document.write("this is write funtion of js");          // writes in document w/o over writing it.


                    alert("this is alert of js");


                    console.log("check the console not the html output") ;



                    //formatting on button clicks.
                    function change()
                    {
                        document.getElementById('id').innerHTML="this line is change by function using innerText";
                        document.body.style.backgroundColor=('tomato');
                    }
                    function change2()
                    {
                        alert('this alert is by using btn');
                    }
                    function change3()
                    {
                        document.getElementById('textarea').value='text added';
                    }