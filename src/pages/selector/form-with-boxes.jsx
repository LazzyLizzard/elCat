import React from 'react';
import {Field} from 'redux-form';

export const FormWithBoxes = ({boxesGroup}) => (
    <div>
        {
            // TODO [sf] 07.12.2017 add check if > 0
            boxesGroup.list.map(boxItem => (
                /* It's important to use key to avoid performance issues */
                <div key={boxItem.id}>
                    {boxItem.label} id {boxItem.id}
                    <Field
                        name={`box[${boxItem.id}]`}
                        component="input"
                        type="checkbox"
                    />
                </div>
            ))
        }
    </div>
);
