import {assign} from 'lodash';
import {ELLIPSIS} from 'contants/empty-values';

export const DEFAULT_MODEL_DATA = {
    modelData: {
        modelInfo: {
            model_name: ELLIPSIS,
            manuf_name: ELLIPSIS,
            year: ELLIPSIS
        },
        modelGroupsList: null
    }
};

export const STATE_FICHE = assign({}, {
    breadCrumbs: null,
    // TODO [sf] 05.10.2017 rename
    homeViewMode: 1,
    dataGroup: null,
    manufacturers: null,
    transportTypes: null,
    modelsList: null,
    years: null,
    error: null,
    loader: false,
    current: {
        modelId: null,
        makeId: null,
        transportTypeId: null,
        year: null
    }
}, DEFAULT_MODEL_DATA);
