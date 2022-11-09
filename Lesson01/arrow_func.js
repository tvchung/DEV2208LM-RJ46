// hàm thông thường
function func1(a,b){
    console.log("a=",a,"b=",b);
}
func1(100,200);
// normal function
var func2 = function(a,b){
    console.log("a=",a,"b=",b);
}
func2(200,300);
// arrow function
const func3 = (a,b)=>{
    console.log("a=",a,"b=",b);

}
func3(1000,2000);