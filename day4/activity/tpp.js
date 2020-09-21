//let is used for initialization
let input=process.argv.slice(2); //our command is saved in form of an array so we take imput after slicing it
// when we pass a comment we give node tpp.js command......
//in our processing we just need the code after these parts so we slice the code after the point tpp.js

let viewFile=require("./commands/view");// view file is imported from commands
let helpFile=require("./commands/help");// help file is imported from commands
let untreefyFile=require("./commands/untreefy");// untreefy file is imported from commands
let treefyFile=require("./commands/treefy");
let cmd=input[0]; //we have taken the command in input... so 1st element in array in input is our main command
switch(cmd) {     //we are having mainly 4 commands so they are given in switch case
    case "view" : //case 1:view
        viewFile.view(process.argv[3],process.argv[4]); //file in which command file is imported+command+src+dest
        break;  //end of switch case
    case "treefy": //case 2:treefy
       treefyFile.treefy(process.argv[3],process.argv[4]);
        break; //end of switch case
    case "untreefy": //case 3:untreefy
        untreefyFile.untreefyFn(process.argv[3],process.argv[4]); //file in which command file is imported+command+src+dest
        break; //end of switch case
    case "help": //case 4:help
        helpFile.help();//file in which command file is imported+command
        break; //end of switch case
    default:
        console.log("wrong command");//console.log ==> System.out.println();
        break;
}