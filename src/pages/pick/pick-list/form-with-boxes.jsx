import React from 'react';
import {uniqueId} from 'lodash';
import {Field} from 'redux-form';

export const FormWithBoxes = ({formData}) => {
    const {filters} = formData;
    return (
        <div>
            {
                // TODO [sf] 07.12.2017 add check if > 0
                filters.map(filterItem => (
                    /* It's important to use key to avoid performance issues */
                    <div key={uniqueId()}>
                        <div>{filterItem.prodParamsGroupName}</div>
                        {
                            filterItem.prodParamsList.map(checkboxItem => (
                                <span key={uniqueId()}>
                                    {checkboxItem.parameterName} <Field
                                        name={`box[${checkboxItem.valueId}]`}
                                        component="input"
                                        type="checkbox"
                                    /> |
                                </span>))
                        }
                    </div>
                ))
            }
        </div>
    );
};
