//  tham số mặc định
// đại diện cho các tham số còn lại
// khi gọi hàm thì không giới hạn đối số truyền vào
// định nghĩa bằng cú pháp ...name_param
function sum(num1, num2, ...num){
    console.log(num1);
    console.log(num2);
    console.log(...num);
    let s = num1+num2;
    num.forEach(element => {
        s +=element;
    });
    console.log("Tong:", s);
}
// 
sum(100,200);
sum(100,200,300,400);
// sum(100,200,300,400,500,600,700);