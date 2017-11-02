/*
 * SnapEngage Customer Engagement Widget
 * Copyright (c) 2008-2017 SnapEngage, LLC
 */

console.log('snapengage.js loaded');

window.onerror = function (msg, url, lineNo, columnNo, error) {
  alert("snapengage.js window.onerror has fired");
};

console.log("SNAPENGAGE.js window.onerror: " + window.onerror);


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