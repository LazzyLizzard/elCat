import React, { PropTypes, Component } from 'react'

import ManufListItem from './ManufListItem';

export default class ManufList extends Component {

    render() {

        let modelsList = this.props.completeManufList;

        return (

            <div>
                {Object.keys(modelsList).map((key) => {
                    //let k = key;
                    return <ManufListItem
                        key={key}
                        manufName={modelsList[key].name}
                        manufId={modelsList[key].id}
                    />
                })}

            </div>
        )
    }
}

ManufList.propTypes = {
    completeManufList: PropTypes.object.isRequired
}