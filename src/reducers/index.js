import {combineReducers} from 'redux';
// import manufsAndTypesList from './manufsAndTypes';
import HomeReducer from '../components/Home/reducers';
import modelDataReducer from '../components/Model/reducers';

export const rootReducer = combineReducers({
    // manufsAndTypesList,
    homeData: HomeReducer,
    modelData: modelDataReducer
});
