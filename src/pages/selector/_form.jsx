import React from 'react';
import {map} from 'lodash';
// import reduxForm from 'redux-form';

const FORM_DATA = {
    groups: [
        {
            info: {
                id: 32,
                name: 'group 1'
            },
            list: [{
                itemID: 100,
                itemName: 'name 1',
                featured: true
            }]
        }
    ]
};

export const TestForm = () => (
    <div>
        {map(FORM_DATA.groups, group => (
                <div>
                    {group.info.name}
                    {map(group.list, list => (
                        <div key={list.itemName}>{list.itemName}</div>
                    ))}
                </div>
            )
        )}
    </div>
);

