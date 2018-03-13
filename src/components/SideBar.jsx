import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import MenuCard from "./MenuCard"


export default class SideBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }


  render() {
    return (
      <Drawer width = {300} open={true}>

        <AppBar title="Available Events:"/>
        {this.props.events.map((event,index)=>
          <MenuItem key = {event.id} primaryText = {event.title}/>)}
      </Drawer>
    );

  }
}
