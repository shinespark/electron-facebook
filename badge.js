'use strict';
var remote = require('remote');
var app = remote.require('app');

var webview = document.getElementById('mainWebView');
var title = '';
var unreadCount = 0;

// check title every second
setInterval(function() {
  title = webview.getTitle();
  var result = title.match(/\((\d+)\)/);
  if(result) {
    unreadCount = result[1];
  } else {
    unreadCount = '';
  }
  app.dock.setBadge(unreadCount);
}, 1000);
