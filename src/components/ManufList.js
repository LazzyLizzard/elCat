import React, { PropTypes, Component } from 'react'
//import { connect } from 'react-redux'

import ManufListItem from './ManufListItem';

class ManufList extends Component {




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

//function mapStateToProps(store) {
//    return {
//        loading: store.loading
//    }
//}

//export default connect(mapStateToProps)(ManufList)
export default ManufList;

ManufList.propTypes = {
    completeManufList: PropTypes.object.isRequired
}