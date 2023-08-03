import { Reducer } from "./Reducer";
import { combineReducers, configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from "redux-thunk";


const rootReducer = combineReducers({user:Reducer});

const Store= configureStore({reducer:rootReducer,middelware:[thunk,logger]});

export default Store;