import React from 'react';
import './tag.scss';

export const Tag = ({title}) => (
    <div className="tag">
        <div className="tag__title">{title}</div>
        <div className="tag__control">x</div>
    </div>
);
