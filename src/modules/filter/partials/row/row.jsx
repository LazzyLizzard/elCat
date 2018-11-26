import React from 'react';
import Select from 'react-select';

export const FilterRow = ({title = '', data}) => {
    console.log('FilterRow', data);
    return (
        <div className="filter-row">
            <div className="filter-row__title">
                {title}
            </div>
            <div className="filter-row__content">
                <div style={{width: '100%'}}>
                    <Select
                        value={[]}
                    />
                </div>
            </div>
        </div>
    );
};
