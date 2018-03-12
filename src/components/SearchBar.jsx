import React, {Component} from "react"
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import {orange500, grey800} from 'material-ui/styles/colors'


  export default class SearchBar extends Component{
    constructor(props){
        super(props);
    };
    render(){
        return(
            <Toolbar style={{'zIndex': '5'}}>
                <ToolbarGroup>
                <ToolbarTitle text="Search in" />
                <TextField
                    id='citySearchField'
                    underlineFocusStyle = {{borderColor: orange500}}
                    underlineStyle = {{borderColor:grey800}}
                    placeholder="city"
                    onChange={this.props.onSearchChange}
                    value={this.props.search.city}
                    errorText={this.props.searchError}
                />
                <ToolbarTitle text="within" />
                <DropDownMenu value={this.props.search.radius} onChange={this.props.onRadiusChange}>
                        <MenuItem value={1} primaryText="5 miles"/>
                        <MenuItem value={2} primaryText="10 miles"/>
                        <MenuItem value={3} primaryText="25 miles"/>
                        <MenuItem value={4} primaryText="50 miles"/>
                        <MenuItem value={5} primaryText="100 miles"/>
                    </DropDownMenu>
                    <ToolbarTitle text="in" />
                    <DropDownMenu value={this.props.search.category} onChange={this.props.onCategoryChange}>
                    <MenuItem value={0} primaryText="All Categories" />
                    {this.props.categories.map((category, index)=><MenuItem value={index+1} primaryText={category.name}/>)}
                    </DropDownMenu>
                </ToolbarGroup>
                <ToolbarGroup lastChild = {true}>
                <RaisedButton  primary={true} label="Search" onClick = {this.props.callback}/>
                </ToolbarGroup>
            </Toolbar>

        );
    }
}