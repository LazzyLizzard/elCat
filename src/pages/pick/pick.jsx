import React from 'react';

import PickFrom from './pick-form';
import {showResults} from './show-results';

export const Pick = () => (
    <PickFrom onSubmit={showResults} />
);

