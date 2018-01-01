import React from 'react';
import {uniqueId, noop} from 'lodash';
import {Field} from 'redux-form';
import './form-with-boxes.scss';

export const FormWithBoxes = ({formData, boxToggleHandler = noop}) => {
    const {filters} = formData;
    return (
        <div>
            {
                // TODO [sf] 07.12.2017 add check if > 0
                filters.map(filterItem => (
                    /* It's important to use key to avoid performance issues */
                    <div key={uniqueId()} className="form-with-boxes">
                        <div className="form-with-boxes__name">
                            <div>
                                {filterItem.prodParamsGroupName}
                                (prodParamsGroupId {filterItem.prodParamsGroupId})</div>
                            <div onClick={() => boxToggleHandler(filterItem.prodParamsGroupId)}>reset all</div>
                        </div>
                        <div className="form-with-boxes__boxes ">
                            {
                                filterItem.prodParamsList.map(checkboxItem => (
                                    <span key={uniqueId()}>
                                        {checkboxItem.parameterName} <Field
                                            name={`param[${checkboxItem.valueId}]`}
                                            component="input"
                                            type="checkbox"
                                        /> |
                                    </span>))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    );
};
