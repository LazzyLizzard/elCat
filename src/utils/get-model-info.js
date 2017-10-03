import {requestGroupInfo} from './../pages/fiche/model/actions';

export const getModelData = modelId => dispatch => dispatch(requestGroupInfo(modelId));
