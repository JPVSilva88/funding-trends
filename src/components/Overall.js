import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import actions from '../actions/index.js';
import c3 from 'c3';

import 'font-awesome/css/font-awesome.min.css';
import 'react-select/dist/react-select.css';
import 'c3/c3.min.css';

import data from '../data.json';
import BubbleData from './BubbleData';
import NumberData from './NumberData';
import Heatmap from './Heatmap';
import Helper from '../Helper';
import causes from '../causes.json';
import beneficiaries from '../beneficiaries.json';
import operations from '../operations.json';

const mapStateToProps = (state) => {
    return {
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
        setBubbleExpand: (name) => {
            dispatch(actions.setBubbleExpand(name));
        }
    };
};
class Overall extends Component {
    constructor(props) {
        super(props);

        this.options = [2013,2014,2015,2016,2017].map((y) => {
            return {
                label: y,
                value: y
            }
        });

        this.onBackClicked = this.onPageChanged.bind(this, 'home');
        this.onAboutClicked = this.onPageChanged.bind(this, 'about');
        this.onYearChanged = this.onYearChanged.bind(this);
    }

    componentDidMount() {
        this.startChart();
    }

    componentDidUpdate() {
        this.startChart();
    }

    getChartOptions(chartId, interval, max, property, isCurrency = false) {
        const { year } = this.props;
        const number = [];
        for(var i = 0; i < max; i += interval) {
            number.push({
                value: 0,
                start: i,
                end: i + interval,
                label: `${Helper.getDisplayNumber(i, isCurrency, 2)} - ${Helper.getDisplayNumber(i + interval, isCurrency, 2)}`,
                list: []
            });
        }

        number.push({
            value: 0,
            start: max,
            end: Infinity,
            label: `${Helper.getDisplayNumber(max, isCurrency, 2)}+`,
            list: []
        });
        data.foundations.forEach((f) => {
            if(!f.y[year]) {
                return;
            }

            const numObj = number.find((n) => n.start <= f.y[year][property] && n.end >= f.y[year][property]);
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
                contents: (d) => {
                    var text = "<div class='tooltip-text'>";
                    number[d[0].index].list.sort((a,b) => b.y[year][property] - a.y[year][property]).forEach((l) => {
                        text += "<div class='tooltip-row'>";
                        text += "<div>";
                        text += l.n;
                        text += "</div>";
                        text += "<div>";
                        text += Helper.getDisplayNumber(l.y[year][property], isCurrency, 2);
                        text += "</div>";
                        text += "</div>";
                    });
                    text += "</div>";
                    return text;
                }
            }
        }
    }

    /**
     * Generates the chart.
     */
    startChart() {
        c3.generate(
            this.getChartOptions(
                "count",
                20,
                300,
                'c'
            ));
        c3.generate(
            this.getChartOptions(
                "money",
                250000,
                4000000,
                'm',
                true
            ));
    }

    onYearChanged(newValue) {
        this.props.setYear(newValue.value);
    }

    onPageChanged(page) {
        this.props.setPage(page);
        this.props.bubbleExpand.forEach((be) => this.props.setBubbleExpand(be));
    }

    render() {
        const { year, bubbleExpand } = this.props;
        const moneySort = [].concat(data.foundations).filter((f) => f.y[year]).sort((a, b) => b.y[year].m - a.y[year].m);

        const totalFunders = data.foundations.reduce((acc, f) => {
            return acc += f.y[year] ? 1 : 0;
        }, 0);
        const totalGrants = data.foundations.reduce((acc, f) => {
            return acc += f.y[year] ? f.y[year].c : 0;
        }, 0);
        const totalMoney = data.foundations.reduce((acc, f) => {
            return acc += f.y[year] ? f.y[year].m : 0;
        }, 0);
        const maxCause = Object.keys(data.themes[year].c).reduce((acc, c) => {
            return Math.max(acc, data.themes[year].c[c]);
        }, -Infinity);
        const maxBeneficiary = Object.keys(data.themes[year].b).reduce((acc, b) => {
            return Math.max(acc, data.themes[year].b[b]);
        }, -Infinity);
        const maxOperation = Object.keys(data.themes[year].o).reduce((acc, o) => {
            return Math.max(acc, data.themes[year].o[o]);
        }, -Infinity);

        return <div className="dashboard overall">
            <div className="dashboard--top">
                <div className="back" onClick={this.onBackClicked}>
                    <i className="fa fa-chevron-left fa-2x"/>
                </div>
                <div className="dashboard--title">
                    <div className="foundation--name">Overall Funding Trends</div>
                </div>
                <div className="year-selector">
                    Data for Year
                    <Select
                        options={this.options}
                        value={year}
                        onChange={this.onYearChanged}
                        clearable={false}
                        searchable={false}
                    />
                </div>
            </div>
            <div className="section-title"><span>Top Funders By Grant Spending</span></div>
            <BubbleData
                list={moneySort}
                getValue={(f) => f.y[year].m}
                seeMore={() => this.props.setBubbleExpand("overallMoney")}
                seeMoreLabel={bubbleExpand.indexOf("overallMoney") > -1 ? "See Less" : "See More"}
                end={bubbleExpand.indexOf("overallMoney") > -1 ? 15 : 5}
            />
            <div className="section-title"><span>Top Recipients by Grants Received</span></div>
            <BubbleData
                colorClass="bubble-alt"
                list={data.averageFunders[year].top}
                getValue={(f) => f.m}
            />
            <div className="section-title"><span>Funder Statistics</span></div>
            <div className="subsection-title">Distribution of Funders by Average Grant Size</div>
            <div className="average-grants">
                <NumberData
                    value={totalGrants / totalFunders}
                    maxDigits={0}
                    title="Average Number Of Grants Per Funder"
                />
                <div className="chart" id="chart-count"/>
            </div>
            <div className="subsection-title">Distribution of Funders by Total Grants Awarded</div>
            <div className="average-money">
                <NumberData
                    value={totalMoney / totalGrants}
                    maxDigits={0}
                    title="Average Grant Size"
                    isCurrency={true}
                />
                <div className="chart" id="chart-money"/>
            </div>
            <div className="section-title"><span>Spending on Themes</span></div>
            <div className="subsection-title">Causes</div>
            <Heatmap
                list={Object.keys(data.themes[year].c)}
                getObject={(c) => causes.find((c2) => c2.id == c)}
                getValue={(c) => data.themes[year].c[c]}
                maxValue={maxCause}
                colorClass="cause"
            />
            <div className="subsection-title">Users</div>
            <Heatmap
                list={Object.keys(data.themes[year].b)}
                getObject={(b) => beneficiaries.find((b2) => b2.id == b)}
                getValue={(b) => data.themes[year].b[b]}
                maxValue={maxBeneficiary}
                colorClass="beneficiary"
            />
            <div className="subsection-title">Operations</div>
            <Heatmap
                list={Object.keys(data.themes[year].o)}
                getObject={(o) => operations.find((o2) => o2.id == o)}
                getValue={(o) => data.themes[year].o[o]}
                maxValue={maxOperation}
                colorClass="operation"
            />
            <div className="bottom-note">
                <div>Note: recipients may have more than one theme description within each category and data may not be provided for full calendar years, see <span className="link-rev" onClick={this.onAboutClicked}>About</span> for limitations in this data</div>
            </div>
        </div>;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Overall);

