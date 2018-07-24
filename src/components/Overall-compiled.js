'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _actionsIndexJs = require('../actions/index.js');

var _actionsIndexJs2 = _interopRequireDefault(_actionsIndexJs);

var _c3 = require('c3');

var _c32 = _interopRequireDefault(_c3);

require('font-awesome/css/font-awesome.min.css');

require('react-select/dist/react-select.css');

require('c3/c3.min.css');

var _dataJson = require('../data.json');

var _dataJson2 = _interopRequireDefault(_dataJson);

var _BubbleData = require('./BubbleData');

var _BubbleData2 = _interopRequireDefault(_BubbleData);

var _NumberData = require('./NumberData');

var _NumberData2 = _interopRequireDefault(_NumberData);

var _Heatmap = require('./Heatmap');

var _Heatmap2 = _interopRequireDefault(_Heatmap);

var _Helper = require('../Helper');

var _Helper2 = _interopRequireDefault(_Helper);

var _causesJson = require('../causes.json');

var _causesJson2 = _interopRequireDefault(_causesJson);

var _beneficiariesJson = require('../beneficiaries.json');

var _beneficiariesJson2 = _interopRequireDefault(_beneficiariesJson);

var _operationsJson = require('../operations.json');

var _operationsJson2 = _interopRequireDefault(_operationsJson);

var mapStateToProps = function mapStateToProps(state) {
    return {
        year: state.selectedYear,
        bubbleExpand: state.bubbleExpand
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        setPage: function setPage(name) {
            dispatch(_actionsIndexJs2['default'].setPage(name));
        },
        setYear: function setYear(year) {
            dispatch(_actionsIndexJs2['default'].setYear(year));
        },
        setBubbleExpand: function setBubbleExpand(name) {
            dispatch(_actionsIndexJs2['default'].setBubbleExpand(name));
        }
    };
};

