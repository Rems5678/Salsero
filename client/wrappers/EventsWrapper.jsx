import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addEvent} from '../actions/actionEvents';
import {Grid} from '@material-ui/core';
import Loader from '../components/Loader.jsx';
import Event from '../components/Event';

const EventsWrapper = () => {
  const eventsState = useSelector(state => state.events);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addEvent());
  }, [])
  return (
   <Grid 
   container
   direction = 'row'
   justify = 'space-evenly'>
    { eventsState || eventsState.event.length > 0 ? eventsState.events.map((event, idx) => {
    return (<Grid
              key = {`event${idx}`}
              item
              xs = {3}>
                <Event  {...event}></Event>
            </Grid>)
  }) : <Loader></Loader>  }
   </Grid> 
  );
}
 

export default EventsWrapper;