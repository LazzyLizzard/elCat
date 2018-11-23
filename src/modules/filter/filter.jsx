import React, {Component} from 'react';
import {get} from 'lodash';
import {FilterComponent} from './filter-component';

export class Filter extends Component {
    static defaultProps = {
        // values from redux form
        filters: {
            categories: [],
            m: []
        },
        // data for form rendering, values from store
        displayData: [],
        maxOptionsAsButtons: 6
    };

    state = {
        contentOpen: false
    };

    componentDidMount() {
        this.setState({
            contentOpen: get(this.props, 'contentOpen', false)
        });
    }


    controlClickHandler = () => {
        this.setState(prevState => (
            {
                contentOpen: !prevState.contentOpen
            })
        );
    };

    render() {
        return (
            <FilterComponent
                contentOpen={this.state.contentOpen}
                controlClickHandler={this.controlClickHandler}
                displayData={this.props.displayData}
                {...this.props}
            />
        );
    }
}
