import React, { PropTypes, Component } from 'react'

import ManufListItem from './ManufListItem';

export default class ManufList extends Component {

    render() {

        const {completeManufList, transportTypesData} = this.props;
        console.log(this.props);
        console.log(transportTypesData);

        return (

            <div>
                <ul>
                    {Object.keys(completeManufList).map((key) => {

                        return <ManufListItem
                            key={key}
                            manufName={completeManufList[key].name}
                            manufId={completeManufList[key].id}
                            transportTypes={completeManufList[key].transportTypes}
                            transportTypesData={completeManufList[key]}
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