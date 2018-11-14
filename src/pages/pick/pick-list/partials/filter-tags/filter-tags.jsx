/* eslint-disable no-unused-vars */
import React from 'react';
import {isEmpty, isNil, get} from 'lodash';
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
        },
        707: {
            title: '%'
        }
    }
};

// const buildTagsData = (filterData) => {
//     let x = null;
//
//     x = filterData.reduce((acc, filterItem) => {
//         const {prodParamsGroupId, prodParamsGroupName} = filterItem;
//         acc[String(prodParamsGroupId)] = {
//             title: prodParamsGroupName
//         };
//         return acc;
//     });
//     x.m = {title: 'производители'};
//     return x;
// };

const renderTags = (filters = {}, descriptors) => {
    console.log('IN F', filters);
    const entries = Object.entries(filters);
    console.log('entries', entries);
    return entries.map((item) => {
        const [key, value] = item;
        // console.log('key. item', key, item);
        if (key === 'filters') {
            const filterKeys = filters.filters
                .map((xitem, index) => (!isEmpty(xitem) ? String(index) : null))
                .filter(v => !isEmpty(v));
            console.log('fff', filterKeys);
            return filterKeys.map((zitem, idx) => {
                return (<Tag key={idx} title={descriptors.filters[zitem].title} />);
            })
        }
        // if (get(descriptors, `[${key}].multi`)) {
        //     console.log(descriptors[key]);
        //
        // }
        return !isNil(descriptors[key]) && !isEmpty(value) && (<Tag key={key} title={descriptors[key].title} />);
    });
};

export const FilterTags = (params) => {
    const {fields = []} = params;
    // const descrs = buildTagsData(params);
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
