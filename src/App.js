import React, { Component } from 'react';
import {render} from 'react-dom';
//Theme and styling
import BeastTheme from './style/BeastTheme'
import NewZIndex from './style/NewZIndex'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './style/App.css';
import {CSSTransitionGroup} from 'react-transition-group'; // ES6//entering animation
//Components
import Nav from './components/NavBar'
import SearchBar from "./components/SearchBar"
import SideBar from './components/SideBar'


class App extends Component {
  constructor(){
    super();
    this.state = {
      loading: true,
      eventCategories: [],
      events: [],
      sidebar: false,
    }
    this.callBack = this.callBack.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 3000); // simulates an async action, and hides the spinner
  }

  callBack(){
    this.setState({sidebar: !this.state.sidebar});
  }

  render() {
    if(this.state.loading){
      return null;
    }
    return (
      <CSSTransitionGroup
      transitionName = "tunnelIn"
      transitionAppear={true}
      transitionAppearTimeout={2000}
      transitionEnter={false}
      transitionLeave={false}>
      <div className = 'wrapper'>
        <MuiThemeProvider muiTheme = {getMuiTheme(BeastTheme, NewZIndex)}>
          <Nav className = 'navBar'/>
          </MuiThemeProvider>

          <MuiThemeProvider muiTheme = {getMuiTheme(BeastTheme, NewZIndex)}>
          <SearchBar categories = {this.state.eventCategories} callback = {this.callBack}/>
          </MuiThemeProvider>
          <MuiThemeProvider muiTheme = {getMuiTheme(BeastTheme, NewZIndex)}>
          <SideBar openClose = {this.state.sidebar}/>
          </MuiThemeProvider>
       </div>
       </CSSTransitionGroup>
    );
  }
}

export default App;
