import React, {Component} from "react"
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import {orange500, grey600, grey50} from 'material-ui/styles/colors';

const style = {
    underlineStyle: {
        borderColor: orange500,
      },
      backgroundColor: {
          backgroundColor: orange500,
      },
      toolbarColor:{
        backgroundColor: grey600,
      },
      labelColor:{
        color: orange500,
      }

  };

class SearchBar extends Component{
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
            <MuiThemeProvider>
            <Toolbar style = {style.toolbarColor}>
                <ToolbarGroup firstChild={true}>
                <ToolbarTitle style = {style.labelColor} text="Search in" />
                <TextField 
                    underlineFocusStyle={style.underlineStyle}
                    hintText="city"
                    onChange = {this.setCity}
                />
                <ToolbarTitle text="within" />
                <DropDownMenu value={this.state.radiusValue} onChange={this.chooseRadius}>
                        <MenuItem value={1} primaryText="5 miles"/>
                        <MenuItem value={2} primaryText="10 miles"/>
                        <MenuItem value={3} primaryText="25 miles"/>
                        <MenuItem value={4} primaryText="50 miles"/>
                        <MenuItem value={5} primaryText="100 miles"/>
                    </DropDownMenu>
                    <ToolbarTitle text="in" />
                    <DropDownMenu value={this.state.categoryValue} onChange={this.chooseCategory}>
                    <MenuItem value={1} primaryText="Categories" />
                    {this.props.categories.map((category, index)=><MenuItem value = {index} primaryText = {category.name}/>)}
                    </DropDownMenu>

                </ToolbarGroup>
                <ToolbarGroup lastChild = {true}>
                <RaisedButton buttonStyle={style.backgroundColor} label="Search"/>
                </ToolbarGroup>
            </Toolbar>
            </MuiThemeProvider>
        );
    }



}

export default SearchBar;