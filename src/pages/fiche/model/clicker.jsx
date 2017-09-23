import React from 'react';

export function Clicker({onClicker, modelId}) {
    console.log(modelId)
    return (
        <div>
            <div onClick={onClicker(modelId)}>click</div>
        </div>
    );
}
