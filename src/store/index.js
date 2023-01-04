import { createStore, combineReducers } from 'redux';
import { amountReducer } from './amount/reducer';

const reducers = combineReducers({amountReducer})

export const store = createStore(reducers);


