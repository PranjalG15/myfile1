let fs=require("fs");
console.log("before");
let files=["../../f1.txt","../../f2.txt","../../f3.txt","../../f4.txt","../../f5.txt"];
for(i=0;i<files.length;i++){
  let content= fs.readFileSync(files[i]) 
        console.log(`DATA OF ${i+1} ARRIVED`);
        console.log("Content " + content)
}   
    

console.log("after");