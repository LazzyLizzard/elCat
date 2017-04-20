import React, { PropTypes, Component } from 'react'

import ManufListItem from './ManufListItem';

export default class ManufList extends Component {

    render() {

        const manufList = this.props.completeManufList;

        return (

            <div>
                <ul>
                    {Object.keys(manufList).map((key) => {

                        return <ManufListItem
                            key={key}
                            manufName={manufList[key].name}
                            manufId={manufList[key].id}
                            transportTypes={manufList[key].transportTypes}
                        />
                    })}
                </ul>
            </div>
        )
    }
}

ManufList.propTypes = {
    completeManufList: PropTypes.object.isRequired
}