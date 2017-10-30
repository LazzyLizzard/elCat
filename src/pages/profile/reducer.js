import {profile} from 'data-srtuctures/profile';

export const NAMESPACE = 'profile';

export function profileReducer(state = profile, action) {
    switch (action.type) {
        default:
            return state;
    }
}
