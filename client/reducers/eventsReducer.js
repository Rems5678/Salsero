import * as actionTypes from '../actions/actionTypes';
import update from 'immutability-helper';

const initialState = {
  events: [],
}

const getEvents = (events) => {
  // return update(initialState, {events: {$set: events}});
  return {...initialState, events: [...events]}
}

export const EventsReducer = (state = initialState, action) => {
  switch(action.type) {
    case(actionTypes.GET_EVENTS):
      return getEvents(action.payload);
    default: 
      return {...state}; 
  } 
}