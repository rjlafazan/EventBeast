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
        <Drawer width={300} open={this.props.openClose}>

        {/* {this.props.events.map((event)=>{
                   <Menu Item 
                   primaryText = {event.name} 
                   key = {event.id} 
        />})} */}
        <AppBar title="Available Events:" iconClassNameLeft = "newIcon"/>
          <MenuItem className = 'Drawer'>Dummy 1</MenuItem>
          <MenuItem className = 'Drawer'>Dummy 2</MenuItem>
          <MenuItem className = 'Drawer'>Dummy 3</MenuItem>
          <MenuItem className = 'Drawer'>Dummy 4</MenuItem>
          <MenuItem className = 'Drawer'>Dummy 5</MenuItem>
          <MenuItem className = 'Drawer'>Dummy 6</MenuItem>
        </Drawer>
    );
  }
}