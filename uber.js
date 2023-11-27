// write a class to calculate the uber price.

class uber {
    constructor(customerName,location,date,price){
        this.customerName=customerName;
        this.location=location;
        this.date=date;
        this.price=price;


    }
    getuberbooking(){
        var location = this.location;
        var distancetraveledKM=0;
        var costPerKM = 5;
        var GST=0.50;
        if(location == "chennai")
        {
            distancetraveledKM = 10;
        }
        else if(location == "cuddalore")
        {
            distancetraveledKM = 20;
        }
        this.price= (GST+(costPerKM*distancetraveledKM));
        return `Dear ${this.customerName},You have booked ticket on ${this.date} and ${this.location} .the total price is ${this.price}`

    }
}
var ub=new uber("ram","cuddalore","nov18","");
console.log(ub.getuberbooking());