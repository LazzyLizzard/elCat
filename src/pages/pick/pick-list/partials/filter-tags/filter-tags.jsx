/* eslint-disable no-unused-vars */
import React from 'react';
import {isEmpty, isNil, flatten} from 'lodash';
import {Tag} from './tag';
import {PICK_FORM_FILTERS, PICK_FORM_MANUFACTURERS} from '../../../field-names';
import './filter-tags.scss';


const FIELDS_DESCRIPTORS = {
    [PICK_FORM_MANUFACTURERS]: {
        multi: false,
        title: 'Производители'
    },
    [PICK_FORM_FILTERS]: {
        multi: true,
        706: {
            title: 'Ширина'
        }

    }
};

const renderTags = (filters = {}, descriptors) => {
    const entries = Object.entries(filters);
    console.log('entries', entries);
    return entries.map((item) => {
        const [key, value] = item;
        return !isNil(descriptors[key]) && !isEmpty(value) && (<Tag key={key} title={descriptors[key].title} />);
    });
};

export const FilterTags = (params) => {
    const {fields = []} = params;
    console.log('-> fields', fields);
    return (
        <div className="filter-tags">
            <div className="filter-tags__title">Фильтр:</div>
            <div className="filter-tags__tags">
                {renderTags(fields, FIELDS_DESCRIPTORS)}
            </div>
            <div className="filter-tags__control">*</div>
        </div>
    );
};
