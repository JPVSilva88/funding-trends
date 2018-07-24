'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _dataJson = require('../data.json');

var _dataJson2 = _interopRequireDefault(_dataJson);

require('react-select/dist/react-select.css');

var CharityChooser = function CharityChooser(_ref) {
    var year = _ref.year;
    var checkTheme = _ref.checkTheme;
    var currCharity = _ref.currCharity;
    var value = _ref.value;
    return _react2['default'].createElement(
        'div',
        { className: 'charity-chooser' },
        _react2['default'].createElement(_reactSelect2['default'], {
            options: _dataJson2['default'].foundations.filter(function (f) {
                return (!year || f.y[year]) && (!checkTheme || Object.keys(f.t[year].c).length > 0) && (!currCharity || f.n !== currCharity);
            }).sort(function (a, b) {
                return a.n.localeCompare(b.n);
            }),
            value: value,
            valueKey: 'n',
            labelKey: 'n',
            placeholder: 'Select or type...',
            onChange: function (newValue) {
                return undefined.props.onChange(newValue && newValue.n);
            },
            searchable: true
        })
    );
};

exports['default'] = CharityChooser;
module.exports = exports['default'];

//# sourceMappingURL=CharityChooser-compiled.js.map