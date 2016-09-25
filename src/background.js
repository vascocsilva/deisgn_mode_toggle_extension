//     _           _                                   _        _                    _
//  __| | ___  ___(_) __ _ _ __    _ __ ___   ___   __| | ___  | |_ ___   __ _  __ _| | ___
// / _` |/ _ \/ __| |/ _` | '_ \  | '_ ` _ \ / _ \ / _` |/ _ \ | __/ _ \ / _` |/ _` | |/ _ \
// | (_||  __/\__ \ | (_| | | | | | | | | | | (_) | (_| |  __/ | || (_) | (_| | (_| | |  __/
// \__,_|\___||___/_|\__, |_| |_| |_| |_| |_|\___/ \__,_|\___|  \__\___/ \__, |\__, |_|\___|
//                    |___/                                               |___/ |___/   2016
// author: Vasco Silva (vasco.s.rebolo@gmail.com - https://github.com/vascocsilva)

var active = document.designMode === 'on' ? true : false;

// Change document design mode to the given state (on/off)
// and update extension icon accordingly
// @params string mode
function changeMode(mode) {
  var mode = mode || 'on';
  var code = 'document.designMode = "' + mode + '"';

  chrome.browserAction.setIcon({ path: mode + '.png' });
  chrome.tabs.executeScript({
    code: code, allFrames: true
  });
}

// Gets called whenever the extension button is clicked
// Toggles the state of document design mode
function toggleDesignMode() {
  active = !active;

  if (active) {
    changeMode('on');
  } else {
    changeMode('off');
  }
}

// Listener for when the extension button is clicked
chrome.browserAction.onClicked.addListener(toggleDesignMode);


chrome.tabs.onUpdated.addListener(function() {
  console.log('cenas');
  chrome.tabs.executeScript({
    code: 'document.body.style.background = "red"', allFrames: true
  });
});
