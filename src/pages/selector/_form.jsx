import React from 'react';
import {map, noop} from 'lodash';
import {reduxForm, Field} from 'redux-form';

// const {DOM: {input, select, textarea}} = React;

const FORM_DATA = {
    groups: [
        {
            info: {
                id: 32,
                name: 'group 1'
            },
            list: [
                {
                    itemID: 100,
                    itemName: 'name 1',
                    value: 40,
                    featured: true
                },
                {
                    itemID: 200,
                    itemName: 'name 2',
                    value: 60,
                    featured: true
                }
            ]
        }
    ]
};

class TestForm extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={noop}>
                    {map(FORM_DATA.groups, group => (
                        <div>
                            {group.info.name}
                            <div>
                                {map(group.list, list => (
                                    <span>
                                        <Field
                                            type="checkbox"
                                            name={`${list.value}`}
                                            component="input"
                                            onChange={e => e.preventDefault()}
                                        />
                                        {list.itemName} - {list.value} |
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                    <button type="submit">go</button>
                </form>
            </div>
        );
    }
}

export default reduxForm({form: 'myForm'})(TestForm);
