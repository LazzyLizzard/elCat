/* eslint-disable react/no-did-mount-set-state */
import React, {Component} from 'react';
import './holder-block.scss';

export class HolderBlock extends Component {
    static defaultProps = {
        title: ''
    };

    state = {
        collapsed: false
    };

    componentDidMount() {
        const {collapsed} = this.props;
        if (collapsed) {
            this.setState(() => ({
                collapsed: true
            }));
        }
    }

    togglerHandler = () => this.setState({
        collapsed: !this.state.collapsed
    });

    renderToggler = collapsed => (
        <div
            onClick={() => this.togglerHandler()}
            className="holder-block__toggler"
        >
            {
                collapsed ? '+' : '-'
            }
        </div>
    );

    render() {
        const {collapsible, children, title} = this.props;
        return (
            <div className="holder-block">
                <div className="holder-block__head">
                    <div className="holder-block__title">{title}</div>
                    {collapsible &&
                    this.renderToggler(this.state.collapsed)
                    }
                </div>
                {
                    !this.state.collapsed &&
                    <div className="holder-block__content">
                        {children}
                    </div>
                }
            </div>
        );
    }
}
