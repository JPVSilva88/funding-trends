'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var _CharityChooser = require('./CharityChooser');

var _CharityChooser2 = _interopRequireDefault(_CharityChooser);

var _BubbleData = require('./BubbleData');

var _BubbleData2 = _interopRequireDefault(_BubbleData);

var _NumberData = require('./NumberData');

var _NumberData2 = _interopRequireDefault(_NumberData);

var _dataJson = require('../data.json');

var _dataJson2 = _interopRequireDefault(_dataJson);

var _causesJson = require('../causes.json');

var _causesJson2 = _interopRequireDefault(_causesJson);

var _beneficiariesJson = require('../beneficiaries.json');

var _beneficiariesJson2 = _interopRequireDefault(_beneficiariesJson);

var _operationsJson = require('../operations.json');

var _operationsJson2 = _interopRequireDefault(_operationsJson);

var mapStateToProps = function mapStateToProps(state) {
    return {
        comparison: state.selectedComparison,
        charity: state.selectedCharity,
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
        setComparison: function setComparison(comparison) {
            dispatch(_actionsIndexJs2['default'].setComparison(comparison));
        },
        setBubbleExpand: function setBubbleExpand(name) {
            dispatch(_actionsIndexJs2['default'].setBubbleExpand(name));
        }
    };
};

