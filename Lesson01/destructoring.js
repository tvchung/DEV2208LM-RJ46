// mảng
const arr = [1,2,3,4,5,6];

let [a,b]=arr;
console.log("a=",a);
console.log("b=",b);
console.log("arr=",arr);

[a,b,...next]=arr;
console.log("a=",a);
console.log("b=",b);
console.log("next=",...next);

// đối tượng
const person = {
    name:'Chung Trịnh',
    age:45,
    address:"25 Vũ Ngọc Phan"
}
console.log(person);

var {name,age} = person;
console.log("Name:",name);
console.log("age:",age);

var {name1,age} = person;
console.log("Name:",name1);
console.log("age:",age);

var {name,address} = person;
console.log("Name:",name);
console.log("address:",address);