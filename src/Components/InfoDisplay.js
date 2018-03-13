import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InfoDisplay extends Component {
  _renderWeather(props) {
    // console.log(props);
    // console.log(props.weather);
    var weatherSummary = '';
    if (props) {
      weatherSummary = `Weather outlook: ${
        props.summary
      } Temperature: High - ${props.highTemp} Low - ${
        props.lowTemp
      } * Wind: ${props.windSpeed}`;
    }

    return (
      <div className="weather">
        <p>{weatherSummary}</p>
      </div>
    );
  }
    render(){
      // console.log('rendered info');
      var date = new Date(this.props.event.start)
      const collapseStlye = {
          maxHeight: '30vh',
          maxWidth: '30vw',
          overflow: 'hidden',
          position: 'relative'
      }
      const expandStlye = {
          maxHeight: '60vh',
          maxWidth: '60vw',
          overflowY: 'auto',
          overflowX: 'auto',
          position: 'relative'
      }
      const click = {
          color: '#777',
          cursor: 'pointer',   
      }
      const container= {
          paddingTop: '14px',
          position: 'sticky',
          bottom: '0',
          background: 'linear-gradient(rgba(255,255,255,0), rgba(255,255,255,1), rgba(255,255,255,1))'
      }
      return (  
          <div style={this.props.collapse ? collapseStlye : expandStlye}>
              <h2>{this.props.event.name}</h2>
              <h3>Start time: {date.toLocaleString()}</h3>
              <h6>{this._renderWeather(this.props.weather)}</h6>
              <div dangerouslySetInnerHTML={{__html: this.props.event.description}}></div>
              <a href={this.props.event.link}>Learn More</a>
              <div style={{float:'right'}}>{this.props.canLike ? <button id="like">Like</button> : <span>Likes</span>}<span> {this.props.eventLikes}</span></div>
              <div style={container}>
              <span id='collapse' style={click}>Show {this.props.collapse ? "More" : "Less"}</span>
              </div>
          </div>
      )
  }
}
