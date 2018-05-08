import React from 'react';
import {isNil, noop} from 'lodash';
import {declension} from 'utils/declension';
import {CheckboxFilter} from 'components/checkbox-filter';
import {HolderBlock} from 'components/holder-block/holder-block';
import {PICK_FORM_FILTERS} from './../field-names';
import './form-with-boxes.scss';

export const FormWithBoxes = ({formData, boxToggleHandler = noop}) => {
    const {filters} = formData;
    if (isNil(filters) || filters.length === 0) {
        return null;
    }

    return (
        filters.map((filterItem) => {
            const title = `${filterItem.prodParamsGroupName} (prodParamsGroupId ${filterItem.prodParamsGroupId})`;
            const checkboxesNumber = filterItem.prodParamsList.length;
            const featuredNumber = filterItem.prodParamsList.filter(checkboxItem => checkboxItem.featured).length;
            return (
                <HolderBlock
                    key={filterItem.prodParamsGroupId}
                    title={title}
                    collapsible
                >
                    <div className="form-with-boxes">
                        <div
                            onClick={() => boxToggleHandler(filterItem.prodParamsGroupId)}
                            className="form-with-boxes__head"
                        >
                            сбросить {checkboxesNumber}
                            {' '}
                            {declension(checkboxesNumber, 'чекбокс', 'чекбокса', 'чекбоксов')}
                            {
                                featuredNumber > 0 &&
                                <span>, feat: {featuredNumber}</span>
                            }

                        </div>
                        <div className="form-with-boxes__boxes ">

                            {
                                filterItem.prodParamsList.map(checkboxItem => (
                                    <div
                                        className="form-with-boxes__box-item"
                                        key={checkboxItem.valueId}
                                    >
                                        <CheckboxFilter
                                            label={`${checkboxItem.parameterName} (id ${checkboxItem.valueId})`}
                                            name={`${PICK_FORM_FILTERS}[${filterItem.prodParamsGroupId}][${checkboxItem.valueId}]`}
                                            featured={checkboxItem.featured}
                                        />
                                    </div>
                                ))}
                        </div>
                    </div>
                </HolderBlock>
            );
        })
    );
};
