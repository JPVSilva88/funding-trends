import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions/index.js';

import data from '../data.json';
import CharityChooser from './CharityChooser';

//import 'font-awesome/css/font-awesome.min.css';

const mapStateToProps = (state) => {
    return {
        selectedCharity: state.selectedCharity
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setCharity: (name) => {
            dispatch(actions.setCharity(name));
        },
        setYear: (year) => {
            dispatch(actions.setYear(year));
        },
        setPage: (page) => {
            dispatch(actions.setPage(page));
        }
    };
};

class MainPage extends Component {
    constructor() {
        super();
    }

    onOverallClick = () => {
        this.props.setPage("overall");
        this.props.setYear(2017);
    };

    onCharityChange = (newValue) => {
        this.props.setCharity(newValue);
        this.props.setPage("foundation");
        this.props.setYear(Object.keys(data.foundations.find(f => f.n === newValue).y).sort((a,b) => b.localeCompare(a))[0]);
    };

    render() {
        return <div className="page">
            <div className="page-title">
                <span>Funding Trends</span>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="page-middle">
                <div className="square zoom-out" onClick={this.onOverallClick.bind(this)}>
                    Click to view overall headline trends
                </div>
                <div className="square zoom-in" onClick={() => document.getElementById("select").focus()}>
                    View dashboards of specific funders
                    <div className="chooser">
                        <span>Search Funder:</span>
                        <CharityChooser onChange={this.onCharityChange.bind(this)}/>
                    </div>
                </div>
            </div>
            <div className="page-bottom">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <span onClick={() => this.props.setPage("about")}>About</span>
            </div>
        </div>;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

