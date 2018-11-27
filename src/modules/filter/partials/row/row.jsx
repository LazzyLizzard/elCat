import React from 'react';
import Select, {components} from 'react-select';

const MultiValueContainer = (props) => {
    console.log('props', props);
    return (
        <components.MultiValueContainer {...props}>
            {props.children}
            {props.data.featured && <React.Fragment>FEAT</React.Fragment>}
        </components.MultiValueContainer>
    );
};

export const FilterRow = ({title = '', options = [], name}) => {
    console.log('FilterRow', options);
    return (
        <div className="filter-row">
            <div className="filter-row__title">
                {title}
            </div>
            <div className="filter-row__content">
                <div style={{width: '100%'}}>
                    <Select
                        isMulti
                        placeholder=""
                        components={{MultiValueContainer}}
                        // defaultValue={options}
                        name={name}
                        options={options}
                    />
                </div>
            </div>
        </div>
    );
};
