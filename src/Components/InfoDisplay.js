import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InfoDisplay extends Component {
<<<<<<< HEAD
  _renderWeather(props) {
    var weatherSummary = '';
    console.log(props);
    console.log(Object.keys(props));
    if (props.weather) {
      weatherSummary = `Weather outlook: ${
        props.weather.summary
      } Temperature: High - ${props.weather.highTemp} Low - ${
        props.weather.lowTemp
      } * Wind: ${props.weather.windSpeed}`;
=======
    render(){
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
                <div dangerouslySetInnerHTML={{__html: this.props.event.description}}></div>
                <a href={this.props.event.link}>Learn More</a>
                <div style={{float:'right'}}>{this.props.canLike ? <button id="like">Like</button> : <span>Likes</span>}<span> {this.props.eventLikes}</span></div>
                <div style={container}>
                <span id='collapse' style={click}>Show {this.props.collapse ? "More" : "Less"}</span>
                </div>
            </div>
        )
>>>>>>> improved likes
    }

    return (
      <div className="weather">
        <p>{weatherSummary}</p>
      </div>
    );
  }

  render() {
    var date = new Date(this.props.event.start);
    return (
      <div>
        <h2>{this.props.event.name}</h2>
        <h3>Start time: {date.toLocaleString()}</h3>
        <div
          dangerouslySetInnerHTML={{ __html: this.props.event.description }}
        />
        <h6>{this._renderWeather(this.props.event)}</h6>
        <a href={this.props.event.link}>Learn More</a>
      </div>
    );
  }
}
