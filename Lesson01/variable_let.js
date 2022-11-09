let x = 100;
function letDemo(){
    let x=200;
    console.log("Bên trong HÀM x = ",x);
    if (x==200){
        let x=2;
        console.log("Bên trong if x = ",x);
    }
    console.log("Bên ngoài if x = ",x);
}

// bên ngoài
console.log("Bên ngoài x = ",x); //  x==100
letDemo(); // x==200

// test var 
var y = 1000;
function varDemo(){
    var y=2000;
    console.log("Bên trong y = ",y);
    if(y==2000){
        var y=3;
        console.log("Bên trong if y = ",y);
    }
    console.log("Bên ngoài if y = ",y);
}
varDemo();
console.log("Bên ngoài y = ",y);
varDemo();