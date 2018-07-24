'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _actionsIndexJs = require('../actions/index.js');

var _actionsIndexJs2 = _interopRequireDefault(_actionsIndexJs);

var _reactAutosuggest = require('react-autosuggest');

var _reactAutosuggest2 = _interopRequireDefault(_reactAutosuggest);

var _grantnav2016_moneySSJson = require('../grantnav2016_moneySS.json');

var _grantnav2016_moneySSJson2 = _interopRequireDefault(_grantnav2016_moneySSJson);

require('./Dashboard.css');

//import 'font-awesome/css/font-awesome.min.css';

var mapStateToProps = function mapStateToProps(state) {
    return {
        selectedCharity: state.selectedCharity
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        setCountry: function setCountry(name) {
            dispatch(_actionsIndexJs2['default'].setCharity(name));
        }
    };
};

var CharityChooser = (function (_Component) {
    _inherits(CharityChooser, _Component);

    function CharityChooser() {
        _classCallCheck(this, CharityChooser);

        _get(Object.getPrototypeOf(CharityChooser.prototype), 'constructor', this).call(this);

        this.state.value = '';
    }

    _createClass(CharityChooser, [{
        key: 'render',
        value: function render() {
            var foundations = [];
            var max = 1;
            var maxMoney = 0;
            _grantnav2016_moneySSJson2['default'].forEach(function (grant) {
                var foundation = foundations.find(function (f) {
                    return f.id === grant.f.id;
                });
                if (foundation) {
                    foundation.count++;
                    foundation.money += grant.am;

                    if (foundation.count > max) {
                        max = foundation.count;
                    }

                    if (foundation.money > maxMoney) {
                        maxMoney = foundation.money;
                    }
                } else {
                    foundations.push({
                        name: grant.f.name,
                        count: 1,
                        id: grant.f.id,
                        money: grant.am
                    });

                    if (grant.am > maxMoney) {
                        maxMoney = grant.am;
                    }
                }
            });

            var maxAvg = 0;
            foundations.forEach(function (f) {
                f.avg = f.money / f.count;
                if (f.avg > maxAvg) maxAvg = f.avg;
            });

            foundations.sort(function (a, b) {
                return b.name - a.name;
            });

            var inputProps = {
                value: ""
            };
            return _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(_reactAutosuggest2['default'], {
                    suggestions: foundations,
                    getSuggestionValue: function (sug) {
                        return sug.name;
                    },
                    renderSuggestion: function (sug) {
                        return _react2['default'].createElement(
                            'div',
                            null,
                            sug.name
                        );
                    },
                    inputProps: inputProps
                })
            );

            /*return <div>
                    {foundations.map(foundation => {
                        const size = foundation.count * 200 / max;
                        const sizeMoney = foundation.money * 200 / maxMoney;
                        const sizeAvg = foundation.avg * 200 / maxAvg;
                        return (
                            <div className="foundation" key={foundation.id}>
                                {foundation.name}
                                <div className="foundationBubbles">
                                    <div className="bubble foundationBubble"
                                         style={{width: size, height: size}}>
                                        {size > 30 && <div>{foundation.count}</div>}
                                    </div>
                                    <div className="bubble foundationBubbleMoney"
                                         style={{width: sizeMoney, height: sizeMoney}}>
                                        {sizeMoney > 30 && <div>{foundation.money}</div>}
                                    </div>
                                    <div className="bubble foundationBubbleAvg"
                                         style={{width: sizeAvg, height: sizeAvg}}>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>;*/
        }
    }]);

    return CharityChooser;
})(_react.Component);

exports['default'] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CharityChooser);
module.exports = exports['default'];

//# sourceMappingURL=CharityChooser-compiled.js.map