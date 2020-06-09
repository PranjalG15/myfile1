let fs=require("fs");
let path=require("path");
//src -t
//src -f
module.exports.view=function(){
   // console.log(arguments);
    let src=arguments[0];
    let mode=arguments[1];
    if(mode=="-t")
    {
        viewAsTree(src,"");
    }
    else{
        view(src,path.basename(src));
    }
}
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
