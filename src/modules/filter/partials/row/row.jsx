import React from 'react';
import Select, {components} from 'react-select';
// import r from 'assests/icons/star.svg';

const MultiValueLabel = props => (
    <components.MultiValueLabel {...props}>
        {props.children}
        {props.data.featured && <React.Fragment> FEAT </React.Fragment>}
    </components.MultiValueLabel>
);

const Option = props => (
    <components.Option {...props}>
        {props.children}
        {props.data.featured && <React.Fragment> FEAT </React.Fragment>}
    </components.Option>
);

export const FilterRow = ({title = '', options = [], name, closeMenuOnSelect, hideSelectedOptions}) => {
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
                        components={{MultiValueLabel, Option}}
                        // defaultValue={options}
                        name={name}
                        options={options}
                        closeMenuOnSelect={closeMenuOnSelect}
                        hideSelectedOptions={hideSelectedOptions}
                    />
                </div>
            </div>
        </div>
    );
};
