import {map} from 'lodash';
import {ENV} from '../contants/server-request-environment';

export const getRequestEnvironment = env => (map(ENV[env]).join(''));
