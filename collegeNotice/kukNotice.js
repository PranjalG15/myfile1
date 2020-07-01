let request = require("request");
let fs = require("fs");
let emailLogic = require("./emailLogic");

let cheerio = require("cheerio");
console.log("Sending request to the website");
let url = "https://www.kuk.ac.in/hpcontent.php?action=hpcontent&id=NTI=";
///////////////////////////
let allNotices=[];
function cb(err, response, html) {
    console.log("Recieved Response");
    if (err == null && response.statusCode == 200) {
        fs.writeFileSync("kukNotice.html", html);
        console.log("File Saved");
       parseHtml(html);
     } else if (response.statusCode == 404) {
        console.log("Page not found");
    } else {
       console.log(err);
      console.log(response.statusCode);
    }
}
//////////////////////////
// function parseHtml(html) {
//     let cAllNotices=[];
//     let $=cheerio.load(html);
//     let tBodyArr=$("width: 509px table tbody");
//     console.log(tBodyArr);
//     let trArray = $(tBodyArr[i]).find("tr");
//     console.log(trArray);
//     for (let i = 0; i < trArray.length; i++) {
//     let columns = $(trArray).find("td");
//         let notice = $(columns[1]).text();
//         let date = $(columns[0]).text();
//         let noticeObj = {}
//         noticeObj.notice = notice;
//         noticeObj.date = date;
//         cCallNotices.push(noticeObj);
// }
// if (allNotices.length == 0) {
//     allNotices = cCallNotices;
//     console.table(allNotices);
//     let html = fs.readFileSync("index.html") + "";
//     let allNoticesHtml = "";
//     for (let i = 0; i < allNotices.length; i++) {
//         let cNotice = allNotices[i];
//         let currentNOtice = `<tr><td>${cNotice.notice}</td> <td>${cNotice.date}</td></tr>`
//         allNoticesHtml += currentNOtice;
//     }
//     html = html.replace("{{template}}", allNoticesHtml);
//      console.log(html);
//    // emailLogic.sendEmail(html);
// } else {
//     if (allNotices.length == cCallNotices.length) {
//         console.log("No new Notice")
//     } else {
//         let newNotices = cCallNotices.length - allNotices.length;
//         console.log("New Notices");
//         for (let i = 0; i < newNotices; i++) {
//             allNotices.unshift(cCallNotices[i]);
//             console.table(cCallNotices[i]);
//         }
//     }
// }
// }
request(url, cb);