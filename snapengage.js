/*
 * SnapEngage Customer Engagement Widget
 * Copyright (c) 2008-2017 SnapEngage, LLC
 */

console.log('snapengage.js loaded');


window.onerror = function (msg, url, lineNo, columnNo, error) {
  console.log("window onerror fired");
  var string = msg.toLowerCase();
  var substring = "script error";
  alert("custom window.onerror has fired");
  if (string.indexOf(substring) > -1) {
    alert('Script Error: ' + msg);
  } else {
    var message = [
      'Message: ' + msg,
      'URL: ' + url,
      'Line: ' + lineNo,
      'Column: ' + columnNo,
      'Error object: ' + error.stack
    ].join(' - ');

    alert(message);
  }

  return false;
};

// This DOES bubble up to call window.onerror();
// somethingggg();

var SnapEngage = function () {

  return {
    hello: function () {
      console.log('hello');
      // console.log('window.onerror: ' + window.onerror);

      // This does not bubble up to call window.onerror()
      somethinggggg();


    }

  };

}();

// SnapEngage.hello();