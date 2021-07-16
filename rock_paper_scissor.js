var readlinesync = require("readline-sync");
var choose = readlinesync.question("enter your choice:");
var choices = ["rock","paper","scissor"]
var randome = Math.floor((Math.random() * 3) + 1);
var computer_move = choices[randome]
console.log(computer_move)
if (choose === computer_move){
    console.log("its a draw")
}
else if(choose === "rock" && computer_move=== "paper"){
    console.log("you loose")
}
else if(choose === "rock" && computer_move === "scissor"){
    console.log("you won")
}
else if(choose === "paper" && computer_move === "rock"){
    console.log("you won")
}
else if(choose === "paper" && computer_move === "scissor"){
    console.log("you loose")
}
else if(choose === "scissor" && computer_move === "rock"){
    console.log("you loose")
}
else if(choose === "scissor" && computer_move === "paper"){
    console.log("you win")
}
else{
    console.log("invalid input")
}