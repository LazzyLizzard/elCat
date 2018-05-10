import React from 'react';
import {isNil, noop} from 'lodash';
import {HolderBlock} from 'components/holder-block/holder-block';
import {FormFilterItem} from './form-filter-item';
import './form-with-boxes.scss';

export class FormWithBoxes extends React.PureComponent {

    render() {
        const {formData, boxToggleHandler = noop} = this.props;
        if (isNil(formData.filters) || formData.filters.length === 0) {
            return null;
        }

        return (
            formData.filters.map((filterItem) => {
                const title = `${filterItem.prodParamsGroupName} (prodParamsGroupId ${filterItem.prodParamsGroupId})`;
                return (
                    <HolderBlock
                        key={filterItem.prodParamsGroupId}
                        title={title}
                        collapsible
                    >
                        <FormFilterItem
                            filterData={filterItem}
                            onClickCheckbox={boxToggleHandler}
                        />
                        {/* <div>{memoizedProp(this.props.someProp).map(e => <div>{e.id}</div>)}</div> */}

                    </HolderBlock>
                );
            })
        );
    }
}

