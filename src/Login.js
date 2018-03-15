import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            redirect: false
        }
    }
    redirect(){
        this.setState({
            redirect: true
        })
    }
    componentDidMount(){
        var timer = setTimeout(this.redirect, 5000);
    }
    render(){
        return(
            <div>
                <h1>Login successful</h1>
                <h2>Redirecting in 5 seconds</h2>
                {this.state.redirect && <Redirect to={'/project1/search'} />}
            </div>
        )
    }
}