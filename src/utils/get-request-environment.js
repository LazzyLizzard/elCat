import {map} from 'lodash';
import {ENV} from 'constants/server-request-environment';

export const getRequestEnvironment = env => (map(ENV[env]).join(''));
