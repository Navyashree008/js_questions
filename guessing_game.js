var random = Math.floor((Math.random() * 10) + 1);
var readlinesync = require("readline-sync");
var name = readlinesync.question("enter your name")
console.log("hi.."+name)
console.log("welcome to the game")
var choose = readlinesync.questionInt("choose the level of game you can choose1,2,3 according to level:")
if(choose === 1){
    for(i = 1;i <=10;i++){
        var guess = readlinesync.questionInt("enter your guess:");
        if (guess === random){
            console.log("you won");
            break
        }
        else if(guess < random){
            console.log("its less than number");
        }
        else{
            console.log("its greater");
        }
        console.log(10-i+"chance left");
    }
    console.log("sorry... you lost")
}
else if(choose === 2){
    for(i = 1;i <=5;i++){
        var guess = readlinesync.questionInt("enter your guess:");
        if (guess === random){
            console.log("you won");
            break
        }
        else if(guess < random){
            console.log("its less than number");
        }
        else{
            console.log("its greater");
        }
        console.log(5-i+"chance left");
    }
    console.log("sorry... you lost")
}
else{
    for(i = 1;i <=3;i++){
        var guess = readlinesync.questionInt("enter your guess:");
        if (guess === random){
            console.log("you won");
            break
        }
        else if(guess < random){
            console.log("its less than number");
        }
        else{
            console.log("its greater");
        }
        console.log(3-i+"chance left");
    }
    console.log("sorry... you lost")
}
