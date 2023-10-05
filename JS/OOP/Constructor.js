class five
{

    Student_Name(Name,Rollno,Attendence)
    {
        console.log(Name+"'s Roll no is "+Rollno+" and his attendence is "+Attendence);
    }



}

var class5=new five();
class5.Student_Name("Rahul",19,"70%");





                            //using Constructor.

class Six
{
    
    constructor(Name,Rollno,Attendence)
    {
        this.name=Name;
        this.roll=Rollno;
        this.presence=Attendence;
    }


    Student_data()
    {
        console.log("\nUSNIG CONSTRCUTOR")
        console.log(this.name+"'s Roll no is : "+this.roll+" and his attendence is "+this.presence);
    }


}



var class5=new Six("Raja",17,"60%");
class5.Student_data();






