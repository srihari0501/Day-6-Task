//Write a “person” class to hold all the details.

class person{
    constructor(name,age,gender,mail,qualification){

        this.name=name;
        this.age=age;
        this.gender=gender;
        this.maill=mail; 
         this.qualification=qualification;
    }
     getname(){
        return `My name is ${this.name} and I'm ${this.age} . I'm coming from vriddhachalam and I have completed my ${this.qualification} in UCEV.If I'm suitable for this position please contact this ${this,this.maill}.`
     }
}
 var p1=new person("SRIHARI S","23","male","srihari@gmail.com","B-Tech IT");
 console.log(p1.getname());