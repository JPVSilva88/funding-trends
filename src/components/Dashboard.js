import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import actions from '../actions/index.js';
import c3 from 'c3';

import 'font-awesome/css/font-awesome.min.css';
import 'react-select/dist/react-select.css';
import 'c3/c3.min.css';

import CharityChooser from './CharityChooser';

import BubbleData from './BubbleData';
import NumberData from './NumberData';

import data from '../data/data.json';
import causes from '../data/causes.json';
import beneficiaries from '../data/beneficiaries.json';
import operations from '../data/operations.json';

const mapStateToProps = (state) => {
    return {
        comparison: state.selectedComparison,
        charity: state.selectedCharity,
        year: state.selectedYear,
        bubbleExpand: state.bubbleExpand
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setPage: (name) => {
            dispatch(actions.setPage(name));
        },
        setYear: (year) => {
            dispatch(actions.setYear(year));
        },
        setComparison: (comparison) => {
            dispatch(actions.setComparison(comparison));
        },
        setBubbleExpand: (name) => {
            dispatch(actions.setBubbleExpand(name));
        }
    };
};
class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.charity = data.foundations.find((a) => a.n === props.charity);

        this.years = Object.keys(this.charity.y).map((y) => {
           return {
               label: y,
               value: y
           }
        });

        this.onAboutClicked = this.onPageChanged.bind(this, 'about');
        this.onHomeClicked = this.onPageChanged.bind(this, 'home');
        this.onYearChanged = this.onYearChanged.bind(this);
        this.onComparisonChanged = this.onComparisonChanged.bind(this);
    }

    componentDidMount() {
        this.startChart();
    }

    componentDidUpdate() {
        this.startChart();
    }

    getThemeData(property, dictionary) {
        const { year, comparison } = this.props;
        const charityName = this.charity.n;
        const foundData = this.charity.t[year][property];
        var themeData;

        if(comparison) {
            const comparisonData = data.foundations.find((a) => a.n === comparison).t[year][property];

            themeData = dictionary.map((t) => {
                return {
                    name: t.name,
                    short: t.short,
                    [charityName]: foundData[t.id] || 0,
                    [comparison]: comparisonData[t.id] || 0
                }
            });
        } else {
            themeData = dictionary.map((t) => {
                return {
                    name: t.name,
                    short: t.short,
                    [charityName]: foundData[t.id] || 0
                }
            });}

        return themeData.sort((a,b) => {
            const diff = b[charityName] - a[charityName];
            // Order alphabetically if they have the same number
            return diff !== 0 ? diff : a.short.localeCompare(b.short);
        });
    }

    getChartOptions(jsonData, chartId) {
        const dataValues = [this.charity.n];
        const axes = {
            [this.charity.n]: 'y2'
        };
        if(this.props.comparison) {
            dataValues.push(this.props.comparison);
            axes[this.props.comparison] = 'y2';
        }

        var pattern;
        switch(chartId) {
            case "c":
                pattern = ['#C32E9A', '#EDB7DD'];
                break;
            case "b":
                pattern = ['#F3832E', '#FAD9C1'];
                break;
            default:
                pattern = ['#3DADB2', '#A9DEE1'];
                break;
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
                height: 60 + (jsonData.length * 25)
            },
            color: {
                pattern: pattern
            },
            tooltip: {
                show: false
            },
            legend: {
                show: false
            }
        }
    }

    /**
     * Generates the charts.
     */
    startChart() {
        c3.generate(
            this.getChartOptions(
                this.getThemeData('c', causes),
                "c"
            ));
        c3.generate(
            this.getChartOptions(
                this.getThemeData('b', beneficiaries),
                "b"
            ));
        c3.generate(
            this.getChartOptions(
                this.getThemeData('o', operations),
                "o"
            ));
    }

    /**
     * Called when the charity to compare is changed
     * @param newComparison New charity to compare with
     */
    onComparisonChanged(newComparison) {
        this.props.setComparison(newComparison);
    }

    /**
     * Called when the selected year is changed
     * @param newValue The new selected year
     */
    onYearChanged(newValue) {
        const { comparison } = this.props;
        if(comparison) {
            // Clear the comparison if it does not have the selected year
            const comparisonData = data.foundations.find((a) => a.n === this.props.comparison);

            if(!comparisonData.y[newValue.value]) {
                this.props.setComparison(null);
            }
        }

        this.props.setYear(newValue.value);
    }

    /**
     * Finds the top theme
     * @param foundation Foundation to look through
     * @param dictionary The dictionary of the respective theme
     * @param property The property of the theme in the foundation object
     * @returns {*} The top theme
     */
    findTopTheme(foundation, dictionary, property) {
        const { year } = this.props;
        const themes = foundation.t[year][property];
        if(Object.keys(themes).length === 0) {
            return;
        }

        // If the themes have the same value order them alphabetically
        return dictionary
            .find(theme => theme.id.toString() === Object.keys(themes)
                .reduce((a,b) => {
                    if(themes[a] === themes[b]) {
                        const themeA = dictionary.find(theme2 => theme2.id.toString() === a).short;
                        const themeB = dictionary.find(theme2 => theme2.id.toString() === b).short;
                        return themeA.localeCompare(themeB) > 0 ? b : a;
                    } else {
                        return themes[a] > themes[b] ? a : b;
                    }
                }))
    }

    onPageChanged(page) {
        this.props.setPage(page);
        this.props.setComparison(null);
        this.props.bubbleExpand.forEach((be) => this.props.setBubbleExpand(be));
    }

    render() {
        const { charity, year, comparison, bubbleExpand } = this.props;
        const moneySort = [].concat(data.foundations).filter((f) => f.y[year]).sort((a, b) => b.y[year].m - a.y[year].m);
        const found = this.charity;
        const index = moneySort.findIndex((a) => a.n === charity);
        const topThemes = {
            causes: this.findTopTheme(found, causes, 'c'),
            beneficiaries: this.findTopTheme(found, beneficiaries, 'b'),
            operations: this.findTopTheme(found, operations, 'o')
        };

        var comparisonData;
        if(comparison) {
            comparisonData = data.foundations.find((a) => a.n === comparison);

            topThemes.causesComparison = this.findTopTheme(comparisonData, causes, 'c');
            topThemes.beneficiariesComparison = this.findTopTheme(comparisonData, beneficiaries, 'b');
            topThemes.operationsComparison = this.findTopTheme(comparisonData, operations, 'o');
        }

        return <div className="dashboard funders">
            <div className="dashboard--top">
                <div className="back" onClick={this.onHomeClicked}>
                    <i className="fa fa-chevron-left fa-2x"/>
                </div>
                <div className="dashboard--title">
                    {found.n}
                </div>
                <div className="year-selector">
                    Data for Year
                    <Select
                        options={this.years}
                        value={year}
                        onChange={this.onYearChanged}
                        clearable={false}
                        searchable={false}
                    />
                </div>
            </div>
            <div className="section-title"><span>Key Statistics</span></div>
            <div className="foundation--numbers">
                <NumberData
                    value={found.y[year].c}
                    title="Grants Given"
                />
                <NumberData
                    value={found.y[year].m}
                    title="Amount Given"
                    isCurrency={true}
                />
                <NumberData
                    value={found.y[year].m / found.y[year].c}
                    title="Average Grant"
                    isCurrency={true}
                />
            </div>
            <div className="section-title"><span>Rank Among Funders</span></div>
            <div className="foundation--money-chart">
                <div></div>
                <div style={{width: `${(data.foundations.length - index - 1) * 100 / data.foundations.length}%`}}></div>
                <div>
                    <div>{data.foundations.length - index - 1} give less</div>
                    <div>{index} give more</div>
                </div>
                <div style={{width: `${index * 100 / data.foundations.length}%`}}></div>
                <div></div>
            </div>
            <div className="section-title"><span>Top Recipients By Grants Received</span></div>
            <BubbleData
                list={found.r[year]}
                getValue={(r) => r.m}
                seeMore={found.r[year].length > 5 && (() => this.props.setBubbleExpand("funders"))}
                seeMoreLabel={bubbleExpand.indexOf("funders") > -1 ? "See Less" : "See More"}
                end={bubbleExpand.indexOf("funders") > -1 ? 15 : 5}
            />

            <div className="section-title"><span>Grant Giving Themes</span></div>
            {Object.keys(found.t[year].c).length > 0 ? <div>
                <div className="comparison-chooser">
                    Compare this funder’s data with
                    <CharityChooser
                        onChange={this.onComparisonChanged}
                        checkTheme={true}
                        value={comparison && comparisonData}
                        currCharity={found.n}
                        year={year}
                    />
                </div>

                <div className="charts">
                    <div>
                        <div className="chart-text">
                            <div className="chart-title">Causes</div>
                            <div className="chart-top cause">
                                <div className="number--title">{found.n}</div>
                                <i className={`foundation--number fa fa-2x ${topThemes.causes.icon}`}/>
                                <div>{topThemes.causes.short}</div>
                            </div>
                            {comparison &&
                                <div className="chart-top-comparison cause">
                                    <div className="number--title">{comparison}</div>
                                    <i className={`foundation--number fa fa-2x ${topThemes.causesComparison.icon}`}/>
                                    <div>{topThemes.causesComparison.short}</div>
                                </div>
                            }
                        </div>
                        <div className="chart" id="chart-c"/>
                    </div>
                    <div>
                        <div className="chart" id="chart-b"/>
                        <div className="chart-text">
                            <div className="chart-title">Users</div>
                            <div className="chart-top beneficiary">
                                <div className="number--title">{found.n}</div>
                                <i className={`foundation--number fa fa-2x ${topThemes.beneficiaries.icon}`}/>
                                <div>{topThemes.beneficiaries.short}</div>
                            </div>
                            {comparison &&
                            <div className="chart-top-comparison beneficiary">
                                <div className="number--title">{comparison}</div>
                                <i className={`foundation--number fa fa-2x ${topThemes.beneficiariesComparison.icon}`}/>
                                <div>{topThemes.beneficiariesComparison.short}</div>
                            </div>
                            }
                        </div>
                    </div>
                    <div>
                        <div className="chart-text">
                            <div className="chart-title">Operations</div>
                            <div className="chart-top operation">
                                <div className="number--title">{found.n}</div>
                                <i className={`foundation--number fa fa-2x ${topThemes.operations.icon}`}/>
                                <div>{topThemes.operations.short}</div>
                            </div>
                            {comparison &&
                            <div className="chart-top-comparison operation">
                                <div className="number--title">{comparison}</div>
                                <i className={`foundation--number fa fa-2x ${topThemes.operationsComparison.icon}`}/>
                                <div>{topThemes.operationsComparison.short}</div>
                            </div>
                            }
                        </div>
                        <div className="chart" id="chart-o"/>
                    </div>
                </div>
            </div> : <div className="no-data">No theme data available for this funder</div>}
            <div className="bottom-note">
                <div>Note: recipients may have more than one theme description within each category and data may not be provided for full calendar years, see <span className="link-rev" onClick={this.onAboutClicked}>About</span> for limitations in this data</div>
            </div>
        </div>;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

