export const fakeLogin = () => (dispatch) => {
    dispatch({
        type: 'AUTH/LOGIN',
        payload: {
            customer: {
                id: 1,
                name: 'aaa'
            }
        }
    });
};

export const fakeLogout = () => (dispatch) => {
    dispatch({
        type: 'AUTH/LOGOUT',
        payload: {
            customer: null
        }
    });
};
