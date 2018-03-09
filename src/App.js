import React, { Component } from 'react';
import './App.css';
// import Map from './Components/Map'
import GoogleMap from './Components/GoogleMap'
import MeetUpAPI, {parseMeetup} from './api/MeetUpAPI';



class App extends Component {
  constructor(){
    super()
    this.state = {
      currentSelection:  {
        name: '',
        id: '',
        description: ''
      },
      markers: []
    };
    this.getClick = this.getClick.bind(this);
    this.onClick = this.onClick.bind(this);
    this.setMarker = this.setMarker.bind(this);
  }
  componentDidMount(){
    MeetUpAPI.setCallBack(data=>{
      var meetupArray = parseMeetup(data);
      this.setState({
        markers: meetupArray
      })
    })
    MeetUpAPI.fetchP();
  }
  getClick(selection) {
    this.setState({
      currentSelection: {
        name: selection.name,
        id: selection.id,
        description: selection.description
      }
    })
  }
  setMarker(marker){
    this.setState({
      markers: marker.markers
    })
  }
  onClick(event){
    var markers = this.state.markers;
    markers.splice(this.state.currentSelection.id, 1);
    this.setState({
      markers: markers,
      currentSelection: {
        name: '',
        id: ''
      }
    });
  }
  render() {
    const style = {
      width: '500px',
      height: '500px',
      zIndex: -1
    }
    return (
      <div className="App">
        <div id="container" style={style}>
        <GoogleMap 
          getClick={this.getClick} 
          setMarker={this.setMarker} 
          markers={this.state.markers} 
          currentSelection={this.state.currentSelection}
        />
        </div>
        <div>Current Selection: {this.state.currentSelection.name}
          
        </div>
        {(this.state.currentSelection.name !== '' && <a onClick={this.onClick} href="#">
            Delete Marker
          </a>)}
      </div>
    );
  }
}

export default App;
