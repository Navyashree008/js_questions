var readlinesync = require("readline-sync");
var string = readlinesync.question("enter a string")
var check_string = ""
for(var i = string.length-1;i >= 0;i--){
    check_string+=string[i];
    console.log(check_string);
}
if(string === check_string){
    console.log("its a palindrome")
}
else{
    console.log("its not a palindrome")
}