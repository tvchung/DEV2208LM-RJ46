class person{
    // field
    name='';
    age=0;
    address='';

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

// sử dụng lớp
// tạo ra các đối tượng từ lớp
var obj = new person();
console.log(obj);
obj = new person("Chung",45,'25 Vũ Ngọc Phan');
console.log(obj);
obj = new person();
obj.setName("Devmaster");
obj.setAge(5);
obj.setAddress("25 Vũ Ngọc Phan");
console.log(obj);
console.log("Name:",obj.getName());
console.log("Age:",obj.getAge());
console.log("Address:",obj.getAddress());