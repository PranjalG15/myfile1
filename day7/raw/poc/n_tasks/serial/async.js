let fs = require("fs");
console.log("before");
let files = ["../../f1.txt", "../../f2.txt", "../../f3.txt", "../../f4.txt", "../../f5.txt"];

let i = 0;
while (i < files.length) {
    fs.readFile(files[0], frcb);

    function frcb(err, content) {
        if (err) {
            console.log("Inside err");
            console.log(err);
        } else {
            console.log(`DATA ARRIVED`);
            console.log("Content " + content)

            fs.readFile(files[i + 1], frcb);
            i++;
        }
    }
}
    

console.log("after");