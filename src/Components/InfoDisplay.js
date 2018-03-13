import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InfoDisplay extends Component {
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
