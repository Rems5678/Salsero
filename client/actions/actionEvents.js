import * as actionTypes from './actionTypes';
import axios from 'axios';

export const addEvent = () => (dispatch) => {
  return axios.get('/api/events').then(res => {
    const eventData = [];
    res.data.forEach(event => {
      eventData.push(event);
    })
    dispatch({
      type: actionTypes.GET_EVENTS,
      payload: eventData,
      })
  }) 
}