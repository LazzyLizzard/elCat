import React from 'react';
import {Field} from 'redux-form';
import {HolderBlock} from 'components/holder-block';
import {ButtonCheckboxGroup} from 'components/ui/button-checkbox-group';
import {PICK_FORM_MANUFACTURERS} from '../../../field-names';

export const ManufacturersList = ({fieldValues = [], formData: {manufList}}) =>
    manufList &&
    <HolderBlock
        title="Производители"
    >
        <Field
            component={ButtonCheckboxGroup}
            values={fieldValues}
            items={manufList
                .filter(item => item.manufacturers_id !== false)
                .map(item => ({
                    label: item.manufacturers_name,
                    value: String(item.manufacturers_id)
                }))}
            name={PICK_FORM_MANUFACTURERS}
            multi
        />
    </HolderBlock>;
