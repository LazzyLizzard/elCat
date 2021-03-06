import React from 'react';
import {memoize} from 'lodash';
import {Field} from 'redux-form';
import {declension} from 'utils/declension';
import {ButtonCheckboxGroup} from 'components/ui/index';
import {PICK_FORM_FILTERS} from '../../../field-names';

// to avoid memory leaks second arg creates map key since the first one returns array that cannot be a key
const memoizedProp = memoize(
    needleProps => needleProps.filter(item => item.featured),
    needleProps => needleProps.map(e => e.name).join('-')
);

const convertParamsToCheckboxFormat = (prodParamsList = []) =>
    prodParamsList.map(item => ({
        value: String(item.valueId),
        label: String(item.parameterName),
        featured: item.featured
    }));

export class FormFilterItem extends React.PureComponent {
    state = {
        onlyFeatured: false
    };

    selectView = () => this.setState({
        onlyFeatured: !this.state.onlyFeatured
    });

    // eslint-disable-next-line arrow-body-style
    showModeWrapper = (what, data) => {
        return what === true ? memoizedProp(data) : data;
    };

    render() {
        const {filterFieldValues = [], resetFiltersGroup, filterData: {prodParamsList, prodParamsGroupId}} = this.props;
        const fieldItems = convertParamsToCheckboxFormat(prodParamsList);
        const checkboxesNumber = filterFieldValues.length;
        const featuredNumber = fieldItems.filter(checkboxItem => checkboxItem.featured).length;
        const checkedCount = filterFieldValues.length;

        return (
            <div>
                <div className="form-with-boxes">
                    <div className="form-with-boxes__head">
                        <button
                            type="button"
                            disabled={checkedCount === 0}
                            onClick={() => resetFiltersGroup(prodParamsGroupId)}
                        >
                            сбросить {checkedCount} для группы {prodParamsGroupId}
                        </button>

                        {checkboxesNumber}
                        {' '}
                        {declension(checkboxesNumber, 'чекбокс', 'чекбокса', 'чекбоксов')}
                        {
                            featuredNumber > 0 &&
                            <span>, feat: {featuredNumber}</span>
                        }
                        {',  '}
                        <span onClick={() => this.selectView()}>
                            {
                                featuredNumber > 0 &&
                                <React.Fragment>
                                    показать
                                    {' '}
                                    {
                                        this.state.onlyFeatured === true
                                            ? <React.Fragment>все</React.Fragment>
                                            : <React.Fragment>featured only</React.Fragment>
                                    }
                                </React.Fragment>
                            }
                        </span>
                    </div>

                    <Field
                        component={ButtonCheckboxGroup}
                        values={filterFieldValues}
                        items={fieldItems}
                        name={`${PICK_FORM_FILTERS}.${prodParamsGroupId}`}
                        multi
                    />
                </div>
            </div>
        );
    }
}
