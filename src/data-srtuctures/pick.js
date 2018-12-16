/**
 * Default data structure for "pick".
 * @type {object}
 */

// TODO [sf] 07-Nov-18 use for resetting different parts of pick components

const PICK_LIST_DEFAULT = {
    pickList: null // list of product types that can be filtered
};

const PICK_LIST_FILTERS = {
    pickGroupId: null, // groupId, basing on it get pickListGroups
    pickListGroups: null, // list of filters and manufacturers for filter display
    pickResult: null // list of products basing on filter
};

export const PICK_STATE = {
    ...PICK_LIST_DEFAULT,
    ...PICK_LIST_FILTERS,
    ...{
        loader: false,
        selectedPage: 1,
        pagination: null,
        filters: null
    }
};
