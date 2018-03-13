import React, { Component } from 'react';
<<<<<<< HEAD
// import update from 'react-addons-update'; // ES6
import { render } from 'react-dom';
=======
import {render} from 'react-dom';
import queryString from 'query-string'
<<<<<<< HEAD
>>>>>>> added routing
=======
import {Redirect} from 'react-router-dom'
>>>>>>> changed routing
//Theme and styling
import BeastTheme from './style/BeastTheme';
import NewZIndex from './style/NewZIndex';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './style/App.css';
import { CSSTransitionGroup } from 'react-transition-group'; // ES6//entering animation
//Components
import Nav from './Components/NavBar';
import SearchBar from './Components/SearchBar';
import SideBar from './Components/SideBar';
import GoogleMap from './Components/GoogleMap';

//API
import MeetUpApi, {
  parseMeetup,
  MeetUpCategories,
  categories,
} from './api/MeetUpAPI';
import DarkSkyApi, { getWeatherData } from './api/DarkSkyApi';
import MeetUpApi, {parseMeetup, categories, MeetUpCategories} from './api/MeetUpAPI'
//Firebase
import firebase, {eventRef, uid} from './utils/Firebase'

class App extends Component {
<<<<<<< HEAD
  constructor() {
    super();
=======
  constructor(props){
    super(props);
>>>>>>> added routing
    this.state = {
      eventCategories: [],
      events: [],
      loading: true,
      activeEvent: null,
      sidebar: false,
      center: {
        lat: 38.58011,
        lng: -121.487503,
      },
<<<<<<< HEAD
      currentSelection: {
        name: '',
        id: '',
        description: '',
      },
=======
>>>>>>> removed unnecessary states
      search: {
        city: '',
        radius: 1,
        category: 0,
      },
      searchError: '',
      showingInfoWindow: false,
      update: false,
      redirect: {
        yes: false,
        pathname: '',
        search: ''
      }
    }
    this.fetchData = this.fetchData.bind(this);
    this.callBack = this.callBack.bind(this);
    this.createServices = this.createServices.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onCategoryChange = this.onCategoryChange.bind(this);
    this.onRadiusChange = this.onRadiusChange.bind(this);
    this.setPlace = this.setPlace.bind(this);
    this.getMarkerClick = this.getMarkerClick.bind(this);
    this.getMapClick = this.getMapClick.bind(this);
  }
<<<<<<< HEAD
  getRadius() {
    switch (this.state.search.radius) {
=======
  getRadius(rad){
    switch(rad){
>>>>>>> added routing
      case 1:
        return 10;
      case 2:
        return 25;
      case 3:
        return 50;
    }
  }
  milesToMeters(miles) {
    return miles * 1609;
  }
  fetchData(searchQuery){
    searchQuery.cat = parseInt(searchQuery.cat)
    searchQuery.rad = parseInt(searchQuery.rad)
    this.geocoder.geocode({address: searchQuery.loc}, (results, status) => {
      if(status === 'OK'){
        var lat = results[0].geometry.location.lat();
        var lng = results[0].geometry.location.lng();
        var radius = this.milesToMeters(this.getRadius(searchQuery.rad))
        var newLatLng = new this.google.maps.LatLng(lat, lng);
        var circleOptions = {
          center: newLatLng,
          radius: radius
        };
        var circle = new this.google.maps.Circle(circleOptions);
        this.map.fitBounds(circle.getBounds());
        MeetUpCategories[searchQuery.cat].updateParam({
          lat: lat,
          lon: lng,
          radius: this.getRadius(searchQuery.rad)
        });
        MeetUpCategories[searchQuery.cat].fetchP(data=>{
          var meetupArray = parseMeetup(data.data);
          this.setState({
            searchError: '',
            events: meetupArray,
            showingInfoWindow: false,
            activeEvent: null
          })
        });
      }
      else{
        this.setState({searchError: status})
      }
    });
  }
<<<<<<< HEAD
  setPlace() {
    if (this.autoComplete.getPlace().formatted_address) {
=======

  callBack(){
    // this.setState({sidebar: !this.state.sidebar});
    var searchQuery = {
      loc: this.state.search.city,
      rad: this.state.search.radius,
      cat: this.state.search.category
    }
    
    this.fetchData(searchQuery);
    var qstr = queryString.stringify({
      loc: this.state.search.city,
      rad: this.state.search.radius,
      cat: this.state.search.category
    });
    this.setState({
      redirect: {
        yes: true,
        pathname: '/',
        search: qstr,
      }
    })
  }
  setPlace(){
    if(this.autoComplete.getPlace().formatted_address){
>>>>>>> added routing
      this.setState({
        search: {
          city: this.autoComplete.getPlace().formatted_address,
          radius: this.state.search.radius,
          category: this.state.search.category,
        },
      });
    }
  }
  createServices(mapProps, map) {
    const { google } = mapProps;
    this.google = google;
    this.map = map;
    this.autoComplete = new google.maps.places.Autocomplete(
      document.getElementById('citySearchField')
    );
    this.autoComplete.bindTo('bounds', this.map);
    this.autoComplete.addListener('place_changed', this.setPlace);
    this.geocoder = new google.maps.Geocoder();
    if(this.state.update === true){
      this.state.update = false;
      var searchQuery = {
        loc: this.state.search.city,
        rad: this.state.search.radius,
        cat: this.state.search.category
      }
      this.fetchData(searchQuery);
    }
    this.setState({ loading: false });
  }
  onSearchChange(event) {
    this.setState({
      search: {
        city: event.target.value,
        radius: this.state.search.radius,
        category: this.state.search.category,
      },
    });
  }
  onCategoryChange(event, index, value) {
    this.setState({
      search: {
        city: this.state.search.city,
        radius: this.state.search.radius,
        category: value,
      },
    });
  }
  onRadiusChange(event, index, value) {
    this.setState({
      search: {
        city: this.state.search.city,
        radius: value,
        category: this.state.search.category,
      },
    });
  }
<<<<<<< HEAD
  getMarkerClick(marker) {
    //get weather data for the event clicked append to clicked event and return
    var meets = this.state.events.slice(0);
    var meetWithWeather = getWeatherData(meets[marker.activeMarker]);
    // console.log(meetWithWeather);
    meets[marker.activeMarker] = meetWithWeather;

=======
  getMarkerClick(marker){
>>>>>>> moved like information to map
    this.setState({
      events: meets,
      activeEvent: marker.activeMarker,
      showingInfoWindow: true
    })
  }
  getMapClick() {
    this.setState({
      showingInfoWindow: false,
    });
  }
<<<<<<< HEAD
  componentDidMount() {
=======
  componentDidMount(){
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    document.addEventListener("click", event=>{
      if(event.target.id === 'like'){
        var eventID = this.state.events[this.state.activeEvent].id;
        var currentRef = eventRef.child(eventID);
        currentRef.set({
          likes: this.state.eventLikes + 1
        })
        currentRef.child(uid).set(true);
      }
    })
>>>>>>> moved code
=======
>>>>>>> moved like information to map
    setTimeout(() => this.setState({ loading: false }), 1500);
  }

  render() {
    if (this.state.loading) {
      return null;
<<<<<<< HEAD
    } else {
      return (
        <CSSTransitionGroup
          transitionName="tunnelIn"
          transitionAppear={true}
          transitionAppearTimeout={2000}
          transitionEnter={false}
          transitionLeave={false}
        >
          <div className="wrapper">
            <MuiThemeProvider muiTheme={getMuiTheme(BeastTheme)}>
              <Nav className="navBar" />
            </MuiThemeProvider>
            <MuiThemeProvider muiTheme={getMuiTheme(BeastTheme, NewZIndex)}>
              <SideBar
                openClose={this.state.sidebar}
                events={this.state.events}
              />
            </MuiThemeProvider>
            <MuiThemeProvider muiTheme={getMuiTheme(BeastTheme, NewZIndex)}>
              <SearchBar
                categories={this.state.eventCategories}
                callback={this.callBack}
                onSearchChange={this.onSearchChange}
                onCategoryChange={this.onCategoryChange}
                onRadiusChange={this.onRadiusChange}
                search={this.state.search}
                searchError={this.state.searchError}
                categories={categories}
              />
            </MuiThemeProvider>
=======
=======
    if(this.props.history.action === "POP" && this.props.location.hash){
      var searchQuery = queryString.parse(this.props.location.hash)
=======
    if(this.props.history.action === "POP" && this.props.location.search){
      var searchQuery = queryString.parse(this.props.location.search)
>>>>>>> changed routing
      this.setState({
        update: true,
          search: {
            city: searchQuery.loc,
            radius: parseInt(searchQuery.rad),
            category: parseInt(searchQuery.cat)
          }
      })
    }
  }
  componentDidUpdate(prevProps, prevState){
    console.log(this.props);
    if(this.state.redirect.yes){
      this.setState({
        redirect: {
          yes: false,
          pathname: this.state.redirect.pathname,
          search: this.state.redirect.search
        }
      })
    }
    if(this.props.history.action === "POP" && this.props.location.search && this.props.location.search !== prevProps.location.search && this.geocoder){
      var searchQuery = queryString.parse(this.props.location.search)
      this.setState({
          search: {
            city: searchQuery.loc,
            radius: parseInt(searchQuery.rad),
            category: parseInt(searchQuery.cat)
          }
      })
      this.fetchData(searchQuery);
    }
    else if(this.props.history.action === "POP" && this.props.location.search && this.props.location.search !== prevProps.location.search){
      var searchQuery = queryString.parse(this.props.location.search)
      this.setState({
        update: true,
          search: {
            city: searchQuery.loc,
            radius: parseInt(searchQuery.rad),
            category: parseInt(searchQuery.cat)
          }
      })
    }
  }

  render() {
    if(this.state.loading){
      return (
      <GoogleMap
      center={this.state.center}
      markers={this.state.events}
      createServices={this.createServices}
      getMarkerClick={this.getMarkerClick}
      getMapClick={this.getMapClick}
      showingInfoWindow={this.state.showingInfoWindow}
      activeMarker={this.state.activeEvent}
      visible={false}
<<<<<<< HEAD
    />;
>>>>>>> added routing
    }else{
=======
    />);
    }
    else{
>>>>>>> changed routing
    return (
      <CSSTransitionGroup
      transitionName = "tunnelIn"
      transitionAppear={true}
      transitionAppearTimeout={2000}
      transitionEnter={false}
      transitionLeave={false}>

      <div className = 'wrapper'>
        <MuiThemeProvider muiTheme = {getMuiTheme(BeastTheme)}>
          <Nav className = 'navBar'/>
          </MuiThemeProvider>
          <MuiThemeProvider muiTheme = {getMuiTheme(BeastTheme, NewZIndex)}>
          <SideBar 
            openClose={this.state.sidebar}
            events={this.state.events}
          />
          </MuiThemeProvider>
          <MuiThemeProvider muiTheme = {getMuiTheme(BeastTheme, NewZIndex)}>
          <SearchBar
            callback={this.callBack}
            onSearchChange={this.onSearchChange}
            onCategoryChange={this.onCategoryChange}
            onRadiusChange={this.onRadiusChange}
            search={this.state.search}
            searchError={this.state.searchError}
            categories={categories}
          />
          </MuiThemeProvider>
>>>>>>> added collapsable infowindow
            <GoogleMap
              center={this.state.center}
              markers={this.state.events}
              createServices={this.createServices}
              getMarkerClick={this.getMarkerClick}
              getMapClick={this.getMapClick}
              showingInfoWindow={this.state.showingInfoWindow}
              activeMarker={this.state.activeEvent}
              visible={true}
            />
<<<<<<< HEAD
          </div>
        </CSSTransitionGroup>
      );
    }
=======
            {this.state.redirect.yes && <Redirect push to={this.state.redirect} />}
       </div>
       </CSSTransitionGroup>
      
    );
  }
>>>>>>> changed routing
  }
}

export default App;
