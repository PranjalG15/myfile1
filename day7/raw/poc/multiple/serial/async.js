let fs=require("fs");
console.log("before");
function frcb1(err, content) {
    if (err) {
        console.log("Inside err");
        console.log(err);
    } else {
    console.log("Content " + content)
    console.log("Actual After 1");
    fs.readFile("../../f2.txt", frcb2);
}
}
function frcb2(err, content) {
    if (err) {
        console.log("Inside err");
        console.log(err);
    } else {
    console.log("Content " + content)
    console.log("Actual After 2");
    fs.readFile("../../f3.txt", frcb3);
}
}
function frcb3(err, content) {
    if (err) {
        console.log("Inside err");
        console.log(err);
    } else {
    console.log("Content " + content)
    console.log("Actual After 3");
}
}
fs.readFile("../../f1.txt", frcb1);


console.log("after");

