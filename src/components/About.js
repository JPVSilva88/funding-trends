import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions/index.js';

import 'font-awesome/css/font-awesome.min.css';
import 'react-select/dist/react-select.css';
import 'c3/c3.min.css';

const mapDispatchToProps = (dispatch) => {
    return {
        setPage: (name) => {
            dispatch(actions.setPage(name));
        }
    };
};
class About extends Component {
    render() {
        return <div className="about dashboard">
            <div className="dashboard--top">
                <div className="back" onClick={() => this.props.setPage("home")}>
                    <i className="fa fa-chevron-left fa-2x"/>
                </div>
                <div className="dashboard--title">
                    <div className="foundation--name">About</div>
                </div>
            </div>
            <div className="about-content">
                <div>The aim of this free tool is to help people understand grant-making data from <a className="link" href="http://www.threesixtygiving.com" target="_blank">360Giving</a> in a new and exciting way.</div>
                <div className="section-title"><span>What is it?</span></div>
                <div>Funding Trends allows users to zoom out on the data to see the overall funding trends and then zoom in to take a closer look at dedicated dashboards for each funder.</div>
                <div>It uses data from 360Giving’s <a className="link" href="http://grantnav.threesixtygiving.org/" target="_blank">GrantNav</a>, as well as Charity Commission data from the <a className="link" href="https://charitybase.uk/" target="_blank">CharityBase</a> database.</div>
                <div className="section-title"><span>Who can it help?</span></div>
                <div className="about-help">
                    <div>
                        <div className="about-help--title"><div>Funders</div></div>
                        <div>Undertake strategic reviews: see how your funding has changed over the years and how your foundation compares to others</div>
                        <div>Communicate your data: use your dedicated dashboard to show key statistics about your giving to trustees, staff and recipients</div>
                    </div>
                    <div>
                        <div className="about-help--title"><div>Charities or other user-led organisations</div></div>
                        <div>Research new funding sources: find out more about potential funding prospects and their approach to grant-making</div>
                        <div>Learn more about your current funders: see how they rank against other funders and how your grant compares to their most common interests and approach</div>
                    </div>
                    <div>
                        <div className="about-help--title"><div>Researchers</div></div>
                        <div>Understand common practice among funders: examine topics such as popular focus themes, number of recipients and average grant sizes</div>
                        <div>Uncover patterns: Find out changes in grant-making over the years at the overall and individual level</div>
                    </div>
                </div>
                <div className="section-title"><span>What are the limitations of this data?</span></div>
                <div className="about-space">There are limitations in this data that you should keep in mind when researching foundations and making conclusions from the data:</div>
                <div><span className="about-bold color">1.	Not all funders are included</span>: This tool only includes foundations that have submitted their data to the 360Giving campaign—find out how to join the movement and submit your foundation’s data <a className="link" href="http://www.threesixtygiving.org/support/publish-data/" target="_blank">here</a>.</div>
                <div className="about-example">For example: major UK funder Garfield Weston Foundation is not included.</div>
                <div><span className="about-bold color2">2.	Funding data does not cover all years</span>: This tool looks at data over a five-year period from 2013 to 2017, but not all funders have submitted their data for this period.</div>
                <div className="about-example">For example: for the year 2017, the Wellcome Trust has so far only submitted data from 1 January to 30 September.</div>
                <div><span className="about-bold color3">3.	Theme data is incomplete</span>: Visuals from the tool that include themes (eg, causes, users and operations) are limited to a proportion of recipients. This includes recipients without a completed or matching Charity Commission field in the 360Giving Standard, as well as organisations that are not currently registered under the Charity Commission for England and Wales.</div>
                <div className="about-example">For example: theme data does not cover the many user-led organisations funded by the Big Lottery Foundation.</div>
                <div><span className="about-bold color">4. It is also important</span> to note that recipients can be listed under more than one category within each theme. This is because the tool uses the Charity Commission’s non-distinct approach to categorising charities under themes.</div>
                <div className="about-example">For example: under the theme of cause, NSPCC is categorised as both ‘education/training’ and ‘general charitable purposes’, so a funder is considered as supporting both categories.</div>
                <div className="section-title"><span>Who created this tool?</span></div>
                <div>This tool was created by João Silva and Oliver Carrington as a submission to Digging the Data, the 360Giving data visualisation challenge.</div>
                <div>João Silva is a frontend software developer. He has created (something) software programmes for advertising and HR companies based in London and Berlin. What kind of software and programmes that you use. Data viz for World Cup. This is his first work on a project for the social sector.</div>
                <div>(Photo and Twitter handle)</div>
                <div>Oliver is a charity sector professional with experience in the UK and Japan. He has worked as a grant manager for foundations and also as a consultant for New Philanthropy Capital (NPC), where he advised funders on grant-making best practice, strategy and evaluation. He has authored a number of published reports, featuring topics such as <a className="link" href="https://www.thinknpc.org/publications/data-visualisation-whats-it-all-about/" target="_blank">data visualisation</a>, <a className="link" href="https://www.thinknpc.org/publications/funders-influence-for-good/" target="_blank">campaigning for grant-makers</a> and <a className="link" href="https://www.thinknpc.org/publications/funders-grantee-effectiveness/" target="_blank">funding capacity building</a>.</div>
                <div>(Photo and Twitter handle)</div>
                <div className="bottom-note">
                    <div>This tool is freely available under the <a className="link-rev" href="https://creativecommons.org/licenses/by/4.0/" target="_blank">Creative Commons 4.0 licence</a>.</div>
                    <div>The grant funding data comes from <a className="link-rev" href="http://grantnav.threesixtygiving.org/datasets/" target="_blank">GrantNav</a>, a <a className="link-rev" href="http://www.threesixtygiving.org/" target="_blank">360Giving</a> application released under the terms of the <a className="link-rev" href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">Creative Commons Attribution Sharealike licence (CC-BY-SA)</a>.</div>
                    <div>The Charity Commission data for the themes comes from <a className="link-rev" href="https://charitybase.uk/" target="_blank">CharityBase</a> The original data comes from the <a className="link-rev" href="http://data.charitycommission.gov.uk/" target="_blank">Charity Commission data files</a> provided under an <a className="link-rev" href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" target="_blank">Open Government Licence</a>.</div>
                </div>
            </div>
        </div>;
    }
}

export default connect(null, mapDispatchToProps)(About);

