import React from 'react';
import Drawer from 'material-ui/Drawer';
<<<<<<< HEAD
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import '../style/SideBarIcon.css'
=======
import MenuItem from 'material-ui/MenuItem';
>>>>>>> master

export default class SideBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }
  render() {
    return (
<<<<<<< HEAD
        <Drawer width={300} open={this.props.openClose}>
       <AppBar title="Available Events:" iconClassNameLeft = "newIcon"/>
        {/* {this.props.events.map((event)=>{
                   <Menu Item 
                   primaryText = {event.name} 
                   key = {event.id} 
        />})} */}
          <MenuItem className = 'Drawer'>Dummy 1</MenuItem>
          <MenuItem className = 'Drawer'>Dummy 2</MenuItem>
          <MenuItem className = 'Drawer'>Dummy 3</MenuItem>
          <MenuItem className = 'Drawer'>Dummy 4</MenuItem>
          <MenuItem className = 'Drawer'>Dummy 5</MenuItem>
          <MenuItem className = 'Drawer'>Dummy 6</MenuItem>
=======
        <Drawer open={this.props.openClose}>
        {this.props.events.map((event)=>
          <MenuItem 
            primaryText={event.name} 
            key ={event.id} 
          />)}
>>>>>>> master
        </Drawer>
    );
  }
}