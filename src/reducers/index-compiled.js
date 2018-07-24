'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _redux = require('redux');

var _page = require('./page');

var _page2 = _interopRequireDefault(_page);

var _selectedCharity = require('./selectedCharity');

var _selectedCharity2 = _interopRequireDefault(_selectedCharity);

var _selectedComparison = require('./selectedComparison');

var _selectedComparison2 = _interopRequireDefault(_selectedComparison);

var _selectedYear = require('./selectedYear');

var _selectedYear2 = _interopRequireDefault(_selectedYear);

var _bubbleExpand = require('./bubbleExpand');

var _bubbleExpand2 = _interopRequireDefault(_bubbleExpand);

var reducers = { page: _page2['default'], selectedCharity: _selectedCharity2['default'], selectedComparison: _selectedComparison2['default'], selectedYear: _selectedYear2['default'], bubbleExpand: _bubbleExpand2['default'] };
var combined = (0, _redux.combineReducers)(reducers);
exports['default'] = combined;
module.exports = exports['default'];

//# sourceMappingURL=index-compiled.js.map