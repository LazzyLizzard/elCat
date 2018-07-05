import {profile} from 'data-srtuctures/profile';

export const NAMESPACE = 'profile';

export function profileReducer(state = profile, action) {
    switch (action.type) {
        case 'AUTH/LOGIN':
        case 'AUTH/LOGOUT':
            return Object.assign({}, state, action.payload);

        default:
            return state;
    }
}
