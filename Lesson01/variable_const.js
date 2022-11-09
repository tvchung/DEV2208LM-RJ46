const x = 100;
console.log("x=",x);
function constDemo(){
   // x=200; // lỗi ở đây, const không cho phép gán lại
    console.log("x=",x);
}
// 
constDemo();
function constDemo1(){
    const x = 1000;
    console.log("x=",x);
}
constDemo1();
console.log("Ngoai x=",x);