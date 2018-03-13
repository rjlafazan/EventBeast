import React, {Component} from "react"
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
//for inline styles
import {white} from 'material-ui/styles/colors'


  export default class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            categoryValue: 1,
            radiusValue: 1,
            city: ''
        }
    };

    chooseCategory = (event, index, value) => this.setState({categoryValue: value});
    chooseRadius = (event,index,value)=> this.setState({radiusValue: value});
    changeCity = (event)=> this.setState({city: event.trigger.key});

    render(){
        return(
            <Toolbar style={{width:'70%'}}>
                <ToolbarGroup>

                <ToolbarTitle 
                text="Search in" 
                style={{color: white, paddingRight: 0}}
                />

                <TextField
                    id='citySearchField'
                    hintText="city"
                    style = {{width: 150, margin: 24, fontSize: 20}}
                    onChange = {this.setCity}
                />

                <ToolbarTitle 
                    text="within" 
                    style={{color: white, paddingRight: 10}} 
                />

                <DropDownMenu 
                    value={this.state.radiusValue} 
                    onChange={this.chooseRadius} 
                    labelStyle = {{lineHeight: '50px', fontSize: 20}}
                    listStyle = {{paddingTop: 10, paddingBottom: 10}}
                >
                    <MenuItem style = {{fontSize: 20}} value={1} primaryText="10 miles"/>
                    <MenuItem style = {{fontSize: 20}} value={2} primaryText="25 miles"/>
                    <MenuItem style = {{fontSize: 20}} value={3} primaryText="50 miles"/>

                </DropDownMenu>

                <ToolbarTitle 
                text="in" 
                style={{color: white, paddingRight: 10}}
                />

                <DropDownMenu 
                value={this.state.categoryValue} 
                onChange={this.chooseCategory} 
                labelStyle = {{lineHeight: '50px', fontSize: 20}}
                listStyle = {{paddingTop: 10, paddingBottom:10}}
                >
                    <MenuItem style = {{fontSize: 20}} value={1} primaryText="Categories"/>

                    {this.props.categories.map((category, index)=><MenuItem 
                    style = {{fontSize: 20}} 
                    value = {index} 
                    primaryText = {category.name}
                    />)}

                </DropDownMenu>
                </ToolbarGroup>

                <ToolbarGroup lastChild = {true}>
                    <RaisedButton  
                    primary={true} 
                    label="Search" 
                    onClick = {this.props.callback}
                    />
                </ToolbarGroup>
            </Toolbar>

        );
    }
}