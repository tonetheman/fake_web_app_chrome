
console.log("background loaded");


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log("TONY MESSAGE IN BACKGROUND:",request,sender);
    if (request.getTargetData) {
      console.log("need to open tab now");
      chrome.browser.openTab({
        url: "http://google.com"
      });
    }
    //console.log(sender.tab ?
    //            "from a content script:" + sender.tab.url :
    //            "from the extension");
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
  });

chrome.app.runtime.onLaunched.addListener(function(launchData) {
    console.log('onLaunched with launchdata',launchData)

    var info = {
        type:'onLaunched',
        launchData: launchData
    }

    // TONY: this causes an exception
    // create must use a local resource not a web page
    chrome.app.window.create("tony.html");

    //console.log('window', window)

    // CODE I COMMENTED OUT YESTERDAY
    /*var opts = { id: 'index' }
    chrome.app.window.create('index.html',  opts, function(mainWindow) {
        window.mainWindow = mainWindow;
	});
    */
    //console.log('launched')
    // TONY
    // this does not work
    // we cnanot get tabs
    //chrome.browser.openTab({
    //  url: "https://crossbrowsertesting.com"
    //});

    //window.open("https://crossbrowsertesting.com/local-testing");

});
