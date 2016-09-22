// Copyright (c) 2016 Vasco Silva
var active = document.designMode === 'on' ? true : false;

function updateIcon() {
  active = !active;

  if (active) {
    chrome.browserAction.setIcon({path:"icon2.png"});
    chrome.tabs.executeScript({
      code:"document.designMode = 'on';", allFrames: true
    });

  } else {
    chrome.browserAction.setIcon({path:"icon1.png"});
    chrome.tabs.executeScript({
      code:"document.designMode = 'off';", allFrames: true
    });
  }
}

chrome.browserAction.onClicked.addListener(updateIcon);
