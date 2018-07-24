'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Helper = require('../Helper');

var _Helper2 = _interopRequireDefault(_Helper);

var BubbleData = function BubbleData(_ref) {
    var list = _ref.list;
    var getValue = _ref.getValue;
    var _ref$start = _ref.start;
    var start = _ref$start === undefined ? 0 : _ref$start;
    var _ref$end = _ref.end;
    var end = _ref$end === undefined ? 5 : _ref$end;
    var colorClass = _ref.colorClass;
    var seeMore = _ref.seeMore;
    var seeMoreLabel = _ref.seeMoreLabel;
    return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
            'div',
            { className: 'bubbles' },
            list.slice(start, end).map(function (f, index) {
                var moneyValue = getValue(f);
                var size = moneyValue * 100 / getValue(list[0]);
                return _react2['default'].createElement(
                    'div',
                    { key: index, className: colorClass },
                    size <= 60 && _Helper2['default'].getDisplayNumber(moneyValue, true),
                    _react2['default'].createElement(
                        'div',
                        { className: 'bubble', style: { height: size, width: size } },
                        size > 60 && _Helper2['default'].getDisplayNumber(moneyValue, true)
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'bubble--title' },
                        f.n
                    )
                );
            })
        ),
        seeMore && _react2['default'].createElement(
            'div',
            { className: 'see-more' },
            _react2['default'].createElement(
                'span',
                { className: 'link-rev', onClick: seeMore },
                seeMoreLabel
            )
        )
    );
};

exports['default'] = BubbleData;
module.exports = exports['default'];

//# sourceMappingURL=BubbleData-compiled.js.map