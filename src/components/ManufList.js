import React, { PropTypes, Component } from 'react'

export default class ManufList extends Component {

    render() {
        return (

            <div>

                {Object.keys(usersList).map((key) => {
                    //let k = key;
                    return <UserListItem
                        key={key}
                        name={usersList[key].name}
                        lastName={usersList[key].lastName}
                        userId={key}
                        setEditMode={this.props.setEditMode}
                    />
                })}

            </div>
        )
    }
}

ManufList.propTypes = {
    completeManufList: PropTypes.object.isRequired
}