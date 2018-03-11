import React, { Component } from 'react';
import {render} from 'react-dom';
//Theme and styling
import BeastTheme from './style/BeastTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './style/App.css';
//Components
import Nav from './components/NavBar'
import SearchBar from "./components/SearchBar"
import SideBar from './components/SideBar'

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
          </MuiThemeProvider>
          <MuiThemeProvider muiTheme = {getMuiTheme(BeastTheme)}>
          <SideBar openClose = {this.state.sidebar}/>
          </MuiThemeProvider>
          <MuiThemeProvider muiTheme = {getMuiTheme(BeastTheme)}>
          <SearchBar className = "searchBar" categories = {this.state.eventCategories} callback = {this.callBack}/>
          </MuiThemeProvider>
       </div>
      
    );
  }
}

export default App;
