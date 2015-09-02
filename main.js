'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');
require('crash-reporter').start();

var mainWindow = null;
app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 980, height: 780, 'node-integration': false});
  // mainWindow.loadUrl('file://' + __dirname + '/index.html');
  mainWindow.loadUrl('https://www.facebook.com');
  // mainWindow.openDevTools();
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
