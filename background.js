
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
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
  });
