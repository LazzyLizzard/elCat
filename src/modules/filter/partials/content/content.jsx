import React, {Component} from 'react';

export class FilterContent extends Component {
    render() {
        console.log('FilterContent displayData', this.props.displayData);
        return (
            <div className="filter-content-container">
                <div className="filter-content">
                    content
                </div>
                <div className="filter-footer">
                    buttons
                </div>
            </div>
        );
    }
}
