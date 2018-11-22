import React, {Component} from 'react';

export class Filter extends Component {

    static defaultProps = {
        // values from redux form
        filters: {
            categories: [],
            m: []
        },
        // data for form rendering, values from store
        displayData: []
    };

    render() {
        return (
            <div>
                filter
            </div>
        );
    }
}
