import {ELLIPSIS} from './../contants/empty-values';

export const STATE_FICHE = {
    breadCrumbs: null,
    // TODO [sf] 05.10.2017 rename
    homeViewMode: 1,
    modelData: {
        modelInfo: {
            model_name: ELLIPSIS,
            manuf_name: ELLIPSIS
        }
    },
    manufacturers: null,
    transportTypes: null,
    years: null,
    error: null,
    loader: false,
    current: {
        modelId: null,
        makeId: null,
        transportTypeId: null,
        year: null
    }
};
