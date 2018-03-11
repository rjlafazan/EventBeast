import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class SideBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }
  render() {
    return (
        <Drawer open={this.props.openClose}>
        {this.props.events.map((event)=>
          <MenuItem 
            primaryText={event.name} 
            key ={event.id} 
          />)}
        </Drawer>
    );
  }
}