import React, {Component} from 'react'
import {List, ListItem} from 'material-ui/List';
import {orange500, grey600, grey50} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import './SideList.css'

const ListStyle={
    backgroundColor: grey600,
    width: 200
}
export default class SideList extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    };

    render(){
        return (
            <MuiThemeProvider>
            <List className = 'listBkg'>
               {/* {this.props.events.map((event)=>{
                   <ListItem 
                   className = 'listItemCSS'
                   primaryText = {event.name} 
                   key = {event.id} 
                   leftAvatar={<Avatar size ={40} src = event.imgUrl}/>})} */}

                <ListItem className = 'listItemCSS' primaryText='first event' leftAvatar = {<Avatar size ={40}/>}/>
                <ListItem className = 'listItemCSS' primaryText ='second event' leftAvatar={<Avatar size ={40}/>}/>
                <ListItem className = 'listItemCSS' primaryText ='third event' leftAvatar={<Avatar size ={40}/>}/>
                <ListItem className = 'listItemCSS' primaryText ='third event' leftAvatar={<Avatar size ={40}/>}/>
            </List>
            </MuiThemeProvider>
        );
    } 
 }