/* eslint-disable react/no-array-index-key */
import React from 'react';
import {Link} from 'react-router';
import {isEmpty, chunk} from 'lodash';
import {ProductFamilyFilter} from './product-family-filter';


export class ProductFamily extends React.PureComponent {
    state = {
        groupId: 0,
        filterBy: ''
    };

    resetFitler = () => (
        this.setState({
            filterBy: ''
        })
    )

    handleChange = (event) => {
        const {value} = event.currentTarget;
        this.setState({
            filterBy: value
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
                <Link to={`/product/${item.urlData.url}`}>{item.info.products_name.toLowerCase()}</Link>
            </div>
        ));
    };

    render() {
        const {descendants = [], title, itemsPerBlock = 10000, allowFiltering} = this.props;
        if (isEmpty(descendants)) {
            return null;
        }
        const familyFiltered = descendants.filter(item =>
            item.info.products_name.indexOf(this.state.filterBy.toLowerCase()) !== -1
            // TODO add products_name_for_list to check
            // || item.info.products_name_for_list.indexOf(this.state.filterBy.toLowerCase()) !== -1
        );

        const familyChunked = chunk(familyFiltered, itemsPerBlock);

        return (
            <div>
                <h4>{title}</h4>
                {allowFiltering && <ProductFamilyFilter
                    onChange={this.handleChange}
                />}
                {familyChunked.length > 0 && familyChunked.map((_, groupIndex) => (
                    <div
                        key={`group-${groupIndex}`}
                        onClick={() => this.groupNumberClickHandler(groupIndex)}
                    >
                        * {groupIndex + 1}
                    </div>
                ))}
                <div>{this.renderProductsItems(familyChunked[this.state.groupId])}</div>
            </div>
        );
    }
}
