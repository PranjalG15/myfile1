let fs=require("fs");
console.log("before");
let files=["../../f1.txt","../../f2.txt","../../f3.txt","../../f4.txt","../../f5.txt"];
for(i=0;i<files.length;i++){
    fs.readFile(files[i], frcb);
    function frcb(err, content) {
        if (err) {
            console.log("Inside err");
            console.log(err);
        } else {
        console.log(`DATA ARRIVED`);
        console.log("Content " + content)
        
    }
}
}

console.log("after");