require("chromedriver");
let swd=require ("selenium-webdriver");
let browser= new swd.Builder();
let {email,password}=require("../../credentials.json");
//tab--> new tab
let tab=browser.forBrowser("chrome").build();
(async function() {
    try{
    await tab.get("https://www.hackerrank.com/auth/login?h_l=body_middle_left_button&h_r=login");
    await tab.manage().setTimeouts( {
        implicit:10000
    });
    let inputBoxPromise=tab.findElement(swd.By.css("#input-1"));
    let passwordBoxPromise=tab.findElement(swd.By.css("#input-2"));
    let BeArr=await Promise.all([inputBoxPromise,passwordBoxPromise]);
    inputBox=BeArr[0];
    passwordBox=BeArr[1];
    let inputBoxWillBeFilledP=inputBox.sendKeys(email);
    let passwordBoxWillBeFilledP=passwordBox.sendKeys(password);
    await Promise.all([inputBoxWillBeFilledP,passwordBoxWillBeFilledP]); 
    let loginElement = tab.findElement(swd.By.css("button[data-analytics='LoginPassword']"));
    await loginElement.click();
} catch(err)
    {
        console.log(err);
    }
})()