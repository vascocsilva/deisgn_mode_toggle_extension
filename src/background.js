// Copyright (c) 2016 Vasco Silva
var active = document.designMode === 'on' ? true : false;

function changeMode(mode) {
  var mode = mode || 'on';
  var code = 'document.designMode = "' + mode + '"';

  chrome.browserAction.setIcon({ path: mode + '.png' });
  chrome.tabs.executeScript({
    code: code, allFrames: true
  });
}

function toggleDesignMode() {
  active = !active;

  if (active) {
    changeMode('on');
  } else {
    changeMode('off');
  }
}

chrome.browserAction.onClicked.addListener(toggleDesignMode);
