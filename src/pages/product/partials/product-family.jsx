/* eslint-disable react/no-array-index-key */
import React from 'react';
import {Link} from 'react-router';
import {isEmpty, chunk} from 'lodash';
import {ProductFamilyFilter} from '../product-family-filter';
import {ProductFamilyPages} from '../product-family-pages';
import {ProductFamilyItems} from '../product-family-items';

export class ProductFamily extends React.PureComponent {
    state = {
        groupId: 0,
        filterBy: ''
    };

    resetFitler = () => (
        this.setState({
            filterBy: ''
        })
    );

    handleChange = (event) => {
        const {value} = event.currentTarget;
        this.setState({
            filterBy: value,
            groupId: 0
        });
    };

    groupNumberClickHandler = groupIndex => (
        this.setState({
            groupId: groupIndex
        })
    );

    renderProductsItems = (list) => {
        if (isEmpty(list)) {
            return null;
        }
        return list.map(item => (
            <div key={item.info.products_id}>
                {item.info.products_id}
                {' '}
                <Link
                    to={`/product/${item.urlData.url}`}
                >
                    {item.info.products_name}
                </Link>
                (
                {item.info.products_name_for_list}
                )
            </div>
        ));
    };

    render() {
        const {
            descendants = [], title, itemsPerBlock = 10000, allowFiltering
        } = this.props;
        if (isEmpty(descendants)) {
            return null;
        }
        const familyFiltered = descendants.filter(item => item.info.products_name
            .toLowerCase()
            .indexOf(this.state.filterBy.toLowerCase()) !== -1);

        const familyChunked = chunk(familyFiltered, itemsPerBlock);

        return (
            <div>
                <h4>
                    {title}
                </h4>
                {allowFiltering && (
                    <ProductFamilyFilter
                        onChange={this.handleChange}
                        resetField={this.resetFitler}
                        filterBy={this.state.filterBy}
                    />
                )}
                <ProductFamilyPages
                    pagesNumber={familyChunked.length}
                    currentPage={this.state.groupId}
                    clickHandler={this.groupNumberClickHandler}
                />
                <ProductFamilyItems
                    itemsList={familyChunked[this.state.groupId]}
                />
            </div>
        );
    }
}
