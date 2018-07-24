'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Helper = require('../Helper');

var _Helper2 = _interopRequireDefault(_Helper);

var Heatmap = function Heatmap(_ref) {
    var list = _ref.list;
    var getObject = _ref.getObject;
    var getValue = _ref.getValue;
    var maxValue = _ref.maxValue;
    var colorClass = _ref.colorClass;
    return _react2['default'].createElement(
        'div',
        { className: 'heatmap' },
        list.map(function (l) {
            var obj = getObject(l);
            var val = getValue(l);
            return _react2['default'].createElement(
                'div',
                { key: l, className: 'heatmap-cell' },
                _react2['default'].createElement(
                    'div',
                    null,
                    _react2['default'].createElement('i', { className: 'fa ' + obj.icon }),
                    _react2['default'].createElement(
                        'span',
                        null,
                        obj.short
                    )
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'heatmap-' + parseInt(val * 100 / maxValue / 10) + ' ' + colorClass },
                    _Helper2['default'].getDisplayNumber(val, true)
                )
            );
        })
    );
};

exports['default'] = Heatmap;
module.exports = exports['default'];

//# sourceMappingURL=Heatmap-compiled.js.map