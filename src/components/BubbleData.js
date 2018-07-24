import React from 'react';
import Helper from '../Helper';

const BubbleData = ({ list, getValue, start = 0, end = 5, colorClass, seeMore, seeMoreLabel }) => (
    <div>
        <div className="bubbles">
            {list.slice(start,end).map((f, index) => {
                const moneyValue = getValue(f);
                const size = moneyValue * 100 / getValue(list[0]);
                return <div key={index} className={colorClass}>
                    {size <= 60 && Helper.getDisplayNumber(moneyValue, true)}
                    <div className="bubble" style={{height: size, width: size}}>
                        {size > 60 && Helper.getDisplayNumber(moneyValue, true)}
                    </div>
                    <div className="bubble--title">{f.n}</div>
                </div>;
            })}
        </div>
        {seeMore && <div className="see-more"><span className="link-rev" onClick={seeMore}>{seeMoreLabel}</span></div>}
    </div>
);

export default BubbleData;