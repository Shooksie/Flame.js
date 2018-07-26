'use strict';

var _lib = require('../lib');

var _testviews = require('./Views/testviews');

var _testviews2 = _interopRequireDefault(_testviews);

require('./styles.css');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function component() {
  return new _lib.flame('body', _testviews2.default);
}

var element = component(); // Store the element to re-render on print.js changes
if (module.hot) {
  module.hot.accept('../lib', function () {
    document.body.innerHTML = "";
    element = component(); // Re-render the "component" to update the click handler
  });
}