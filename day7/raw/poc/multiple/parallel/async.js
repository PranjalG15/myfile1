let fs=require("fs");
console.log("before");
function frcb1(err, content) {
    if (err) {
        console.log("Inside err");
        console.log(err);
    } else {
    console.log("Content " + content)
    console.log("Actual After");
}
}
function frcb2(err, content) {
    if (err) {
        console.log("Inside err");
        console.log(err);
    } else {
    console.log("Content " + content)
    console.log("Actual After");
}
}
function frcb3(err, content) {
    if (err) {
        console.log("Inside err");
        console.log(err);
    } else {
    console.log("Content " + content)
    console.log("Actual After");
}
}
fs.readFile("../../f1.txt", frcb1);
fs.readFile("../../f2.txt", frcb2);
fs.readFile("../../f3.txt", frcb3);
console.log("after");