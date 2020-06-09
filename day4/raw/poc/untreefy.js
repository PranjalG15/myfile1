let fs=require("fs");
let path=require("path");
let uniqid= require ("uniqid");
function checkWhetherFile(src){
    return fs.lstatSync(src).isFile()
}
function getContent(src) {
    return fs.readdirSync(src);
}

function untreefy(src,dest,obj) {
    if (checkWhetherFile(src)==true) {
       // console.log(toprint+ "*");
       let oldName=path.basename(src);
       let newName=uniqid();
       obj.newName=newName;
       obj.oldName=oldName;
       obj.isFile=true;
       let destPath=path.join(dest,newName);
       fs.copyFileSync(src,destPath);
       console.log(`File ${oldName} from src copied to ${destPath}`);
    }
    else {
     //   console.log(toprint);
           obj.isFile=false;
           obj.name=path.basename(src);
           obj.children=[];
        let childNames=getContent(src);
      //  console.log(childNames);
        for(let i=0;i<childNames.length;i++) {
            let childPath=path.join(src,childNames[i]);
        //    let cToprint=path.join(toprint,childNames[i]);
        let chobj={};
            untreefy(childPath,dest,chobj);
            obj.children.push(chobj);
        }
    }
}
let src=process.argv[2];
let dest=process.argv[3];
let root={};
//console.log(src);
//view(src,path.basename(src));
untreefy(src,dest,root);
console.log(root);