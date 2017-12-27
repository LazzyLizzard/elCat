import 'whatwg-fetch';
import {isNil, assign} from 'lodash';
import {getRequestEnvironment} from 'utils/get-request-environment';
import {REMOTE_HTTPS} from 'contants/server-request-environment';
import {ENDPOINT_PICK} from 'contants/end-points';

const baseUrl = `${getRequestEnvironment(REMOTE_HTTPS)}${ENDPOINT_PICK}`;

// TODO [sf] 27.12.2017 apply this
// https://github.com/gaearon/redux-thunk
export const showResults = (formSubmitResult, page = 1) => {
    console.log(formSubmitResult); // eslint-disable-line no-console
    console.log(page); // eslint-disable-line no-console
    let box = [];
    box = formSubmitResult.box.map((value, index) => (!isNil(value) && index));

    console.log(box);

    fetch(baseUrl, {
        method: 'post',
        // TODO [sf] 27.12.2017 filter !== null
        body: JSON.stringify(assign({}, formSubmitResult, box))
    })
        .then(response => response.json())
        .then((json) => {
            console.log(json);
            return json;
        });
};
