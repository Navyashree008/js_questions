var readlinesync = require("readline-sync");
var alphabet = readlinesync.question("enter any alpabet:");
if (alphabet === "a" || alphabet ==="e" || alphabet ==="i" || alphabet ==="o"|| alphabet === "u"|| alphabet === "A" || alphabet ==="E" || alphabet ==="I" ||alphabet === "O" || alphabet === "U"){
    console.log("its a vowel")
}
else{
    console.log("its not a vowel")
}
