let request = require("request");
let fs = require("fs");
// npm install cheerio
let cheerio = require("cheerio");
console.log("Sending Request");
let url = "https://www.espncricinfo.com/scores/series/19322/india-in-new-zealand-2019-20?view=results";
// cb will be called when request recieves the data

let leaderboard = [], count = 0;
request(url, cb);
function cb(err, response, html) {
    // consol
    console.log("Recieved Response");
    if (err == null && response.statusCode == 200) {
        fs.writeFileSync("series.html", html);
        console.log("File Saved");
        parseSeriesPage(html);
    } else if (response.statusCode == 404) {
        console.log("Page not found");
    } else {
        console.log(err);
        console.log(response.statusCode);
    }
}

function parseSeriesPage(html) {
    console.log("Parsing Html");
    let $ = cheerio.load(html);
    console.log("````````````````````````````````````````");
    let AllCards = $(".col-md-8.col-16");
    for (let i = 0; i < AllCards.length; i++) {
        let mType = $(AllCards[i]).find(".small").text();
        let isValid = mType.includes("ODI") || mType.includes("T20I");
        if (isValid) {
            // console.log(mType);
            // attribute selector
            // let anchor = $(AllCards[i]).find(".match-cta-container a[data-hover='Scorecard']");
            let allAnchors = $(AllCards[i]).find(".match-cta-container a");
            // to get attribute of an element;
            // same server=> request => same server
            let matchLink = $(allAnchors[0]).attr("href");
            // console.log(matchLink);
            let fullLink = `https://www.espncricinfo.com${matchLink}`;
            // console.log(fullLink);
            handleEachMatch(fullLink)

        }
    }


}

// page Link => request => response => recieve=> parseMatch
function handleEachMatch(matchLink) {
    request(matchLink, mcb);
    count++;
    function mcb(err, response, html) {
        // consol
        console.log("Recieved Match Response");
        if (err == null && response.statusCode == 200) {
            // fs.writeFileSync(".html", html);
            console.log("File Saved");
            parseMatch(html);
            count--;
            if (count == 0) {
                console.table(leaderboard);
            }
        } else if (response.statusCode == 404) {
            console.log("Page not found");
        } else {
            console.log(err);
            console.log(response.statusCode);
        }
    }
}
//input=> matchPageHtml=>  get respective teamName,run,type,score of a player
function parseMatch(html) {
    let $ = cheerio.load(html);
    let format = $(".desc.text-truncate").text();
    if (format.includes("ODI") == true) {
        format = "ODI"
    } else {
        format = "T20I"
    }
    // console.log(type);
    // scorecards
    let innings = $(".card.content-block.match-scorecard-table");
    innings = innings.slice(0, 2);
    for (let i = 0; i < innings.length; i++) {
        let cInning = innings[i];
        let teamName = $(cInning).find("h5").text();
        teamName = teamName.split("Innings").shift();
        console.log(teamName);
        let BatsmenList = $(cInning).find(".table.batsman tbody tr");
        for (let j = 0; j < BatsmenList.length; j++) {
            let bCols = $(BatsmenList[j]).find("td");
            let isBatsManRow = $(bCols[0]).hasClass("batsman-cell");
            if (isBatsManRow) {
                let batsManName = $(bCols[0]).text();
                let runs = $(bCols[2]).text();
               // console.log( batsManName + " " + runs);
               AddToLeaderBoard(batsManName, teamName, runs, format)
            }
        }
       // console.log("###############################");
    }
   // console.log("```````````````````````````````````````````````````````````````````");
}
// 
// create leaderboard
function AddToLeaderBoard(name, team, runs, format) {
    runs = Number(runs)
    for (let i = 0; i < leaderboard.length; i++) {
        let cplayerInfo = leaderboard[i];
        let match = cplayerInfo.Name == name && cplayerInfo.Team == team && cplayerInfo.Format == format;
        // console.log(ma)
        if (match == true) {
            // update
            cplayerInfo.TotalRuns += runs;
            return;
        }
    }
    // create a new entry and push to leaderboard
    let playerInfo = {};
    playerInfo.TotalRuns = runs;
    playerInfo.Name = name;
    playerInfo.Team = team;
    playerInfo.Format = format;
    leaderboard.push(playerInfo);
}