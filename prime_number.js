var readlinesync = require("readline-sync");
var num = readlinesync.questionInt("enter a number:")
var c = 0;
if(num > 0){
    for(var i = 1;i <= num;i++){
        if(num % i === 0){
            c+=1
        }
    }
    if(c > 2){
        console.log("it's not a prime number")
    }
    else{
        console.log("its a prime number")
    }
}