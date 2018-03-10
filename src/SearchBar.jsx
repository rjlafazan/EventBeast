import React, {Component} from "react"
import ReactDOM from 'react-dom';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import {orange500, grey800} from 'material-ui/styles/colors'
import './SearchBar.css'


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
            <Toolbar className = 'Toolbar'>
                <ToolbarGroup firstChild={true}>
                <ToolbarTitle className = "ToolbarTitle" text="Search in" />
                <TextField
                    id='citySearchField'
                    underlineFocusStyle = {{borderColor: orange500}}
                    underlineStyle = {{borderColor:grey800}}
                    hintText="city"
                    onChange = {this.setCity}
                />
                <ToolbarTitle className = "ToolbarTitle" text="within" />
                <DropDownMenu value={this.state.radiusValue} onChange={this.chooseRadius}>
                        <MenuItem value={1} primaryText="5 miles"/>
                        <MenuItem value={2} primaryText="10 miles"/>
                        <MenuItem value={3} primaryText="25 miles"/>
                        <MenuItem value={4} primaryText="50 miles"/>
                        <MenuItem value={5} primaryText="100 miles"/>
                    </DropDownMenu>
                    <ToolbarTitle className = "ToolbarTitle" text="in" />
                    <DropDownMenu value={this.state.categoryValue} onChange={this.chooseCategory}>
                    <MenuItem value={1} primaryText="Categories" />
                    {this.props.categories.map((category, index)=><MenuItem value = {index} primaryText = {category.name}/>)}
                    </DropDownMenu>
                </ToolbarGroup>
                <ToolbarGroup lastChild = {true}>
                <RaisedButton  primary={true} label="Search" onClick = {this.props.callback}/>
                </ToolbarGroup>
            </Toolbar>

        );
    }
}