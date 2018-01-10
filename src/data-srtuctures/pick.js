/**
 * Default data structure for "pick".
 * @type {object}
 */
export const PICK_STATE = {
    pickList: null,
    pickListGroups: null,
    // TODO remove this mock
    pickResult: [
        {
            id: 100,
            name: 'mock 1'
        },
        {
            id: 101,
            name: 'mock 2'
        }
    ],
    pagination: {
        // TODO remove this mock
        current: 1,
        total: 20,
        items: [1, 2, 3, 4, 5]

    }
};
