import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from "./SearchBar"
import SideList from "./SideList"
import {render} from 'react-dom';
import Nav from './NavBar'
import SideBar from './sideBar'
import BeastTheme from './ThemeMaterialUI'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  constructor(){
    super();
    this.state = {
      eventCategories: [],
      events: [],
      sidebar: false,
    }
    this.callBack = this.callBack.bind(this);
  }

  callBack(){
    this.setState({sidebar: !this.state.sidebar});
  }

  render() {
    return (
      <div className = 'wrapper'>
        <MuiThemeProvider muiTheme = {getMuiTheme(BeastTheme)}>
          <Nav className = 'navBar'/>
      
          {/* <SideList className = "sideList" events = {this.state.events}/> */}
          <SideBar openClose = {this.state.sidebar}/>
          {/* <SideList/> */}
          <SearchBar className = "searchBar" categories = {this.state.eventCategories} callback = {this.callBack}/>
          </MuiThemeProvider>
       </div>
      
    );
  }
}

export default App;
