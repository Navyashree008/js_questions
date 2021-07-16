// var readlinesync = require("readline-sync");
// var num = readlinesync.questionInt("enter a number:");
// var count = 0;
// var i = 2;
// while(true){
//     var c = 0;
//     var j = 1;
//     while(j <= i){
//         if(i % j === 0){
//             c+=1
//         }
//         j++
//     if (c === 2){
//             console.log(i)
//             count+=1
//         }
//     }
//     i++
//     if(count === num){
//         break
//     }
// }

// num = int(input("enter n number"))
// i = 2
// count = 0
// while True:
//     c = 0
//     j = 1
//     while j <= i:
//         if i % j == 0:
//             c+=1
//         j+=1
//     # i+=1
//     if c == 2:
//         print(i)
//         count+=1
//     i+=1
//     if count == num:
//         break

const campus={"camp_name":"Bangalore_campus","establish":2016,"election":"three_months"}
for(let pro in campus){
 console.log(campus[pro])
}
console.log("_--------------------------") 
for(let pro of campus){
 console.log(pro)
}
