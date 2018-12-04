import React from 'react';
import Select, {components} from 'react-select';
// import {ButtonCheckboxGroup} from "localResolve/components/ui/button-checkbox-group";
// import {PICK_FORM_FILTERS} from "localResolve/pages/pick/field-names";
import {Field} from 'redux-form';
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


class CustomSelect extends React.Component {
    render() {
        const {input} = this.props;
        return (
            <Select
                {...this.props}
                onChange={event => input.onChange(event)}
            />
        );
    }
}

export const FilterRow = ({
    title = '',
    options = [],
    name,
    closeMenuOnSelect,
    hideSelectedOptions,
    defaultValue
}) => {
    console.log('FilterRow', options);
    return (
        <div className="filter-row">
            <div className="filter-row__title">
                {title}
            </div>
            <div className="filter-row__content">
                <div style={{width: '100%'}}>
                    {/* https://github.com/erikras/redux-form/issues/82#issuecomment-384791704 */}
                    <Field
                        component={CustomSelect}
                        isMulti
                        placeholder=""
                        components={{MultiValueLabel, Option}}
                        name={name}
                        options={options}
                        closeMenuOnSelect={closeMenuOnSelect}
                        hideSelectedOptions={hideSelectedOptions}
                        defaultValue={defaultValue}
                    />
                </div>
            </div>
        </div>
    );
};
