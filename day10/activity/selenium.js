//https://www.hackerrank.com/auth/login?h_l=body_middle_left_button&h_r=login
require("chromedriver");
let swd=require ("selenium-webdriver");
let browser= new swd.Builder();
let {email,password}=require("../../credentials.json");
//tab--> new tab
let tab=browser.forBrowser("chrome").build();
let gCodesElements, gcInputBox, gTextArea;
let tabWillBeOpenedPromise=tab.get("https://www.hackerrank.com/auth/login?h_l=body_middle_left_button&h_r=login");
tabWillBeOpenedPromise
    .then (function() {
        //implicit timeout
        let findTimeOutP=tab.manage().setTimeouts( {
            implicit:10000
        });
        return  findTimeOutP;
    })
    //email id box input
    .then(function() {
        //console.log("home page opened);
        let inputBoxPromise=tab.findElement(swd.By.css("#input-1"));
        let passwordBoxPromise=tab.findElement(swd.By.css("#input-2"));
        return Promise.all([inputBoxPromise,passwordBoxPromise]);
        
    })
    //email id filled
    .then(function (inputArr) {
        inputBox=inputArr[0];
        passwordBox=inputArr[1];
        let inputBoxWillBeFilledP=inputBox.sendKeys(email);
        let passwordBoxWillBeFilledP=passwordBox.sendKeys(password);
        return Promise.all([inputBoxWillBeFilledP,passwordBoxWillBeFilledP]); 
    })
    //login button found
    .then(function () {
        let loginWillSelectedP = tab.findElement(swd.By.css("button[data-analytics='LoginPassword']"));
        return loginWillSelectedP;
        
    })//login button clicked
    .then(function (loginBtn) {
        let loginWillBeClickedP = loginBtn.click();
        return loginWillBeClickedP;
    }) //interview prep button found
    .then(function () {
        let IpBtnWillBeFoundP =
         tab.findElement(swd.By.css("h3[title='Interview Preparation Kit']"));
        return IpBtnWillBeFoundP;
    })   // interview prep button clicked
    .then(function (IpBtn) {
        let IPBtnWillBeClickedP = IpBtn.click();
        return IPBtnWillBeClickedP;
    })//warmup challenge button found
    .then(function () {
        let wUCBtnWillSelectedP = tab.findElement(swd.By.css("a[data-attr1='warmup']"));
        return wUCBtnWillSelectedP;
    })//warmup challenge button clicked
    .then(function (wUCBtn) {
        let wBtnWillBeClickedP = wUCBtn.click();
        return wBtnWillBeClickedP;
    }).then(function () {
        console.log("Reached warm challenges page");
        let urlOfQp=tab.getCurrentUrl();
        return urlOfQp;
    })//1st question
    .then(function (urlOfQp) {
        let questionWillBeSolverP=questionSolver();
        return questionWillBeSolverP;
    })
    .then(function () {
      console.log("first question solved");
    })
    .catch(function (err) {
        console.log(err);
    })
