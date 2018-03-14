//expected props:
// markers : a list of events to display on the map
// getMarkerClick : a callback function that returns which marker was clicked to the parent
// createServices : a callback function that is called when map is ready. Will create the places and geocoder services
// getMarkerClick : a callback function that supplies the index of which marker was clicked


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import InfoDisplay from './InfoDisplay'
import MapStyles from '../style/MapStyles'
//Firebase
import {eventRef, uid} from '../utils/Firebase'
//API
// import { getWeatherData } from '../api/DarkSkyApi';

export class MapContainer extends Component {
    constructor(props){
        super(props)
        this.onMapClick = this.onMapClick.bind(this);
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.state = {
            activeMarker: null,
            eventLikes: 0,
            canLike: true,
            collapse: true,
            weather: null
        }
        // this.getWeather = this.getWeather.bind(this);
    }
    
// getWeather(data){
//     this.setState({weather: data})
// }
onMarkerClick(props, marker, e){
    // //get weather data for the event clicked 
    // getWeatherData(this.props.markers[props.num], this.getWeather);

    var eventID;
    var currentRef;

    var canLike = true;
    if(this.props.activeMarker){
        eventID = this.props.markers[this.props.activeMarker].id;
        currentRef = eventRef.child(eventID);
        currentRef.off();
      }
    eventID = this.props.markers[props.num].id;
    currentRef = eventRef.child(eventID);
    currentRef.on('value', snapshot=>{
        if(snapshot.val()){
            if(snapshot.val()[uid]){
                canLike = false;
            }
            this.setState({
                eventLikes: snapshot.val().likes,
                canLike: canLike,
            })
        }
        else{
            this.setState({
                eventLikes: 0,
                canLike: canLike,           
            })
        }
    })
    this.props.getMarkerClick({
      activeMarker: props.num,
    });
    this.setState({
        activeMarker: marker,
        collapse: true,
        // weather: meetWithWeather
    })
}
onMapClick(mapProps, map, clickEvent){
    if(this.props.showingInfoWindow){
        this.props.getMapClick();
        this.setState({
            activeMarker: null
        })
    }
}
shouldComponentUpdate(nextProps, nextState){
    if(this.state === nextState && 
        this.props.showingInfoWindow === nextProps.showingInfoWindow &&
        this.props.activeMarker === nextProps.activeMarker &&
        this.props.eventLikes === nextProps.eventLikes &&
        this.props.canLike === nextProps.canLike &&
        this.props.markers === nextProps.markers && 
        this.props.loaded === nextProps.loaded){
            return false;
    }
    return true;
}
componentDidMount(){
    // console.log('map mounted');
    if(this.props.visible){
        // console.log('map mounted visible');
        document.addEventListener("click", event=>{
          if(event.target.id === 'like'){
              console.log(this.props);
            var eventID = this.props.markers[this.props.activeMarker].id;
            var currentRef = eventRef.child(eventID);
            currentRef.set({
              likes: this.state.eventLikes + 1
            })
            currentRef.child(uid).set(true);
          }
          else if(event.target.id === 'collapse'){
              this.setState({
                  collapse: !this.state.collapse
              })
          }
        })
    }
  }
render() {
    const style = {
        width: '100%',
        height: '100%',
        position: 'initial'
      };
      const initialCenter = {
        lat: this.props.center.lat,
        lng: this.props.center.lng
      };
    return (
      <Map
        google={this.props.google}

        containerStyle={style}
        // centerAroundCurrentLocation={true}
        onClick={this.onMapClick}
        initialCenter={initialCenter}
        visible={this.props.visible}
        onReady={this.props.createServices}
        styles = {MapStyles}
        >

        {this.props.markers.map( (marker, index) => 
        
            <Marker 
                onClick={this.onMarkerClick}
                num={index}
                name={marker.name}
                title={marker.title}
                position={{lat: marker.lat, lng: marker.lng}} 
                key={marker.key} 
                description={marker.description}
                icon = {'https://image.ibb.co/dxA8xx/marker.png'}
            />
        )}
        <InfoWindow
            marker={this.state.activeMarker}
            visible={this.props.showingInfoWindow}>    
            <div>
                {this.props.showingInfoWindow && 
                <InfoDisplay 
                    collapse={this.state.collapse}
                    canLike={this.state.canLike} 
                    eventLikes={this.state.eventLikes} 
                    event={this.props.markers[this.props.activeMarker]} 
                    weather={this.state.weather}
                />}
            </div>
        </ InfoWindow>
      </Map>
    );
  }
}

//expected props:
// markers : a list of events to display on the map
// getMarkerClick : a callback function that returns which marker was clicked to the parent
// createServices : a callback function that is called when map is ready. Will create the places and geocoder services
// getMarkerClick : a callback function that supplies the index of which marker was clicked

MapContainer.propTypes = {
    markers: PropTypes.array,
    getMarkerClick: PropTypes.func,
    createServices: PropTypes.func,
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDLG4_hYBIcKhGyWq1bvypGZYUbzNi0yZM"
})(MapContainer)


/* <div>
            {this.state.showingInfoWindow &&
            <div>
                <h3>{this.props.markers[this.state.num].name}</h3>
                <div
                    dangerouslySetInnerHTML={{__html: this.props.markers[this.state.num].description}}>
                </div>
                <a href={this.props.markers[this.state.num].link}>Learn More</a>
            </div>
            }
            </div>  */
