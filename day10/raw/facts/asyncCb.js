let fs=require("fs");
console.log("Before");
fs.readFile("f1.txt",function(err,content) {
    if(err) {
        console.log(err)
}
else {
    console.log("content :"+content)
}
})
console.log("After");