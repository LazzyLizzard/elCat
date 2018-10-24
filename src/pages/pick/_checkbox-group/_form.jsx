import React from 'react';
import {map, noop} from 'lodash';
import {reduxForm, Field} from 'redux-form';

// const {DOM: {input, select, textarea}} = React;


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
                                            // onChange={e => e.preventDefault()}
                                        />
                                        {list.itemName}
                                        {' '}
-
                                        {list.value}
                                        {' '}
|
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
