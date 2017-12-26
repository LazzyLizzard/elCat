import 'whatwg-fetch';
import {getRequestEnvironment} from 'utils/get-request-environment';
import {REMOTE_HTTPS} from 'contants/server-request-environment';
import {ENDPOINT_PICK} from 'contants/end-points';

const baseUrl = `${getRequestEnvironment(REMOTE_HTTPS)}${ENDPOINT_PICK}`;

export const showResults = (result) => {
    console.log(result); // eslint-disable-line no-console

    fetch(baseUrl, {
        method: 'post',
        body: result
    })
        .then((json) => {
            console.log(json);
            return json;
        });
};
