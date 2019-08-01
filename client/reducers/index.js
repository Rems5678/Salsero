import {combineReducers} from 'redux';
import {EventsReducer} from './eventsReducer';
import {authReducer} from './authReducer';

export const rootReducer = combineReducers({events: EventsReducer, auth: authReducer});