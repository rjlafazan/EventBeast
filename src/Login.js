import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            redirect: false,
            time: 5
        }
        this.redirect = this.redirect.bind(this);
    }
    redirect(){
        var time = this.state.time;
        if(time === 0)
            this.setState({
                redirect: true
            })
        else{
            this.setState({
                time: time-1
            })
        }
    }
    componentDidMount(){
        var timer = setInterval(this.redirect, 1000);
    }
    render(){
        return(
            <div>
                <h1>Login successful</h1>
                <h2>Redirecting in {this.state.time} seconds</h2>
                {this.state.redirect && <Redirect to={'/project1/search'} />}
            </div>
        )
    }
}