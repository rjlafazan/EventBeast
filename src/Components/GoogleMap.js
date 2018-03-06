import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import uuidv4 from 'uuid/v4'

export class MapContainer extends Component {
    constructor(props){
        super(props)
        this.onClick = this.onClick.bind(this);
        this.onMarkerClick = this.onMarkerClick.bind(this);
    }
onMarkerClick(props, marker, e){
    this.props.getClick({
        name: props.name,
        id: props.num
    });
}
onClick(mapProps, map, clickEvent){
    var lat = clickEvent.latLng.lat();
    var lng = clickEvent.latLng.lng();
    var markers = this.props.markers;
    markers.push({
        lat: lat, 
        lng: lng, 
        key: uuidv4(),
        name: "Marker @ lat: " + lat + " lng: " + lng
    });
    this.props.setMarker({
        markers: markers
    });
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
        styles={style}
        containerStyle={style}
        centerAroundCurrentLocation={true}
        onClick={this.onClick}
        initialCenter={initialCenter}
        >

        {this.props.markers.map( (marker, index) => 
            <Marker 
                onClick={this.onMarkerClick}
                num={index}
                name={marker.name}
                position={{lat: marker.lat, lng: marker.lng}} 
                key={marker.key} 
            />
        )}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDLG4_hYBIcKhGyWq1bvypGZYUbzNi0yZM"
})(MapContainer)