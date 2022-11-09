class person{
    // field
    // name='';
    // age=0;
    // address='';

    // hàm khởi tạo
    constructor(name,age,address){
        this.name = name;
        this.age=age;
        this.address=address;
    }

    //getter / setter
    // name
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }

    // age
    getAge(){ return this.age;}
    setAge(age){this.age=age;}
    //address
    getAddress(){return this.address;}
    setAddress(address){this.address=address;}
}
// tạo lớp kế thừa
class Student extends person{
    // studentId=0;
    // constructor
    constructor(name,age,address,id){
        super(name,age,address);
        this.studentId = id;
    }

    getInfor(){
        console.log(this.studentId,this.name,this.getAge(),this.getAddress());
    }
}

// sử dụng
var obj = new Student('Chung',43,'25 Vũ Ngọc Phan',100);
obj.getInfor();
