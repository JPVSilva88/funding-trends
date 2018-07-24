import React from 'react';
import Helper from '../Helper';

const Heatmap = ({ list, getObject, getValue, maxValue, colorClass }) => (
    <div className="heatmap">
        {list.map((l) => {
            const obj = getObject(l);
            const val = getValue(l);
            return <div key={l} className="heatmap-cell">
                <div>
                    <i className={`fa ${obj.icon}`}/>
                    <span>{obj.short}</span>
                </div>
                <div className={`heatmap-${parseInt(((val * 100) / maxValue) / 10)} ${colorClass}`}>
                    {Helper.getDisplayNumber(val, true)}
                </div>
            </div>;
        })}
    </div>
);

export default Heatmap;