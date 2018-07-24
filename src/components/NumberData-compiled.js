'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Helper = require('../Helper');

var _Helper2 = _interopRequireDefault(_Helper);

var NumberData = function NumberData(_ref) {
    var value = _ref.value;
    var title = _ref.title;
    var _ref$isCurrency = _ref.isCurrency;
    var isCurrency = _ref$isCurrency === undefined ? false : _ref$isCurrency;
    var _ref$maxDigits = _ref.maxDigits;
    var maxDigits = _ref$maxDigits === undefined ? 1 : _ref$maxDigits;
    return _react2['default'].createElement(
        'div',
        { className: 'number-data' },
        _react2['default'].createElement(
            'div',
            { className: 'number--value' },
            _Helper2['default'].getDisplayNumber(value, isCurrency, maxDigits)
        ),
        _react2['default'].createElement(
            'div',
            { className: 'number--title' },
            title
        )
    );
};

exports['default'] = NumberData;
module.exports = exports['default'];

//# sourceMappingURL=NumberData-compiled.js.map