//////////////////////////////////////////////////////
    function questionSolver() {

    return new Promise(function (resolve, reject) {
        // logic to solve a question
        let allCBTnWSP = tab.findElements(swd.By.css(".challenge-submit-btn"));
        allCBTnWSP.then(function (cBtnArr) {
            let cBtnWillBeClickedP = cBtnArr[0].click();
            return cBtnWillBeClickedP;
        }).then(function() {
            let EditorialBtnP=tab.findElement(swd.By.css("a[data-attr2='Editorial']"));
            return EditorialBtnP;
        })   .then( function(eBtn) {
            let EditoralBtnClickedP=eBtn.click();
            return EditoralBtnClickedP;
         })
         //check if there is lock button then select it and find the solution
        .then(function() {
            let hlBtnP=handleLockBtn();
            return hlBtnP;
         })
         .then(function() {
             let cCodeWillBeCopied=copyCode();
             return  cCodeWillBeCopied;
         }).then(function (code) {
            let codeWillBepastedP = pasteCode(code);
            return codeWillBepastedP;
        })
        .then(function () {
            resolve();
        }).catch(function (err) {
            console.log(err);
            reject();
        })
    })
}
function handleLockBtn() {
    return  new Promise(function(resolve,reject) {
        let lockBtnWillBeFP=tab.findElement(swd.By.css(".editorial-content-locked button.ui-btn.ui-btn-normal"))
        lockBtnWillBeFP
        .then(function(lockBtn) {
            let lBtnWillBeCP=lockBtn.click();
            return lBtnWillBeCP;
        }).then(function() {
            resolve(); 
        }).catch (function(err){
            console.log("Lock button was not found");
            resolve();
        })
    })
}
/////////////////////////check this code for clearance of concept////////////////////////
function copyCode() {
    return new Promise(function (resolve, reject) {
        // all name
        let allLangElementP = tab.findElements(swd.By.css(".hackdown-content h3"));
        // get all the code array
        let allcodeEementP = tab.findElements(swd.By.css(".hackdown-content .highlight"));
        let bothArrayP = Promise.all([allLangElementP, allcodeEementP]);
        bothArrayP
            .then(function (bothArrays) {
                let langsElements = bothArrays[0];
                gCodesElements = bothArrays[1];
                let allLangTextP = [];
                for (let i = 0; i < langsElements.length; i++) {
                    let cLangP = langsElements[i].getText();
                    allLangTextP.push(cLangP);
                }
                return Promise.all(allLangTextP);
            })
            .then(function (allLangs) {
                let codeOfCP;
                for (let i = 0; i < allLangs.length; i++) {
                    if (allLangs[i].includes("C++")) {
                        codeOfCP = gCodesElements[i].getText();
                        break;
                    }
                }
                return codeOfCP;
            }).then(function (code) {
                console.log(code)
                resolve(code);
                console.log("resolved was called");
            }).catch(function (err) {
                reject(err);
            })
    });
}

function pasteCode(code) {
    return new Promise(function (resolve, reject) {
        // click on problem tab
        let pTabWillBeSelectedP = tab.findElement(swd.By.css("li#Problem"));
        pTabWillBeSelectedP.then(function (pTab) {
            let pTwillBeClickedP = pTab.click();
            return pTwillBeClickedP;
        }).then(function () {
            let inputBoxWBeSP = tab.findElement(swd.By.css(".custom-input-checkbox"));
            return inputBoxWBeSP;
        }).then(function (inputBox) {
            let inputbWillBeCP = inputBox.click();
            return inputbWillBeCP;
        }).then(function () {
            let cInputWillBeSelectedP = tab.findElement(swd.By.css(".custominput"));
            return cInputWillBeSelectedP;
        }).then(function (cInputBox) {
            gcInputBox = cInputBox;
            let codeWillBeEnteredP = cInputBox.sendKeys(code);
            return codeWillBeEnteredP;
        }).then(function () {
            let ctrlAWillBeSendP = gcInputBox.sendKeys(swd.Key.CONTROL + "a");
            return ctrlAWillBeSendP;
        }).then(function () {
            let ctrlXWillBeSendP = gcInputBox.sendKeys(swd.Key.CONTROL + "x");
            return ctrlXWillBeSendP;
        })
        .then(function () {
            let tAreaP = tab.findElement(swd.By.css("textarea"));
           // console.log(2);
            return tAreaP;
        }).then(
            function (tArea) {
            gTextArea = tArea;
            let CodeWillBeEP = tArea.sendKeys(swd.Key.CONTROL + "a");
            // console.log(3);
            return CodeWillBeEP;
        }).then(function () {
            let ctrlVWillBeSendP = gTextArea.sendKeys(swd.Key.CONTROL + "v");
            return ctrlVWillBeSendP;
        }).then(function () {
            let submitCodeBtnWillBeS = tab.findElement(swd.By.css("button.hr-monaco-submit"));
            return submitCodeBtnWillBeS;
        }).then(function (submitBtn) {
            let submitBtnWillBeClickedP = submitBtn.click();
            return submitBtnWillBeClickedP;
        })
        .then(function () {
            resolve();
        }).catch(function (err) {
            reject(err);
        })
        // write the code 
        // submit the code 
    })
}