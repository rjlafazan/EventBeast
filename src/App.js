import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from "./SearchBar"
import SideList from "./SideList"
import {render} from 'react-dom';

class App extends Component {
  constructor(){
    super();
    this.state = {
      eventCategories: [],
      events: []
    }
  }
  componentDidMount(){
    fetch("https://api.meetup.com/2/categories?&sign=true&photo-host=public&page=20&key=436d386b764018255e52695046494f59")
    .then(results=>{
      if(results.ok){
      results.json();
      }else{
        console.log("didn't get results...");
      }
    }).then(data => {
      console.log(data);
      // this.setState({eventCategories: data});
    });
    fetch("https://api.meetup.com/find/upcoming_events?photo-host=public&page=20&sig_id=249675255&radius=10&lon=-121.478851&lat=38.575764&sig=7e270d9c33b996ada2a448b9347378e2152f18b0")
    .then(results=>{
      if(results.ok){
        results.json();
        }else{
          console.log("didn't get results...");
        }
    }).then(data=>{
      console.log(data);
      // this.setState({events: data.result});
    });
  }

  render() {
    return (
      <div className = 'wrapper'>
          <SideList className = "sideList" events = {this.state.events}/>
          <SearchBar className = "searchBar" categories = {this.state.eventCategories}/>
       </div>
      
    );
  }
}

export default App;
