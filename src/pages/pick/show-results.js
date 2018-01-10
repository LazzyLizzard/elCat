import 'whatwg-fetch';
import {isNil, assign} from 'lodash';
import {getRequestEnvironment} from 'utils/get-request-environment';
import {REMOTE_HTTPS} from 'contants/server-request-environment';
import {ENDPOINT_PICK} from 'contants/end-points';

const baseUrl = `${getRequestEnvironment(REMOTE_HTTPS)}${ENDPOINT_PICK}`;

// TODO [sf] 27.12.2017 apply this
// https://github.com/gaearon/redux-thunk
export const showResults = (formSubmitResult /* , page = 1 */) => {
    console.log(formSubmitResult); // eslint-disable-line no-console
    const param = [];
    formSubmitResult.box.forEach((value, index) => (!isNil(value) && param.push(index)));
    const submitData = assign({}, formSubmitResult, {param});
    console.log(submitData);

    fetch(baseUrl, {
        method: 'post',
        // TODO [sf] 27.12.2017 filter !== null
        body: JSON.stringify(submitData)
    })
        .then(response => response.json())
        .then((json) => {
            console.log(json);
            return json;
        });
};
