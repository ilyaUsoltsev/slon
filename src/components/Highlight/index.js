import React from 'react';
import Description from './Description';
import Discount from './Discount';

const Highlight = () => {
    return (
        <div className="highlight_wrapper" style={{background:'#f5f5f5'}}>
            <Description />
            <Discount />
        </div>
    );
};

export default Highlight;