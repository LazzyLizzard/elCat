import React from 'react';
import {Link} from 'react-router';
import {isEmpty} from 'lodash';

export const ProdustAncestor = ({ancestorData = {}}) => {
    if (isEmpty(ancestorData)) {
        return null;
    }
    return (
        <div>
            Родитель {ancestorData.info.products_name} <Link to={`/product/${ancestorData.urlData.url}`}>тык</Link>
        </div>
    );
};
