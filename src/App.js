import React, { Component } from 'react';
import {render} from 'react-dom';
//Theme and styling
import BeastTheme from './style/BeastTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './style/App.css';
//Components
import Nav from './Components/NavBar'
import SearchBar from "./Components/SearchBar"
import SideBar from './Components/SideBar'
import GoogleMap from './Components/GoogleMap'
//API
import MeetUpApi, {parseMeetup} from './api/MeetUpAPI'

class App extends Component {
  constructor(){
    super();
    this.state = {
      eventCategories: [],
      events: [],
      activeEvent: null,
      sidebar: false,
      center: {
        lat: 38.580110,
        lng: -121.487503
      },
      currentSelection: {
        name: '',
        id: '',
        description: ''
      },
      search: {
        city: '',
        radius: 1,
        category: 1
      },
      searchError: ''
    }
    this.callBack = this.callBack.bind(this);
    this.createServices = this.createServices.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onCategoryChange = this.onCategoryChange.bind(this);
    this.onRadiusChange = this.onRadiusChange.bind(this);
    this.setPlace = this.setPlace.bind(this);
    this.getMarkerClick = this.getMarkerClick.bind(this);
  }
  getRadius(){
    switch(this.state.search.radius){
      case 1:
        return 5;
      case 2:
        return 10;
      case 3:
        return 25;
      case 4:
        return 50;
      case 5:
        return 100;
    }
  }
  milesToMeters(miles){
    return miles * 1609;
  }

  callBack(){
    // this.setState({sidebar: !this.state.sidebar});
    this.geocoder.geocode({address: this.state.search.city}, (results, status) => {
      if(status === 'OK'){
        var lat = results[0].geometry.location.lat();
        var lng = results[0].geometry.location.lng();
        var radius = this.milesToMeters(this.getRadius())
        var newLatLng = new this.google.maps.LatLng(lat, lng);
        var circleOptions = {
          center: newLatLng,
          radius: radius
        };
        var circle = new this.google.maps.Circle(circleOptions);
        this.map.fitBounds(circle.getBounds());
        MeetUpApi.updateParam({
          lat: lat,
          lon: lng,
          radius: this.getRadius(),
          topic_category: 1
        });
        MeetUpApi.fetchP(data=>{
          var meetupArray = parseMeetup(data.data);
          this.setState({
            searchError: '',
            events: meetupArray
          })
        });
      }
      else{
        this.setState({searchError: status})
      }
    })
  }
  setPlace(){
    if(this.autoComplete.getPlace().formatted_address){
      this.setState({
        search: {
          city: this.autoComplete.getPlace().formatted_address,
          radius: this.state.search.radius,
          category: this.state.search.category
        }
      })
    }
  }
  createServices(mapProps, map){
    const {google} = mapProps;
    this.google = google;
    this.map = map;
    this.autoComplete = new google.maps.places.Autocomplete(document.getElementById('citySearchField'));
    this.autoComplete.addListener('place_changed', this.setPlace);
    this.geocoder = new google.maps.Geocoder();
  }
  onSearchChange(event){
    this.setState({
      search: {
        city: event.target.value,
        radius: this.state.search.radius,
        category: this.state.search.category
      }
    })
  }
  onCategoryChange(event, index, value){
    this.setState({
      search: {
        city: this.state.search.city,
        radius: this.state.search.radius,
        category: value
      }
    })
  }
  onRadiusChange(event, index, value){
    this.setState({
      search: {
        city: this.state.search.city,
        radius: value,
        category: this.state.search.category
      }
    })
  }
  getMarkerClick(marker){
    this.setState({
      activeEvent: marker.activeMarker
    })
  }

  render() {
    return (
      <div className = 'wrapper'>
        <MuiThemeProvider muiTheme = {getMuiTheme(BeastTheme)}>
          <Nav className = 'navBar'/>
          </MuiThemeProvider>
          <MuiThemeProvider muiTheme = {getMuiTheme(BeastTheme)}>
          <SideBar 
            openClose={this.state.sidebar}
            events={this.state.events}
          />
          </MuiThemeProvider>
          <MuiThemeProvider muiTheme = {getMuiTheme(BeastTheme)}>
          <SearchBar 
            className="searchBar" 
            categories={this.state.eventCategories} 
            callback={this.callBack}
            onSearchChange={this.onSearchChange}
            onCategoryChange={this.onCategoryChange}
            onRadiusChange={this.onRadiusChange}
            search={this.state.search}
            searchError={this.state.searchError}
          />
          </MuiThemeProvider>
          <div>
            <GoogleMap
              center={this.state.center}
              markers={this.state.events}
              currentSelection={this.state.currentSelection}
              createServices={this.createServices}
              getMarkerClick={this.getMarkerClick}
            />
          </div>
       </div>
      
    );
  }
}

export default App;
