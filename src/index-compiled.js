'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

require('./index.css');

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _registerServiceWorker = require('./registerServiceWorker');

var _registerServiceWorker2 = _interopRequireDefault(_registerServiceWorker);

var _reactRedux = require('react-redux');

var _stores = require('./stores');

var _stores2 = _interopRequireDefault(_stores);

var store = (0, _stores2['default'])();

_reactDom2['default'].render(_react2['default'].createElement(
    _reactRedux.Provider,
    { store: store },
    _react2['default'].createElement(_App2['default'], null)
), document.getElementById('root'));
(0, _registerServiceWorker2['default'])();

//# sourceMappingURL=index-compiled.js.map