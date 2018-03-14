import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import EventCard from './EventCard'




export default class SideBar extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Drawer width = {300} open = {this.props.open}>
        <AppBar title="Available Events:"/>
        {this.props.events.map((event)=>
          <EventCard key = {event.id} event = {event}/>)}
      </Drawer>
    );

  }
}
