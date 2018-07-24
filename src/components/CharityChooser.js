import React, { Component } from 'react';
import { connect } from 'react-redux';
import Autosuggest from 'react-autosuggest';
import Select from 'react-select';

import data from '../data.json';

import 'react-select/dist/react-select.css';

class CharityChooser extends Component {
    constructor() {
        super();

        this.state = {
            value: ''
        };
    }

    onChange = (newValue) => {
        this.setState({
            value: newValue
        });
        this.props.onChange(newValue && newValue.n);
    };

    render() {
        const { year, checkTheme, currCharity } = this.props;
        return <div className="charity-chooser">
            <Select
                options={data.foundations
                    .filter(
                        f => (!year || f.y[year])
                        && (!checkTheme || Object.keys(f.t[year].c).length > 0)
                        && (!currCharity || f.n !== currCharity)
                    )
                    .sort((a,b) => a.n.localeCompare(b.n))}
                value={this.state.value}
                valueKey="n"
                labelKey="n"
                placeholder="Select or type..."
                onChange={this.onChange.bind(this)}
                searchable={true}
            />
        </div>;
    }
}

export default CharityChooser;

