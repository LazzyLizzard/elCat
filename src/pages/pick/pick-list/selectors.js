import {memoize} from 'lodash';
import {createSelector} from 'reselect';
import {formValueSelector} from 'redux-form';
import {NAMESPACE} from './../reducer';

export const getNameSpace = nameSpace => state => state[nameSpace];

// no resolver required `cos nameSpace is a string for map cache key
export const getSelectedPickResults = memoize(nameSpace => createSelector(
    getNameSpace(nameSpace),
    (data) => {
        console.log(data);
        return data.pickResult;
    })
);

export const valueSelector = formValueSelector(NAMESPACE);
