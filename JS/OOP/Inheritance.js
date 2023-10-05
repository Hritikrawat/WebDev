//Inheritance basically means to inherit the property and Characteristic of the parent class to child class


    class Vehcile   
    {
        constructor(Type,Name,price)
        {
            this.Type=Type;
            this.Name=Name;
            this.price=price;
        }

        Price()
        {
            console.log(this.Name+"'s on road price :"+this.price+" Lakh")
        }
    };


    class Truck extends Vehcile
    {
        Engine(how)
        {
            console.log(this.Name+" have "+how+" engine");
        }
    };

    class Car extends Vehcile
    {
        Engine(how)
        {
            console.log(this.Name+" have "+how+" engine");
        }
    };





    // CHild 1
    let Tr=new Truck("FourWheeler","Verna",8.5);
    Tr.Price()
    Tr.Engine("Petrol/CNG")
    
    
    //CHild 2
    var Cr=new Car("Two Wheeler","Pulsar 180",2);
    Cr.Price();
    Cr.Engine("Petrol 4 stroke");



