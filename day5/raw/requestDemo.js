let request=require("request");
let fs=require("fs");
console.log("Sending Request");
let url="https://www.espncricinfo.com/scores/series/19322/india-in-new-zealand-2019-20?view=results"
request(url,cb);
function cb(err,response,html) {
    console.log("Recieved Response");
    if (err==null && response.statusCode==200) {
        fs.writeFileSync("index.html",html);
        console.log("File saved");
    }
    else if(response.ststusCode==404) {
        console.log("page not found");
    }
    else {
        console.log(err);
        console.log(response.statusCode);
    }
}