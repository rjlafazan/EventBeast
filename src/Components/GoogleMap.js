//expected props:
// markers : a list of events to display on the map
// getMarkerClick : a callback function that returns which marker was clicked to the parent
// createServices : a callback function that is called when map is ready. Will create the places and geocoder services


import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
    constructor(props){
        super(props)
        this.onMapClick = this.onMapClick.bind(this);
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.state = {
            activeMarker: null,
            showingInfoWindow: false,
            search: '',
            num: 0
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
        showingInfoWindow: true,
        num: props.num
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
        zoom={14}
        containerStyle={style}
        // centerAroundCurrentLocation={true}
        onClick={this.onMapClick}
        initialCenter={initialCenter}
        visible={true}
        onReady={this.props.createServices}
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
            {this.state.showingInfoWindow &&
            <div>
                <h3>{this.props.markers[this.state.num].name}</h3>
                <div
                    dangerouslySetInnerHTML={{__html: this.props.markers[this.state.num].description}}>
                </div>
            </div>
            }
        </ InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDLG4_hYBIcKhGyWq1bvypGZYUbzNi0yZM"
})(MapContainer)