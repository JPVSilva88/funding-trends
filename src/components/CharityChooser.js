import React from 'react';
import Select from 'react-select';

import data from '../data/data.json';

import 'react-select/dist/react-select.css';

const CharityChooser = ({ year, checkTheme, currCharity, value, onChange }) => (
    <div className="charity-chooser">
        <Select
            id="select"
            options={data.foundations
                .filter(
                    f => (!year || f.y[year])
                    && (!checkTheme || Object.keys(f.t[year].c).length > 0)
                    && (!currCharity || f.n !== currCharity)
                )
                .sort((a,b) => a.n.localeCompare(b.n))}
            value={value}
            valueKey="n"
            labelKey="n"
            placeholder="Select or type..."
            onChange={(newValue) => onChange(newValue && newValue.n)}
            searchable={true}
        />
    </div>
);

export default CharityChooser;

