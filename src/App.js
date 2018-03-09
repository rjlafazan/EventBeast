import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from "./SearchBar"

class App extends Component {
  constructor(){
    super();
    this.state = {
      eventCategories: []
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
  }

  render() {
    return (
      <SearchBar categories = {this.state.eventCategories}/>
    );
  }
}

export default App;
