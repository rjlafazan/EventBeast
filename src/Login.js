import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import queryString from 'query-string'

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            redirect: false,
            time: 20
        }
        this.redirect = this.redirect.bind(this);
        this.hash = {};
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
    componentWillMount(){
        // var timer = setInterval(this.redirect, 1000);
        this.hash = queryString.parse(this.props.location.hash);
        console.log(this.hash)
        console.log('access_token' in this.hash)
    }
    render(){
        console.log(this.hash);
        return(
            <div>
                {'access_token' in this.hash ? <h1>Login successful</h1> : <h1>Login failed</h1>}
                <h2>Redirecting in {this.state.time} seconds</h2>
                {this.state.redirect && <Redirect to={'/project1/search'} />}
            </div>
        )
    }
}