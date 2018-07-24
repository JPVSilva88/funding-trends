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

require('font-awesome/css/font-awesome.min.css');

require('react-select/dist/react-select.css');

require('c3/c3.min.css');

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        setPage: function setPage(name) {
            dispatch(_actionsIndexJs2['default'].setPage(name));
        }
    };
};

var About = (function (_Component) {
    _inherits(About, _Component);

    function About() {
        _classCallCheck(this, About);

        _get(Object.getPrototypeOf(About.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(About, [{
        key: 'render',
        value: function render() {
            var _this = this;

            return _react2['default'].createElement(
                'div',
                { className: 'about dashboard' },
                _react2['default'].createElement(
                    'div',
                    { className: 'dashboard--top' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'back', onClick: function () {
                                return _this.props.setPage("home");
                            } },
                        _react2['default'].createElement('i', { className: 'fa fa-chevron-left fa-2x' })
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'dashboard--title' },
                        _react2['default'].createElement(
                            'div',
                            { className: 'foundation--name' },
                            'About'
                        )
                    )
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'about-content' },
                    _react2['default'].createElement(
                        'div',
                        null,
                        'The aim of this free tool is to help people understand grant-making data from ',
                        _react2['default'].createElement(
                            'a',
                            { className: 'link', href: 'http://www.threesixtygiving.com', target: '_blank' },
                            '360Giving'
                        ),
                        ' in a new and exciting way.'
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'section-title' },
                        _react2['default'].createElement(
                            'span',
                            null,
                            'What is it?'
                        )
                    ),
                    _react2['default'].createElement(
                        'div',
                        null,
                        'Funding Snapshots allows users to zoom out on the data to provide overall headline trends and then zoom in to take a closer look at dedicated dashboards for each funder.'
                    ),
                    _react2['default'].createElement(
                        'div',
                        null,
                        'It uses data from 360Giving’s ',
                        _react2['default'].createElement(
                            'a',
                            { className: 'link', href: 'http://grantnav.threesixtygiving.org/', target: '_blank' },
                            'GrantNav'
                        ),
                        ', as well as Charity Commission data from the ',
                        _react2['default'].createElement(
                            'a',
                            { className: 'link', href: 'https://charitybase.uk/', target: '_blank' },
                            'CharityBase'
                        ),
                        ' database.'
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'section-title' },
                        _react2['default'].createElement(
                            'span',
                            null,
                            'Who can it help?'
                        )
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'about-help' },
                        _react2['default'].createElement(
                            'div',
                            null,
                            _react2['default'].createElement(
                                'div',
                                { className: 'about-help--title' },
                                _react2['default'].createElement(
                                    'div',
                                    null,
                                    'Funders'
                                )
                            ),
                            _react2['default'].createElement(
                                'div',
                                null,
                                'Undertake strategic reviews: see how your funding has changed over the years and how your foundation compares to others'
                            ),
                            _react2['default'].createElement(
                                'div',
                                null,
                                'Communicate your data: use your dedicated dashboard to show key statistics about your giving to trustees and staff'
                            ),
                            _react2['default'].createElement(
                                'div',
                                null,
                                'Conduct due diligence: see if other funders have supported organisations that you are considering funding and view the themes in which they work'
                            )
                        ),
                        _react2['default'].createElement(
                            'div',
                            null,
                            _react2['default'].createElement(
                                'div',
                                { className: 'about-help--title' },
                                _react2['default'].createElement(
                                    'div',
                                    null,
                                    'Charities or other user-led organisations'
                                )
                            ),
                            _react2['default'].createElement(
                                'div',
                                null,
                                'Research new funding sources: find out more about potential funding prospects and their approach to grant-making'
                            ),
                            _react2['default'].createElement(
                                'div',
                                null,
                                'Learn more about your current funders: see how they rank against other funders and how your grant compares to their most common interests and approach'
                            ),
                            _react2['default'].createElement(
                                'div',
                                null,
                                'Collaborate with others: find other organisations that are also receiving funds from the same funder that may share common goals'
                            )
                        ),
                        _react2['default'].createElement(
                            'div',
                            null,
                            _react2['default'].createElement(
                                'div',
                                { className: 'about-help--title' },
                                _react2['default'].createElement(
                                    'div',
                                    null,
                                    'Researchers'
                                )
                            ),
                            _react2['default'].createElement(
                                'div',
                                null,
                                'View overall headline trends: see who are the largest grant-makers and the most popular themes'
                            ),
                            _react2['default'].createElement(
                                'div',
                                null,
                                'Understand common practice among funders: examine topics such as range of focus, number of recipients and average grant sizes'
                            ),
                            _react2['default'].createElement(
                                'div',
                                null,
                                'Uncover patterns: Find out the changes in grant-making over the years at the overall and individual level'
                            )
                        )
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'section-title' },
                        _react2['default'].createElement(
                            'span',
                            null,
                            'What are the limitations of this data?'
                        )
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'about-space' },
                        'There are several limitations in this data that you should keep in mind when researching foundations and making conclusions from the data:'
                    ),
                    _react2['default'].createElement(
                        'div',
                        null,
                        _react2['default'].createElement(
                            'span',
                            { className: 'about-bold color' },
                            '1. Not all funders are included'
                        ),
                        ': This tool only includes foundations that have submitted their data to the 360Giving campaign—find out how to join the movement and submit your foundation’s data ',
                        _react2['default'].createElement(
                            'a',
                            { className: 'link', href: 'http://www.threesixtygiving.org/support/publish-data/', target: '_blank' },
                            'here'
                        ),
                        '.'
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'about-example' },
                        'For example: major UK funder, Garfield Weston Foundation is not included.'
                    ),
                    _react2['default'].createElement(
                        'div',
                        null,
                        _react2['default'].createElement(
                            'span',
                            { className: 'about-bold color2' },
                            '2. Funding data does not cover all years'
                        ),
                        ': This tool looks at data over a five-year period from 2013 to 2017, but not all funders have submitted all of their data for this period.'
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'about-example' },
                        'For example: for the year 2017, the Wellcome Trust has so far only submitted data from 1 January to 30 September.'
                    ),
                    _react2['default'].createElement(
                        'div',
                        null,
                        _react2['default'].createElement(
                            'span',
                            { className: 'about-bold color3' },
                            '3. Theme data is incomplete'
                        ),
                        ': Visuals from the tool that include themes (eg, causes, users and operations) are limited to a proportion of recipients. This includes recipients without a completed or matching Charity Commission field in the 360Giving Standard, as well as organisations that are not currently registered under the Charity Commission for England and Wales.'
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'about-example' },
                        'For example: theme data does not cover the many user-led organisations funded by the Big Lottery Foundation.'
                    ),
                    _react2['default'].createElement(
                        'div',
                        null,
                        _react2['default'].createElement(
                            'span',
                            { className: 'about-bold color' },
                            '4. It is also important'
                        ),
                        ' to note that recipients can be listed under more than one category within each theme. This is because the tool uses the Charity Commission’s non-distinct approach to categorising charities under themes.'
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'about-example' },
                        'For example: under the theme of cause, NSPCC is categorised as both ‘education/training’ and ‘general charitable purposes’, so a funder is considered as supporting both categories.'
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'section-title' },
                        _react2['default'].createElement(
                            'span',
                            null,
                            'Who created this tool?'
                        )
                    ),
                    _react2['default'].createElement(
                        'div',
                        null,
                        'This tool was created by João Silva and Oliver Carrington as a submission to Digging the Data, the 360Giving data visualisation challenge.'
                    ),
                    _react2['default'].createElement(
                        'div',
                        null,
                        'João Silva is a frontend software developer. He has created (something) software programmes for advertising and HR companies based in London and Berlin. What kind of software and programmes that you use. Data viz for World Cup. This is his first work on a project for the social sector.'
                    ),
                    _react2['default'].createElement(
                        'div',
                        null,
                        '(Photo and Twitter handle)'
                    ),
                    _react2['default'].createElement(
                        'div',
                        null,
                        'Oliver is a charity sector professional with experience in the UK and Japan. He has worked as a grant manager for foundations and also as a consultant for New Philanthropy Capital (NPC), where he advised funders on grant-making best practice, strategy and evaluation. He has authored a number of published reports, featuring topics such as ',
                        _react2['default'].createElement(
                            'a',
                            { className: 'link', href: 'https://www.thinknpc.org/publications/data-visualisation-whats-it-all-about/', target: '_blank' },
                            'data visualisation'
                        ),
                        ', ',
                        _react2['default'].createElement(
                            'a',
                            { className: 'link', href: 'https://www.thinknpc.org/publications/funders-influence-for-good/', target: '_blank' },
                            'campaigning for grant-makers'
                        ),
                        ' and ',
                        _react2['default'].createElement(
                            'a',
                            { className: 'link', href: 'https://www.thinknpc.org/publications/funders-grantee-effectiveness/', target: '_blank' },
                            'funding capacity building'
                        ),
                        '.'
                    ),
                    _react2['default'].createElement(
                        'div',
                        null,
                        '(Photo and Twitter handle)'
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'bottom-note' },
                        _react2['default'].createElement(
                            'div',
                            null,
                            'This tool is freely available under the ',
                            _react2['default'].createElement(
                                'a',
                                { className: 'link-rev', href: 'https://creativecommons.org/licenses/by/4.0/', target: '_blank' },
                                'Creative Commons 4.0 licence'
                            ),
                            '.'
                        ),
                        _react2['default'].createElement(
                            'div',
                            null,
                            'The grant funding data comes from ',
                            _react2['default'].createElement(
                                'a',
                                { className: 'link-rev', href: 'http://grantnav.threesixtygiving.org/datasets/', target: '_blank' },
                                'GrantNav'
                            ),
                            ', a ',
                            _react2['default'].createElement(
                                'a',
                                { className: 'link-rev', href: 'http://www.threesixtygiving.org/', target: '_blank' },
                                '360Giving'
                            ),
                            ' application released under the terms of the ',
                            _react2['default'].createElement(
                                'a',
                                { className: 'link-rev', href: 'https://creativecommons.org/licenses/by-sa/4.0/', target: '_blank' },
                                'Creative Commons Attribution Sharealike licence (CC-BY-SA)'
                            ),
                            '.'
                        ),
                        _react2['default'].createElement(
                            'div',
                            null,
                            'The Charity Commission data for the themes comes from ',
                            _react2['default'].createElement(
                                'a',
                                { className: 'link-rev', href: 'https://charitybase.uk/', target: '_blank' },
                                'CharityBase'
                            ),
                            ' The original data comes from the ',
                            _react2['default'].createElement(
                                'a',
                                { className: 'link-rev', href: 'http://data.charitycommission.gov.uk/', target: '_blank' },
                                'Charity Commission data files'
                            ),
                            ' provided under an ',
                            _react2['default'].createElement(
                                'a',
                                { className: 'link-rev', href: 'https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/', target: '_blank' },
                                'Open Government Licence'
                            ),
                            '.'
                        )
                    )
                )
            );
        }
    }]);

    return About;
})(_react.Component);

exports['default'] = (0, _reactRedux.connect)(null, mapDispatchToProps)(About);
module.exports = exports['default'];

//# sourceMappingURL=About-compiled.js.map