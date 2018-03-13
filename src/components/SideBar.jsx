import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';


export default class SideBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }


  render() {
    return (
      <Drawer width = {400}>

        <AppBar title="Available Events:"/>
        {this.props.events.map((event)=>
          <MenuItem key = {event.id} primaryText = {event.name}/>)}
      </Drawer>
    );

  }
}
