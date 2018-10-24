import React from 'react';
import {Field} from 'redux-form';
import {isNil} from 'lodash';
import {HolderBlock} from 'components/holder-block';
import {PICK_FORM_MANUFACTURERS} from '../field-names';

export const ManufacturersList = ({formData}) => {
    const {manufList} = formData;
    if (isNil(manufList)) {
        return null;
    }
    return (
        <HolderBlock
            title="Произвордители"
        >
            {
                // TODO [sf] 17.05.2018 refactor backend code to get rid of manufacturers_id === false
                manufList
                    .filter(manufItem => manufItem.manufacturers_id !== false)
                    .map(item => (
                        <span key={item.manufacturers_id}>
                            {item.manufacturers_name}
                            <Field
                                name={`${PICK_FORM_MANUFACTURERS}[${item.manufacturers_id}]`}
                                component="input"
                                type="checkbox"
                            />
                            {' '}
|
                        </span>
                    ))
            }
        </HolderBlock>
    );
};
