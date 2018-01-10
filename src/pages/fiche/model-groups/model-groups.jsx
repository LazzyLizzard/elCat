import React from 'react';
import {Link} from 'react-router';
import noop from 'lodash/noop';
import {NAMESPACE} from '../model/reducer';

export const ModelGroups = ({modelGroups, modelId, onClick = noop}) => (
    <div>
        {modelGroups && modelGroups.map(data => (
            <div>
                <div
                    key={data.group_id}
                >
                    <Link
                        to={`/${NAMESPACE}/model/${modelId}/group/${data.group_id}`}
                        onClick={onClick}
                        key={data.group_id}
                    >
                        <img
                            src={data.imgPath}
                            alt=""
                            key={data.group_id}
                        />{data.group_name}
                    </Link>
                    {/* TODO [sf] 03.10.2017 realize further on server side */}
                    <div>save to favorites</div>
                </div>
            </div>
        ))}
    </div>
);
