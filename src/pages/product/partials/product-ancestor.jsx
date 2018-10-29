import React from 'react';
import {Link} from 'react-router';
import {isEmpty} from 'lodash';

export const ProdustAncestor = ({ancestorData = {}, familyItems = [], superProduct}) => (
    <div>
        {!isEmpty(ancestorData) &&
        // eslint-disable-next-line no-trailing-spaces
        // eslint-disable-next-line react/jsx-wrap-multilines
        <React.Fragment>Родитель {ancestorData.info.products_name}
            {' '}
            <Link to={`/product/${ancestorData.urlData.url}`}>тык</Link>,
        </React.Fragment>}
        {superProduct && <React.Fragment> всего - {familyItems.length}</React.Fragment>}
    </div>
);
