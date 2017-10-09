import 'whatwg-fetch';
import {REQUEST_URL_FICHE} from './../../../AppRoutes/constants';

export const GROUP_INFO_REQUEST = 'GROUP_INFO_REQUEST';
export const GROUP_INFO_SUCCESS = 'GROUP_INFO_SUCCESS';
export const GROUP_INFO_ERROR = 'GROUP_INFO_ERROR';

export const groupDataRequest = () => {
    console.log('reducer gr');
    return ({
        type: GROUP_INFO_REQUEST,
        payload: {
            loader: true
        }
    });
};

export const groupDataSuccess = data => ({
    type: GROUP_INFO_SUCCESS,
    payload: {
        loader: false,
        groupData: data
    }
});

export const groupDataError = error => ({
    type: GROUP_INFO_ERROR,
    payload: {
        loader: false,
        error
    }
});

export const requestGroupInfo = id => (
    (dispatch) => {
        dispatch(groupDataRequest());
        return fetch(
            `${REQUEST_URL_FICHE}?async=1&action=modelGroup&modelId=${id}`, {
                method: 'get'
                // mode: 'cors'
            })
            .then(response =>
                // console.warn(response);
                response.json()
            )
            .then(modelData => dispatch(groupDataSuccess(modelData)))
            .catch(error => dispatch(groupDataError(error)));
    }
);
