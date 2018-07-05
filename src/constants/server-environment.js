import {ENV, REMOTE_HTTPS} from './server-request-environment';

const getThis = env => ENV[env];

export const SERVER_ENVIRONMENT = getThis(REMOTE_HTTPS);
