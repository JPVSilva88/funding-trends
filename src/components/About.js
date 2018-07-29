import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions/index.js';

import 'font-awesome/css/font-awesome.min.css';

const mapDispatchToProps = (dispatch) => {
    return {
        setPage: (name) => {
            dispatch(actions.setPage(name));
        }
    };
};

class About extends Component {
    constructor() {
        super();

        this.onBackClicked = this.onBackClicked.bind(this);
    }

    onBackClicked() {
        this.props.setPage("home");
    }

    render() {
        return <div className="about dashboard">
            <div className="dashboard--top">
                <div className="back" onClick={this.onBackClicked}>
                    <i className="fa fa-chevron-left fa-2x"/>
                </div>
                <div className="dashboard--title">
                    <div className="foundation--name">About</div>
                </div>
            </div>
            <div className="about-content">
                <div className="section-title"><span>What is it?</span></div>
                <div>Funding Trends helps people understand grant-making data from <a className="link" href="http://www.threesixtygiving.com" target="_blank" rel="noopener noreferrer">360Giving</a> in a new and exciting way. Users can zoom out on the data to see the overall funding trends and then zoom in to take a closer look at dedicated dashboards for each funder for the time period 2013-17.</div>
                <div style={{marginTop: "15px"}}>It uses data from 360Giving’s <a className="link" href="http://grantnav.threesixtygiving.org/" target="_blank" rel="noopener noreferrer">GrantNav</a>, as well as Charity Commission data from the <a className="link" href="https://charitybase.uk/" target="_blank" rel="noopener noreferrer">CharityBase</a> database.</div>
                <div className="section-title"><span>Who can it help?</span></div>
                <div className="about-help">
                    <div>
                        <div className="about-help--title"><div>Funders</div></div>
                        <div className="about-help--content">
                            <div>Undertake strategic reviews</div>
                            <div>See how your funding has changed over the years and how your foundation compares to others</div>
                        </div>
                        <div className="about-help--content">
                            <div>Communicate your data</div>
                            <div>Use your dedicated dashboard to share key statistics about your giving with trustees, staff and recipients</div>
                        </div>
                    </div>
                    <div>
                        <div className="about-help--title"><div>Charities or other user-led organisations</div></div>
                        <div className="about-help--content">
                            <div>Research new funding sources</div>
                            <div>Find out more about potential funding prospects and their approach to grant-making</div>
                        </div>
                        <div className="about-help--content">
                            <div>Learn more about your current funders</div>
                            <div>See how they compare to other funders and view other organisations that are also funded</div>
                        </div>
                    </div>
                    <div>
                        <div className="about-help--title"><div>Researchers</div></div>
                        <div className="about-help--content">
                            <div>Understand common practice among funders</div>
                            <div>Examine topics such as popular focus themes, number of recipients and size of grants</div>
                        </div>
                        <div className="about-help--content">
                            <div>Uncover new patterns</div>
                            <div>Discover changes in grant-making over the years at the overall and individual level</div>
                        </div>
                    </div>
                </div>
                <div className="section-title"><span>What are the limitations of this data?</span></div>
                <div className="about-space">There are limitations in this data that you should keep in mind when researching foundations and making conclusions from the data:</div>
                <div><span className="about-bold color">1.	Not all funders are included</span>: It only includes funders that have submitted their data to the 360Giving before July 2018—find out how to submit your foundation’s data <a className="link" href="http://www.threesixtygiving.org/support/publish-data/" target="_blank" rel="noopener noreferrer">here</a>.</div>
                <div className="about-example">For example: major UK funder Garfield Weston Foundation is not included.</div>
                <div><span className="about-bold color2">2.	Funding data does not cover all years</span>: This tool uses data over a five-year period from 2013 to 2017, but not all funders have submitted their data for this period.</div>
                <div className="about-example">For example: for the year 2017, the Wellcome Trust has so far only submitted data from 1 January to 30 September.</div>
                <div><span className="about-bold color3">3.	Theme data is incomplete</span>: Funding recipients without a completed or matching Charity Commission field in the 360Giving Standard are excluded, alongside organisations that are not currently registered under the Charity Commission for England and Wales.</div>
                <div className="about-example">For example: theme data does not cover the organisations that are not registered as charities organisations among the Big Lottery Foundation's grant recipients.</div>
                <div><span className="about-bold color">4. Recipients can be listed under more than one category within each theme:</span> This is because the tool uses the Charity Commission’s non-distinct approach to categorising charities under multiple themes.</div>
                <div className="about-example">For example: as NSPCC is categorised under both ‘education/training’ and ‘general charitable purposes’, it's funders are listed as supporting both categories.</div>
                <div className="section-title"><span>Who created this tool?</span></div>
                <div>This tool was created by João Silva and Oliver Carrington as a submission to Digging the Data, the 360Giving data visualisation challenge.</div>
                <div className="about-creators">
                    <div className="joao">
                        <div className="about-image"/>
                        <div className="about-name">João Silva</div>
                        <div className="about-twitter">
                            <i className="fa fa-lg fa-twitter"/>
                            <a className="link" href="https://twitter.com/JPVSilva88" target="_blank" rel="noopener noreferrer">@JPVSilva88</a>
                        </div>
                        <div>João is a frontend developer. Originally from Portugal, he has worked in his field for companies in London and Berlin. He has created several graphics visualising data from sporting statistics, but this is his first project for the social sector.</div>
                    </div>
                    <div className="oliver">
                        <div className="about-image"/>
                        <div className="about-name">Oliver Carrington</div>
                        <div className="about-twitter">
                            <i className="fa fa-lg fa-twitter"/>
                            <a className="link" href="https://twitter.com/olliecarrington" target="_blank" rel="noopener noreferrer">@olliecarrington</a>
                        </div>
                        <div>Oliver is a charity sector professional with experience in the UK and Japan. He has worked as a grant manager for foundations and advised funders as a consultant at NPC. He's also authored reports on <a className="link" href="https://www.thinknpc.org/publications/data-visualisation-whats-it-all-about/" target="_blank" rel="noopener noreferrer">data visualisation</a>, <a className="link" href="https://www.thinknpc.org/publications/funders-influence-for-good/" target="_blank" rel="noopener noreferrer">campaigning for grant-makers</a> and <a className="link" href="https://www.thinknpc.org/publications/funders-grantee-effectiveness/" target="_blank" rel="noopener noreferrer">funding capacity building</a>.</div>
                    </div>
                </div>
                <div className="bottom-note">
                    <div>This tool is freely available under the <a className="link-rev" href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">Creative Commons 4.0 licence</a>.</div>
                    <div>The grant funding data comes from <a className="link-rev" href="http://grantnav.threesixtygiving.org/datasets/" target="_blank" rel="noopener noreferrer">GrantNav</a>, a <a className="link-rev" href="http://www.threesixtygiving.org/" target="_blank" rel="noopener noreferrer">360Giving</a> application released under the terms of the <a className="link-rev" href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">Creative Commons Attribution Sharealike licence (CC-BY-SA)</a>.</div>
                    <div>The Charity Commission data for the themes comes from <a className="link-rev" href="https://charitybase.uk/" target="_blank" rel="noopener noreferrer">CharityBase</a> The original data comes from the <a className="link-rev" href="http://data.charitycommission.gov.uk/" target="_blank" rel="noopener noreferrer">Charity Commission data files</a> provided under an <a className="link-rev" href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" target="_blank" rel="noopener noreferrer">Open Government Licence</a>.</div>
                </div>
            </div>
        </div>;
    }
}

export default connect(null, mapDispatchToProps)(About);

