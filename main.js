// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var images = [$('#image img').attr('src')].concat(JSON.parse('{"images":[' + $('#wrapper').next('script').html().match(/"images":\[(.*)\]/)[1] + ']}').images);
      for (var i = 0; i < images.length; i++) { chrome.runtime.sendMessage({ "message": "open_new_tab", "url": 'http:' + images[i] }); }
    }
  }
);