let request = require("request");
let cheerio=require("cheerio");
let fs = require("fs");
console.log("Sending Request");
let url = "http://jdm.du.ac.in/notices-eports.html";
// cb will be called when request recieves the data
request(url, cb);
function cb(err, response, html) {
    console.log("Recieved Response");
    if (err == null && response.statusCode == 200) {
        fs.writeFileSync("college_site.html", html);
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
        let $ = cheerio.load(html);
        console.log("``````````````````````````````````````````");
        let notice = $("#content");

     //   for (let i = 0; i < notice.length; i++) {
      //      let notices = notice[i];
       //     let teamName = $(cInning).find("h5").text();
       //     console.log(teamName);
       notices= $(notice.html()).text();
       console.log(notices);
       console.log("``````````````````````````````````````````");
    
    }