// hàm
// gán giá trị khi khai báo biến parameter
function add(num1, num2=100){
    return num1+num2;
}
// gọi thực hiện
console.log("add:",add(100));
console.log("add:",add(100,200));

// gán giá trị bên trong
function sum(num1,num2){
   //  num1 = num1 || 1000; 
   // tham số mặt định, liệt kê sau các tham số thông thường
    num2 = num2 || 1000;
    return num1+num2;
}

console.log("sum:", sum(100));