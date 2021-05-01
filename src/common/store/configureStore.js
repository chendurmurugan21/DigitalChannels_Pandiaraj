import { createStore, combineReducers } from 'redux';
import userReducer from '../reducers/userName';

const rootReducer = combineReducers(
    { userName: userReducer }
);

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;