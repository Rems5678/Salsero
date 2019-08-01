import React, {useState} from 'react';
import {Typography} from '@material-ui/core';
import {Card} from '@material-ui/core';
import {CardContent} from '@material-ui/core';
import {CardActions} from '@material-ui/core';
import {Button} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {IconButton} from '@material-ui/core';
import {Grid} from '@material-ui/core';

import Framing from './Framing.jsx';

function formatName(name) {
  name = name.toLowerCase();
  const word = /\w+/g;
  return name.match(word).map(wrd => wrd.charAt(0).toUpperCase()+wrd.slice(1)).join(" ");
}
function formatDescription(desc) {
  if (desc.length > 100) desc = desc.slice(0, 100) + '...';
  return desc;
}
function formatDate(date) {
  if (date) {
    let year = date.slice(0,4);
    let month = date.slice(5,7);
    let day = date.slice(9,10);
    month = month.charAt(0) === '0' ? month.slice(1) : month;
    day = day.charAt(0) === '0' ? day.slice(1) : day;
    return `${month}/${day}/${year}`;
  }
}
function formatTime(time) {
  if (time) {
    let ampm = 'am'
    let hours = time.slice(0,2);
    let minutes = time.slice(3,5);
    let afternoon = hours-12;
    hours = hours.charAt(0) === '0' ? hours.slice(1) : hours; 
    if ( afternoon > 0) {
      hours = afternoon;
      ampm = 'pm';
    }
    return `${hours}:${minutes} ${ampm}`;
  }
}
const Event = (props) => {
  const [showDesc, setShowDesc] = useState(false);
  return (
      
    <Card>
    <CardContent
    style = {{backgroundImage: `url(${props.imageurl})`}}>
    <Grid
    container
    direction = 'column'
    justify = 'space-between'
    >
    
      <Grid item className = 'flex'>
        <Typography 
        variant = 'h6'
        className = 'event-name'
        align = 'center'>{formatName(props.name)}</Typography>
        <CardActions>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
    </CardActions>
      </Grid>
      <Grid item>
        <Typography 
        className = 'event-address'
        variant = 'subtitle2'
        >{props.address}</Typography>
      </Grid>
      <Grid item>
        {showDesc ? <Typography 
        variant = 'subtitle2'
        className = 'event-description'>{props.description}</Typography>
        : <Typography 
        variant = 'subtitle2'
        className = 'event-description'>{formatDescription(props.description)}</Typography>}
      </Grid>

      {showDesc ?  <CardActions>
        <Button onClick = {() => setShowDesc(false)}>Show Less</Button>
      </CardActions> 
      : <CardActions>
        <Button onClick = {() => setShowDesc(true)}>Show More</Button>
      </CardActions>}
      <Grid 
      item 
      className = 'flex event-date'>
        <Typography>{formatDate(props.startdate)} - {formatDate(props.enddate)}</Typography>
      </Grid>
      <Grid 
      item 
      className = 'flex event-time'>      
        <Typography>{formatTime(props.starttime)} - {formatTime(props.endtime)}</Typography>
      </Grid>
    </Grid>
    </CardContent>
    </Card>
      );

}
 
export default Event;