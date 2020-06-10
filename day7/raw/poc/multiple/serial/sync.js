let fs=require("fs");
console.log("before");
let content=fs.readFileSync("../../f1.txt");
console.log("Content " + content)
    console.log("Actual After 1");

    content=fs.readFileSync("../../f2.txt");

    console.log("Content " + content)
    console.log("Actual After 2");


    content=fs.readFileSync("../../f3.txt",content);
    console.log("Content " + content)
    console.log("Actual After 3");

console.log("after");