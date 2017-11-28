import React from 'react';
import './loader.scss';

export const Loader = () => {
    return (
        <div
            className="loader loader--overlay"
        >
            <div>
                LOADING ...
            </div>
        </div>
    );
};
