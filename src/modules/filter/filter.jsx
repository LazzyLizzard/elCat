import React, {Component} from 'react';
import {get} from 'lodash';
import {FilterComponent} from './filter-component';
import './filter.scss';

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

    state = {
        isOpen: false
    };

    componentDidMount() {
        this.setState({
            isOpen: get(this.props, 'isOpen', false)
        });
    }


    controlClickHandler = () => {
        this.setState(prevState => (
            {
                isOpen: !prevState.isOpen
            })
        );
    };

    render() {
        return (
            <FilterComponent
                isOpen={this.state.isOpen}
                controlClickHandler={this.controlClickHandler}
                displayData={this.props.displayData}
            />
        );
    }
}
