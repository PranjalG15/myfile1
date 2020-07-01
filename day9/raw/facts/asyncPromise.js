let fs=require("fs");
console.log("Before");
let readFilePromise=fs.promises.readFile("f1.txt");
readFilePromise.then(function(data) {
    console.log("INSIDE THEN");
    console.log("CONTENT:"+data);
})
readFilePromise.catch(function(err) {
    console.log("INSIDE Catch");
    console.log(err);
})
console.log("After");