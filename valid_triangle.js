var readlinesync = require("readline-sync");
var side1 = readlinesync.questionInt("enter a side1:");
var side2 = readlinesync.questionInt("enter a side2:");
var side3 = readlinesync.questionInt("enter a side3:");
if(side1+side2 > side3){
    console.log("its valid")
}
else if(side2+side3 > side1){
    console.log("its valid")
}
else if(side3+side1 > side2){
    console.log("its valid")
}
else{
    console.log("its not valid")
}