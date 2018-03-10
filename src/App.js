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
    this.getMarkerClick = this.getMarkerClick.bind(this);
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
  getMarkerClick(selection) {
    this.setState({
      currentSelection: {
        name: selection.name,
        id: selection.id,
        description: selection.description
      }
    })
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
          getMarkerClick={this.getMarkerClick} 
          markers={this.state.markers} 
          currentSelection={this.state.currentSelection}
        />
        </div>
      </div>
    );
  }
}

export default App;
