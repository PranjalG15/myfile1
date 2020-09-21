
// console.log("I ran")
function changeImages() {
    let imgArr = document.querySelectorAll("img");
    let images = ["images/1.jpg",
    "images/2.png"
];

    for (let i = 0; i < imgArr.length; i++) {
        // console.log(chrome.extension.getURL(images[0]))
        let idx = Math.floor(Math.random() * images.length);
        let url = chrome.extension.getURL(images[idx])
        console.log(url);
        imgArr[i].src = url;

    }
}

// response
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        // console.log(request)
        sendResponse("Hello from content");
        // console.log(sender);
        changeImages();
    });