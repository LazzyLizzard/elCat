import {requestGroupInfo} from './../pages/fiche/model/actions';

export const getModelData = dispatch => modelId => dispatch(requestGroupInfo(modelId));
