module.exports.help=function() {   //export this help file to other modules which can require them anytime
    let a=4                         //initializing a variable
    console.log(`List of all the commands are ${a} 
    1. View src -t: to view a directory as tree
    2. View src -f: to view a directory as flat file
    3. Untreefy src dest: to untreefy src files in directory
    4. Treefy src dest: inverse of untreefy`)
}
// System.out.println()==>console.log
// for writing multiple lines with enter spacing we use " ` `(key under esc key)"
// to add directly a value of a variable we use==> ${variable}
