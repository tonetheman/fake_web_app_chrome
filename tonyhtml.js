console.log("tonyhtml.js loaded");

window.onload = function() {
  var wv = document.getElementById("wv");
  console.log("got wv");
  console.log(wv);
  wv.addEventListener("loadstart", function() {
    console.log("loading webview started...");
  });

  /*
  wv.addContentScripts([
    {
      name : "testclick",
      matches : [ "https://crossbrowsertesting.com/bookmarklet/bookmarkletchromeext.php"],
      js :  { files: ["tonycontentscript.js"] },
      run_at: "document_start"
    }
  ]);
  */
  /*
  // this works when run here
  var id = "gihefhgcfelceogbkmhcffhlnadljppe";
  chrome.runtime.sendMessage(id,
    {getTargetData: true}, function(resp) {
      console.log("sent message got resp");
      console.log(resp);

    });
    */
}


chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
  console.log(response.farewell);
});
