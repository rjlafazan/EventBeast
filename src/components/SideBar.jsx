import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import '../style/SideBarIcon.css'

export default class SideBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }
  render() {
    return (
      <Drawer width = {300} open={this.props.openClose}>
       <AppBar title="Available Events:" iconClassNameLeft = "newIcon"/>
        {this.props.events.map((event)=>
          <MenuItem 
            primaryText={event.name} 
            key ={event.id} 
          />)}
        </Drawer>
    );
  }
}