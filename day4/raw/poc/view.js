let fs=require("fs");
let path=require("path");
function checkWhetherFile(src){
    return fs.lstatSync(src).isFile()
}
function getContent(src) {
    return fs.readdirSync(src);
}
////////////view function(main)///////////////////////
function view(src,toprint) {
    if (checkWhetherFile(src)==true) {
        console.log(toprint+ "*");
    }
    else {
        console.log(toprint);
        let childNames=getContent(src);
      //  console.log(childNames);
        for(let i=0;i<childNames.length;i++) {
            let childPath=path.join(src,childNames[i]);
            let cToprint=path.join(toprint,childNames[i]);
            view(childPath,cToprint);
        }
    }
}

function viewAsTree(src,indent) {
    if (checkWhetherFile(src)==true) {
        console.log(indent +" > "+ path.basename(src) + "*");
    }
    else {
        console.log(indent + " > "+ path.basename(src));
        let childNames=getContent(src);
      //  console.log(childNames);
        for(let i=0;i<childNames.length;i++) {
            let childPath=path.join(src,childNames[i]);
            
            viewAsTree(childPath, indent + "  ");
        }
    }
}
let src=process.argv[2];
//console.log(src);
//view(src,path.basename(src));
viewAsTree(src,"");