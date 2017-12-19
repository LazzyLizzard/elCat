import React from 'react';

import PickForm from './pick-form';
import {showResults} from './../show-results';

export const Pick = () => (
    <PickForm onSubmit={showResults} />
);

