import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InfoDisplay extends Component {
    render(){
        var date = new Date(this.props.event.start)
        return (  
            <div>
                <h2>{this.props.event.name}</h2>
                <h3>Start time: {date.toLocaleString()}</h3>
                <div dangerouslySetInnerHTML={{__html: this.props.event.description}}></div>
                <a href={this.props.event.link}>Learn More</a>
            </div>
        )
    }
}