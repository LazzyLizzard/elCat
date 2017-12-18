import React from 'react';

import SelectorFrom from './selector-form';
import {showResults} from './show-results';

export const Selector = () => (
    <SelectorFrom onSubmit={showResults} />
);

