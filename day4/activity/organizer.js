#!/usr/bin/env node
let fs=require("fs");
let path=require("path");
let utility=require("./utility");
function checkWhetherFile(src){
    return fs.lstatSync(src).isFile()
}
function getContent(src) {
    return fs.readdirSync(src);
}
function getExtension(src){
    let ext=src.split(".").pop();
    return ext;
} 
function sendFile(dest,category,src)
{
    console.log(category)
    let categoryPath=path.join(dest,category);
    if(fs.existsSync(categoryPath)==false){
        fs.mkdirSync(categoryPath);
    }
    let fName=path.basename(src);
    let cPath=path.join(categoryPath,fName);
    fsy.copFileSync(src,cPath);
}
function getCategory(ext) {
    let types=utility.types;
    for(let category in types) {
        for (let i=0;i<types[category].length;i++) {
            if(ext==types[category][i]) {
                console.log  ("inside get category "+ category);
                return category;
            }
        }
    }
    return "others";
}
function organizer(src,dest) {
    if (checkWhetherFile(src)==true) {
       // console.log(toprint+ "*");
       let ext=getExtension(src);
       let category=getCategory(ext);
       if (category==null) {
           category="others";
       }
      // console.log(category);
       sendFile(dest,category,src);
    }
    else {
        let childNames=getContent(src);
     //   console.log(toprint);
      //  console.log(childNames);
        for(let i=0;i<childNames.length;i++) {
            if(childNames[i]=="organized_files") {
                continue;
            }
            let childPath=path.join(src,childNames[i]);
        //    let cToprint=path.join(toprint,childNames[i]);
        organizer(childPath,dest);
        }
    }
}


let src=process.argv[2];
let dest=path.join(src,"organized_files")
if (fs.existsSync(dest) == false) {
    fs.mkdirSync(dest);
}
organizer(src,dest);


//node "C:\Users\hp\Desktop\dev\day4\activity\organizer.js" "C:\Users\hp\Desktop\my files"