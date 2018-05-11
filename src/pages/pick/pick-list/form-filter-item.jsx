import React from 'react';
import {memoize} from 'lodash';
import {CheckboxFilter} from 'components/checkbox-filter/checkbox-filter';
import {declension} from 'utils/declension';
import {PICK_FORM_FILTERS} from './../field-names';

const memoizedProp = memoize(
    needleProps => needleProps.filter(item => item.featured),
    needleProps => needleProps.map(e => e.name).join('-')
);


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
        const {filterData: {prodParamsList, prodParamsGroupId}} = this.props;
        const checkboxesNumber = prodParamsList.length;
        const featuredNumber = prodParamsList.filter(checkboxItem => checkboxItem.featured).length;

        return (
            <div>
                {/* <div>{memoizedProp(this.props.featured).map(e => <div> * {e.id}</div>)}</div> */}
                <div className="form-with-boxes">
                    <div className="form-with-boxes__head">
                        сбросить {checkboxesNumber}
                        {' '}
                        {declension(checkboxesNumber, 'чекбокс', 'чекбокса', 'чекбоксов')}
                        {
                            featuredNumber > 0 &&
                            <span>, feat: {featuredNumber}</span>
                        }
                        {',  '}
                        <span onClick={() => this.selectView()}>
                            показать
                            {' '}
                            {
                                this.state.onlyFeatured === true
                                    ? <React.Fragment>все</React.Fragment>
                                    : <React.Fragment>featured only</React.Fragment>

                            }
                        </span>

                    </div>
                    <div className="form-with-boxes__boxes ">
                        {
                            this.showModeWrapper(this.state.onlyFeatured, prodParamsList).map(checkboxItem => (
                                <div
                                    className="form-with-boxes__box-item"
                                    key={checkboxItem.valueId}
                                    // onClick={() => onClickCheckbox(prodParamsGroupId)}
                                >
                                    <CheckboxFilter
                                        label={`${checkboxItem.parameterName} (id ${checkboxItem.valueId})`}
                                        name={`${PICK_FORM_FILTERS}[${prodParamsGroupId}][${checkboxItem.valueId}]`}
                                        featured={checkboxItem.featured}
                                    />
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        );
    }
}
