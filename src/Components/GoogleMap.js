//expected props:
// markers : a list of markers to display on the map
// getMarkerClick : a callback function that returns which marker was clicked to the parent


import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
    constructor(props){
        super(props)
        this.onMapClick = this.onMapClick.bind(this);
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.state = {
            activeMarker: null,
            showingInfoWindow: false
        }
    }
onMarkerClick(props, marker, e){
    this.props.getMarkerClick({
        name: props.name,
        id: props.num,
        description: props.description
    });
    this.setState({
        activeMarker: marker,
        showingInfoWindow: true
    })
}
onMapClick(mapProps, map, clickEvent){
    if(this.state.showingInfoWindow){
        this.setState({
            showingInfoWindow: false,
            activeMarker: null
        })
    }
}
render() {
    const style = {
        width: '500px',
        height: '500px'
      };
      const initialCenter = {
        lat: 38.580110,
        lng: -121.487503
      };
    
    return (
      <Map 
        google={this.props.google}
        zoom={14}
        containerStyle={style}
        centerAroundCurrentLocation={true}
        onClick={this.onMapClick}
        initialCenter={initialCenter}
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
            />
        )}
        <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
            <div>
                <h3>{this.props.currentSelection.name}</h3>
                <div
                    dangerouslySetInnerHTML={{__html: this.props.currentSelection.description}}>
                </div>
            </div>
        </ InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDLG4_hYBIcKhGyWq1bvypGZYUbzNi0yZM"
})(MapContainer)