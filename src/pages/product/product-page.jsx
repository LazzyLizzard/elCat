import React from 'react';
import {connect} from 'react-redux';
import {get, isNil, isEmpty, pick} from 'lodash';
import {ELLIPSIS} from 'constants/empty-values';
import {NAMESPACE} from './reducer';
import {getProductInfo, clearProductData} from './actions';
import {ProductFamily} from './product-family';
import {ProductPrice} from './product-price';
import {ProductParams} from './product-params';
import {ProdustAncestor} from './product-ancestor';
import {ProductCart} from './product-cart';
import {ProductSuperVariants} from './product-super-variants';
import './product.scss';

// const rx = /^(\w+)_(\d+).html/;
const getIdFromUrl = productUrl => Number(productUrl.split('.')[0].split('_')[1]);
const getFamilyTitle = superProduct => (superProduct === true ? 'потомки' : 'братья');
const briefFields = ['info', 'priceFinal', 'superProduct'];

export class ProductPage extends React.PureComponent {

    render() {
        console.log(this.props);
        return (
            <div>hello prod</div>
        );
    }
}

