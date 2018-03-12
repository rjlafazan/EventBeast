import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InfoDisplay extends Component {
    render(){
        const style = {
            height: '20vmax',
            width: '15vmax',
            overflow: 'hidden'
        }
        return (
            <div style={style}>
                {this.props.description}
            </div>
        )
    }
}