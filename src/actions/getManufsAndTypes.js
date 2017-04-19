export function getManufsAndTypes() {

    return (dispatch) => {

        setTimeout(() => {
            dispatch({
                type: 'GET_MANUF_AND_TYPES_OK',
                payload: {
                    manufacturers: {
                        1: {
                            id: 1,
                            name: 'Honda'
                        },
                        2: {
                            id: 2,
                            name: 'Kawa'
                        }
                    }
                }
            })
        }, 1000)
    }
}