var Overall = (function (_Component) {
    _inherits(Overall, _Component);

    function Overall(props) {
        _classCallCheck(this, Overall);

        _get(Object.getPrototypeOf(Overall.prototype), 'constructor', this).call(this, props);

        this.options = [2013, 2014, 2015, 2016, 2017].map(function (y) {
            return {
                label: y,
                value: y
            };
        });

        this.onBackClicked = this.onBackClicked.bind(this);
        this.onYearChanged = this.onYearChanged.bind(this);
    }

    _createClass(Overall, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.startChart();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.startChart();
        }
    }, {
        key: 'getChartOptions',
        value: function getChartOptions(chartId, interval, max, property) {
            var isCurrency = arguments.length <= 4 || arguments[4] === undefined ? false : arguments[4];
            var year = this.props.year;

            var number = [];
            for (var i = 0; i < max; i += interval) {
                number.push({
                    value: 0,
                    start: i,
                    end: i + interval,
                    label: _Helper2['default'].getDisplayNumber(i, isCurrency, 2) + ' - ' + _Helper2['default'].getDisplayNumber(i + interval, isCurrency, 2),
                    list: []
                });
            }

            number.push({
                value: 0,
                start: max,
                end: Infinity,
                label: _Helper2['default'].getDisplayNumber(max, isCurrency, 2) + '+',
                list: []
            });
            _dataJson2['default'].foundations.forEach(function (f) {
                if (!f.y[year]) {
                    return;
                }

                var numObj = number.find(function (n) {
                    return n.start <= f.y[year][property] && n.end >= f.y[year][property];
                });
                numObj.value++;
                numObj.list.push(f);
            });

            return {
                bindto: "#chart-" + chartId,
                data: {
                    json: number,
                    keys: {
                        value: ['value'],
                        x: 'label'
                    },
                    type: 'bar',
                    labels: true
                },
                axis: {
                    x: {
                        type: 'categories',
                        tick: {
                            rotate: 45,
                            multiline: false
                        }
                    },
                    y: {
                        label: {
                            text: 'Number of funders',
                            position: 'outer-center'
                        }
                    }
                },
                bar: {
                    width: {
                        ratio: 0.75
                    }
                },
                color: {
                    pattern: chartId === "count" ? ['#F3832E'] : ['#F9C08F']
                },
                legend: {
                    show: false
                },
                tooltip: {
                    contents: function contents(d) {
                        var text = "<div class='tooltip-text'>";
                        number[d[0].index].list.sort(function (a, b) {
                            return b.y[year][property] - a.y[year][property];
                        }).forEach(function (l) {
                            text += "<div class='tooltip-row'>";
                            text += "<div>";
                            text += l.n;
                            text += "</div>";
                            text += "<div>";
                            text += _Helper2['default'].getDisplayNumber(l.y[year][property], isCurrency, 2);
                            text += "</div>";
                            text += "</div>";
                        });
                        text += "</div>";
                        return text;
                    }
                }
            };
        }

        /**
         * Generates the chart.
         */
    }, {
        key: 'startChart',
        value: function startChart() {
            _c32['default'].generate(this.getChartOptions("count", 20, 300, 'c'));
            _c32['default'].generate(this.getChartOptions("money", 250000, 4000000, 'm', true));
        }
    }, {
        key: 'onYearChanged',
        value: function onYearChanged(newValue) {
            this.props.setYear(newValue.value);
        }
    }, {
        key: 'onBackClicked',
        value: function onBackClicked() {
            var _this = this;

            this.props.setPage("home");
            this.props.bubbleExpand.forEach(function (be) {
                return _this.props.setBubbleExpand(be);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props;
            var year = _props.year;
            var bubbleExpand = _props.bubbleExpand;

            var moneySort = [].concat(_dataJson2['default'].foundations).filter(function (f) {
                return f.y[year];
            }).sort(function (a, b) {
                return b.y[year].m - a.y[year].m;
            });

            var totalFunders = _dataJson2['default'].foundations.reduce(function (acc, f) {
                return acc + f.y[year] ? 1 : 0;
            }, 0);
            var totalGrants = _dataJson2['default'].foundations.reduce(function (acc, f) {
                return acc + f.y[year] ? f.y[year].c : 0;
            }, 0);
            var totalMoney = _dataJson2['default'].foundations.reduce(function (acc, f) {
                return acc + f.y[year] ? f.y[year].m : 0;
            }, 0);
            var maxCause = Object.keys(_dataJson2['default'].themes[year].c).reduce(function (acc, c) {
                return Math.max(acc, _dataJson2['default'].themes[year].c[c]);
            }, -Infinity);
            var maxBeneficiary = Object.keys(_dataJson2['default'].themes[year].b).reduce(function (acc, b) {
                return Math.max(acc, _dataJson2['default'].themes[year].b[b]);
            }, -Infinity);
            var maxOperation = Object.keys(_dataJson2['default'].themes[year].o).reduce(function (acc, o) {
                return Math.max(acc, _dataJson2['default'].themes[year].o[o]);
            }, -Infinity);

            return _react2['default'].createElement(
                'div',
                { className: 'dashboard overall' },
                _react2['default'].createElement(
                    'div',
                    { className: 'dashboard--top' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'back', onClick: this.onBackClicked },
                        _react2['default'].createElement('i', { className: 'fa fa-chevron-left fa-2x' })
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'dashboard--title' },
                        _react2['default'].createElement(
                            'div',
                            { className: 'foundation--name' },
                            'Overall Funding Trends'
                        )
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'year-selector' },
                        'Data for Year',
                        _react2['default'].createElement(_reactSelect2['default'], {
                            options: this.options,
                            value: year,
                            onChange: this.onYearChanged,
                            clearable: false,
                            searchable: false
                        })
                    )
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'section-title' },
                    _react2['default'].createElement(
                        'span',
                        null,
                        'Top Funders By Grant Spending'
                    )
                ),
                _react2['default'].createElement(_BubbleData2['default'], {
                    list: moneySort,
                    getValue: function (f) {
                        return f.y[year].m;
                    },
                    seeMore: function () {
                        return _this2.props.setBubbleExpand("overallMoney");
                    },
                    seeMoreLabel: bubbleExpand.indexOf("overallMoney") > -1 ? "See Less" : "See More",
                    end: bubbleExpand.indexOf("overallMoney") > -1 ? 15 : 5
                }),
                _react2['default'].createElement(
                    'div',
                    { className: 'section-title' },
                    _react2['default'].createElement(
                        'span',
                        null,
                        'Top Recipients by Grant Received'
                    )
                ),
                _react2['default'].createElement(_BubbleData2['default'], {
                    colorClass: 'bubble-alt',
                    list: _dataJson2['default'].averageFunders[year].top,
                    getValue: function (f) {
                        return f.m;
                    }
                }),
                _react2['default'].createElement(
                    'div',
                    { className: 'section-title' },
                    _react2['default'].createElement(
                        'span',
                        null,
                        'Key Statistics'
                    )
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'subsection-title' },
                    'Distribution of Funders by Average Grant Size'
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'average-grants' },
                    _react2['default'].createElement(_NumberData2['default'], {
                        value: totalGrants / totalFunders,
                        maxDigits: 0,
                        title: 'Average Number Of Grants Per Funder'
                    }),
                    _react2['default'].createElement('div', { className: 'chart', id: 'chart-count' })
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'subsection-title' },
                    'Distribution of Funders by Total Grants Awarded'
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'average-money' },
                    _react2['default'].createElement(_NumberData2['default'], {
                        value: totalMoney / totalGrants,
                        maxDigits: 0,
                        title: 'Average Grant Size',
                        isCurrency: true
                    }),
                    _react2['default'].createElement('div', { className: 'chart', id: 'chart-money' })
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'section-title' },
                    _react2['default'].createElement(
                        'span',
                        null,
                        'Spending on Themes'
                    )
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'subsection-title' },
                    'Causes'
                ),
                _react2['default'].createElement(_Heatmap2['default'], {
                    list: Object.keys(_dataJson2['default'].themes[year].c),
                    getObject: function (c) {
                        return _causesJson2['default'].find(function (c2) {
                            return c2.id == c;
                        });
                    },
                    getValue: function (c) {
                        return _dataJson2['default'].themes[year].c[c];
                    },
                    maxValue: maxCause,
                    colorClass: 'cause'
                }),
                _react2['default'].createElement(
                    'div',
                    { className: 'subsection-title' },
                    'Users'
                ),
                _react2['default'].createElement(_Heatmap2['default'], {
                    list: Object.keys(_dataJson2['default'].themes[year].b),
                    getObject: function (b) {
                        return _beneficiariesJson2['default'].find(function (b2) {
                            return b2.id == b;
                        });
                    },
                    getValue: function (b) {
                        return _dataJson2['default'].themes[year].b[b];
                    },
                    maxValue: maxBeneficiary,
                    colorClass: 'beneficiary'
                }),
                _react2['default'].createElement(
                    'div',
                    { className: 'subsection-title' },
                    'Operations'
                ),
                _react2['default'].createElement(_Heatmap2['default'], {
                    list: Object.keys(_dataJson2['default'].themes[year].o),
                    getObject: function (o) {
                        return _operationsJson2['default'].find(function (o2) {
                            return o2.id == o;
                        });
                    },
                    getValue: function (o) {
                        return _dataJson2['default'].themes[year].o[o];
                    },
                    maxValue: maxOperation,
                    colorClass: 'operation'
                }),
                _react2['default'].createElement(
                    'div',
                    { className: 'bottom-note' },
                    _react2['default'].createElement(
                        'div',
                        null,
                        'Note: recipients may have more than one theme description within each category and data may not be provided for full calendar years, see ',
                        _react2['default'].createElement(
                            'span',
                            { className: 'link-rev', onClick: function () {
                                    return _this2.props.setPage("about");
                                } },
                            'About'
                        ),
                        ' for limitations in this data'
                    )
                )
            );
        }
    }]);

    return Overall;
})(_react.Component);

exports['default'] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Overall);
module.exports = exports['default'];

//# sourceMappingURL=Overall-compiled.js.map