var Dashboard = (function (_Component) {
    _inherits(Dashboard, _Component);

    function Dashboard(props) {
        _classCallCheck(this, Dashboard);

        _get(Object.getPrototypeOf(Dashboard.prototype), 'constructor', this).call(this, props);

        this.found = _dataJson2['default'].foundations.find(function (a) {
            return a.n === props.charity;
        });

        this.options = Object.keys(this.found.y).map(function (y) {
            return {
                label: y,
                value: y
            };
        });

        this.onAboutClicked = this.onAboutClicked.bind(this);
        this.onYearChanged = this.onYearChanged.bind(this);
        this.onComparisonChanged = this.onComparisonChanged.bind(this);
    }

    _createClass(Dashboard, [{
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
        key: 'getThemeData',
        value: function getThemeData(property, dictionary) {
            var _this = this;

            var _props = this.props;
            var year = _props.year;
            var comparison = _props.comparison;

            var foundData = this.found.t[year][property];
            var themeData;

            if (comparison) {
                (function () {
                    var comparisonData = _dataJson2['default'].foundations.find(function (a) {
                        return a.n === comparison;
                    }).t[year][property];

                    themeData = dictionary.map(function (t) {
                        var _ref;

                        return (_ref = {
                            name: t.name,
                            short: t.short
                        }, _defineProperty(_ref, _this.found.n, foundData[t.id] || 0), _defineProperty(_ref, comparison, comparisonData[t.id] || 0), _ref);
                    });
                })();
            } else {
                themeData = dictionary.map(function (t) {
                    return _defineProperty({
                        name: t.name,
                        short: t.short
                    }, _this.found.n, foundData[t.id] || 0);
                });
            }

            return themeData.sort(function (a, b) {
                var diff = b[_this.found.n] - a[_this.found.n];
                return diff !== 0 ? diff : a.short.localeCompare(b.short);
            });
        }
    }, {
        key: 'getChartOptions',
        value: function getChartOptions(jsonData, chartId) {
            var dataValues = [this.found.n];
            var axes = _defineProperty({}, this.found.n, 'y2');
            if (this.props.comparison) {
                dataValues.push(this.props.comparison);
                axes[this.props.comparison] = 'y2';
            }

            return {
                bindto: "#chart-" + chartId,
                data: {
                    json: jsonData,
                    keys: {
                        value: dataValues,
                        x: 'short'
                    },
                    type: 'bar',
                    labels: true,
                    axes: axes
                },
                axis: {
                    rotated: true,
                    x: {
                        type: 'categories'
                    },
                    y2: {
                        show: true,
                        label: {
                            text: 'Number of recipients in each category',
                            position: 'outer-center'
                        }
                    },
                    y: {
                        show: false
                    }
                },
                bar: {
                    width: {
                        ratio: 0.75
                    }
                },
                size: {
                    height: 60 + jsonData.length * 25
                },
                color: {
                    pattern: chartId === "c" ? ['#C32E9A', '#EDB7DD'] : chartId === "b" ? ['#F3832E', '#FAD9C1'] : ['#3DADB2', '#A9DEE1']
                },
                tooltip: {
                    show: false
                },
                legend: {
                    show: false
                }
            };
        }

        /**
         * Generates the chart.
         */
    }, {
        key: 'startChart',
        value: function startChart() {
            _c32['default'].generate(this.getChartOptions(this.getThemeData('c', _causesJson2['default']), "c"));
            _c32['default'].generate(this.getChartOptions(this.getThemeData('b', _beneficiariesJson2['default']), "b"));
            _c32['default'].generate(this.getChartOptions(this.getThemeData('o', _operationsJson2['default']), "o"));
        }
    }, {
        key: 'onComparisonChanged',
        value: function onComparisonChanged(newComparison) {
            this.props.setComparison(newComparison);
        }
    }, {
        key: 'onYearChanged',
        value: function onYearChanged(newValue) {
            this.props.setYear(newValue.value);
        }
    }, {
        key: 'findTopTheme',
        value: function findTopTheme(foundation, dictionary, property) {
            var year = this.props.year;

            var themes = foundation.t[year][property];
            if (Object.keys(themes).length === 0) {
                return;
            }

            return dictionary.find(function (c) {
                return c.id == Object.keys(themes).reduce(function (a, b) {
                    if (themes[a] === themes[b]) {
                        return dictionary.find(function (c2) {
                            return c2.id == a;
                        }).short.localeCompare(dictionary.find(function (c2) {
                            return c2.id == b;
                        }).short) > 0 ? b : a;
                    } else {
                        return themes[a] > themes[b] ? a : b;
                    }
                });
            });
        }
    }, {
        key: 'onHomeClicked',
        value: function onHomeClicked() {
            this.props.setPage("home");
            this.props.setComparison(null);
        }
    }, {
        key: 'onAboutClicked',
        value: function onAboutClicked() {
            this.props.setPage("about");
            this.props.setComparison(null);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props2 = this.props;
            var charity = _props2.charity;
            var year = _props2.year;
            var comparison = _props2.comparison;
            var bubbleExpand = _props2.bubbleExpand;

            var moneySort = [].concat(_dataJson2['default'].foundations).filter(function (f) {
                return f.y[year];
            }).sort(function (a, b) {
                return b.y[year].m - a.y[year].m;
            });
            var found = this.found;
            var index = moneySort.findIndex(function (a) {
                return a.n === charity;
            });
            var topThemes = {
                causes: this.findTopTheme(found, _causesJson2['default'], 'c'),
                beneficiaries: this.findTopTheme(found, _beneficiariesJson2['default'], 'b'),
                operations: this.findTopTheme(found, _operationsJson2['default'], 'o')
            };

            if (comparison) {
                var comparisonData = _dataJson2['default'].foundations.find(function (a) {
                    return a.n === comparison;
                });

                topThemes.causesComparison = this.findTopTheme(comparisonData, _causesJson2['default'], 'c');
                topThemes.beneficiariesComparison = this.findTopTheme(comparisonData, _beneficiariesJson2['default'], 'b');
                topThemes.operationsComparison = this.findTopTheme(comparisonData, _operationsJson2['default'], 'o');
            }

            return _react2['default'].createElement(
                'div',
                { className: 'dashboard funders' },
                _react2['default'].createElement(
                    'div',
                    { className: 'dashboard--top' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'back', onClick: function () {
                                return _this2.props.setPage("home");
                            } },
                        _react2['default'].createElement('i', { className: 'fa fa-chevron-left fa-2x' })
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'dashboard--title' },
                        _react2['default'].createElement(
                            'div',
                            { className: 'foundation--name' },
                            found.n
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
                        'Key Statistics'
                    )
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'foundation--numbers' },
                    _react2['default'].createElement(_NumberData2['default'], {
                        value: found.y[year].c,
                        title: 'Grants Given'
                    }),
                    _react2['default'].createElement(_NumberData2['default'], {
                        value: found.y[year].m,
                        title: 'Amount Given',
                        isCurrency: true
                    }),
                    _react2['default'].createElement(_NumberData2['default'], {
                        value: found.y[year].m / found.y[year].c,
                        title: 'Average Grant',
                        isCurrency: true
                    })
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'section-title' },
                    _react2['default'].createElement(
                        'span',
                        null,
                        'Rank Among Funders'
                    )
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'foundation--money-chart' },
                    _react2['default'].createElement('div', null),
                    _react2['default'].createElement('div', { style: { width: (_dataJson2['default'].foundations.length - index - 1) * 100 / _dataJson2['default'].foundations.length + '%' } }),
                    _react2['default'].createElement(
                        'div',
                        null,
                        _react2['default'].createElement(
                            'div',
                            null,
                            _dataJson2['default'].foundations.length - index - 1,
                            ' give less'
                        ),
                        _react2['default'].createElement(
                            'div',
                            null,
                            index,
                            ' give more'
                        )
                    ),
                    _react2['default'].createElement('div', { style: { width: index * 100 / _dataJson2['default'].foundations.length + '%' } }),
                    _react2['default'].createElement('div', null)
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'section-title' },
                    _react2['default'].createElement(
                        'span',
                        null,
                        'Top Recipients By Grants Received'
                    )
                ),
                _react2['default'].createElement(_BubbleData2['default'], {
                    list: found.r[year],
                    getValue: function (r) {
                        return r.m;
                    },
                    seeMore: function () {
                        return _this2.props.setBubbleExpand("funders");
                    },
                    seeMoreLabel: bubbleExpand.indexOf("funders") > -1 ? "See Less" : "See More",
                    end: bubbleExpand.indexOf("funders") > -1 ? 15 : 5
                }),
                Object.keys(found.t[year].c).length > 0 && _react2['default'].createElement(
                    'div',
                    null,
                    _react2['default'].createElement(
                        'div',
                        { className: 'section-title' },
                        _react2['default'].createElement(
                            'span',
                            null,
                            'Grant Giving Themes'
                        )
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'comparison-chooser' },
                        'Compare this funder’s data with',
                        _react2['default'].createElement(_CharityChooser2['default'], {
                            onChange: this.onComparisonChanged,
                            checkTheme: true,
                            currCharity: found.n,
                            year: year
                        })
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'charts' },
                        _react2['default'].createElement(
                            'div',
                            null,
                            _react2['default'].createElement(
                                'div',
                                { className: 'chart-text' },
                                _react2['default'].createElement(
                                    'div',
                                    { className: 'chart-title' },
                                    'Causes'
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    { className: 'chart-top cause' },
                                    _react2['default'].createElement(
                                        'div',
                                        { className: 'number--title' },
                                        found.n
                                    ),
                                    _react2['default'].createElement('i', { className: 'foundation--number fa fa-2x ' + topThemes.causes.icon }),
                                    _react2['default'].createElement(
                                        'div',
                                        null,
                                        topThemes.causes.short
                                    )
                                ),
                                comparison && _react2['default'].createElement(
                                    'div',
                                    { className: 'chart-top-comparison cause' },
                                    _react2['default'].createElement(
                                        'div',
                                        { className: 'number--title' },
                                        comparison
                                    ),
                                    _react2['default'].createElement('i', { className: 'foundation--number fa fa-2x ' + topThemes.causesComparison.icon }),
                                    _react2['default'].createElement(
                                        'div',
                                        null,
                                        topThemes.causesComparison.short
                                    )
                                )
                            ),
                            _react2['default'].createElement('div', { className: 'chart', id: 'chart-c' })
                        ),
                        _react2['default'].createElement(
                            'div',
                            null,
                            _react2['default'].createElement('div', { className: 'chart', id: 'chart-b' }),
                            _react2['default'].createElement(
                                'div',
                                { className: 'chart-text' },
                                _react2['default'].createElement(
                                    'div',
                                    { className: 'chart-title' },
                                    'Beneficiaries'
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    { className: 'chart-top beneficiary' },
                                    _react2['default'].createElement(
                                        'div',
                                        { className: 'number--title' },
                                        found.n
                                    ),
                                    _react2['default'].createElement('i', { className: 'foundation--number fa fa-2x ' + topThemes.beneficiaries.icon }),
                                    _react2['default'].createElement(
                                        'div',
                                        null,
                                        topThemes.beneficiaries.short
                                    )
                                ),
                                comparison && _react2['default'].createElement(
                                    'div',
                                    { className: 'chart-top-comparison beneficiary' },
                                    _react2['default'].createElement(
                                        'div',
                                        { className: 'number--title' },
                                        comparison
                                    ),
                                    _react2['default'].createElement('i', { className: 'foundation--number fa fa-2x ' + topThemes.beneficiariesComparison.icon }),
                                    _react2['default'].createElement(
                                        'div',
                                        null,
                                        topThemes.beneficiariesComparison.short
                                    )
                                )
                            )
                        ),
                        _react2['default'].createElement(
                            'div',
                            null,
                            _react2['default'].createElement(
                                'div',
                                { className: 'chart-text' },
                                _react2['default'].createElement(
                                    'div',
                                    { className: 'chart-title' },
                                    'Operations'
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    { className: 'chart-top operation' },
                                    _react2['default'].createElement(
                                        'div',
                                        { className: 'number--title' },
                                        found.n
                                    ),
                                    _react2['default'].createElement('i', { className: 'foundation--number fa fa-2x ' + topThemes.operations.icon }),
                                    _react2['default'].createElement(
                                        'div',
                                        null,
                                        topThemes.operations.short
                                    )
                                ),
                                comparison && _react2['default'].createElement(
                                    'div',
                                    { className: 'chart-top-comparison operation' },
                                    _react2['default'].createElement(
                                        'div',
                                        { className: 'number--title' },
                                        comparison
                                    ),
                                    _react2['default'].createElement('i', { className: 'foundation--number fa fa-2x ' + topThemes.operationsComparison.icon }),
                                    _react2['default'].createElement(
                                        'div',
                                        null,
                                        topThemes.operationsComparison.short
                                    )
                                )
                            ),
                            _react2['default'].createElement('div', { className: 'chart', id: 'chart-o' })
                        )
                    )
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'bottom-note' },
                    _react2['default'].createElement(
                        'div',
                        null,
                        'Note: recipients may have more than one theme description within each category and data may not be provided for full calendar years, see ',
                        _react2['default'].createElement(
                            'span',
                            { className: 'link-rev', onClick: this.onAboutClicked },
                            'About'
                        ),
                        ' for limitations in this data'
                    )
                )
            );
        }
    }]);

    return Dashboard;
})(_react.Component);

exports['default'] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Dashboard);
module.exports = exports['default'];

//# sourceMappingURL=Dashboard-compiled.js.map