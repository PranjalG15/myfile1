//https://www.hackerrank.com/auth/login?h_l=body_middle_left_button&h_r=login
require("chromedriver");
let swd=require ("selenium-webdriver");
let browser= new swd.Builder();
let {email,password}=require("../../credentials.json");
//tab--> new tab
let tab=browser.forBrowser("chrome").build();
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
        
    }).then(function() {
        let EditorialBtnP=tab.findElement(swd.By.css(".ui-icon-lock"));
        return EditorialBtnP;
    })   .then( function(eBtn) {
        let EditoralBtnClickedP=eBtn.click();
        return EditoralBtnClickedP;
     })
    //.then(function() {
    //     let unlockBtnP=tab.findElement(swd.By.css(".ui-btn ui-btn-normal.ui-btn-primary"));
    //     return unlockBtnP;
    // })   .then( function(Btn) {
    //     let unlockBtnClickedP=Btn.click();
    //     return unlockBtnClickedP;
    // })
    .then(function () {
      console.log("first question solved");
    })
    

    ////////////////ui-card ui-layer-3 active-card"
    .catch(function (err) {
        console.log(err);
    })
/////////////////////
    function questionSolver() {

    return new Promise(function (resolve, reject) {
        // logic to solve a question
        let allCBTnWSP = tab.findElements(swd.By.css(".challenge-submit-btn"));
        allCBTnWSP.then(function (cBtnArr) {
            let cBtnWillBeClickedP = cBtnArr[0].click();
            return cBtnWillBeClickedP;
        }).then(function () {
            resolve();
        }).catch(function (err) {
            reject();
        })
    })
}