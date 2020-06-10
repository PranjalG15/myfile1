let request = require("request");
let cheerio=require("cheerio");
let fs = require("fs");
console.log("Sending Request");
let url = "https://www.espncricinfo.com/scores/series/19322/india-in-new-zealand-2019-20?view=results";
// cb will be called when request recieves the data
request(url, cb);
function cb(err, response, html) {
    console.log("Recieved Response");
    if (err == null && response.statusCode == 200) {
        fs.writeFileSync("index.html", html);
        console.log("File Saved");
        parseHtml(html);
    } else if (response.statusCode == 404) {
        console.log("Page not found");
    } else {
        console.log(err);
        console.log(response.statusCode);
    }
}
function parseHtml(html) {
    console.log("Parsing Html");
    let $=cheerio.load(html);
    let title=$('h5.header-title.label');
    console.log("...................................");
    console.loglog(title.text());
    console.log("...................................");
}