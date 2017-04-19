export const MANUF_AND_TYPES_REQ = 'MANUF_AND_TYPES_REQ';
export const MANUF_AND_TYPES_SUCC = 'MANUF_AND_TYPES_SUCC'
//export const MANUF_AND_TYPES_FAIL = 'MANUF_AND_TYPES_FAIL';

const manufReq = () => ({type: MANUF_AND_TYPES_REQ});
//const manufFail = () => ({type: MANUF_AND_TYPES_FAIL});
const manufSucc = (data) => ({type: MANUF_AND_TYPES_SUCC, payload: { manufacturers: data.manufacturers}});

export function getManufsAndTypes() {

    return (dispatch) => {
        dispatch(manufReq());
        //fetch({});
        setTimeout(() => {
            dispatch(manufSucc({
                    manufacturers: {
                        1: {
                            id: 1,
                            name: 'Honda'
                        },
                        2: {
                            id: 2,
                            name: 'Kawa'
                        },
                        3: {
                            id: 3,
                            name: 'suz'
                        }
                    }
                })
            );
        }, 1000)
    }
}


