import React, { Component } from "react";
import App from './App';
import Landing from './Landing';
import Login from './Login';
import {Route, BrowserRouter as Router} from 'react-router-dom'

export default class MainRouter extends Component {
    constructor(props){
        super(props);
        this.state = {
            login: false
        }
    }
    render(){
        return(
        <Router>
            <div>
                <Route exact path='/project1' component={Landing} />
                <Route path='/project1/search' component={App} />
                <Route path='/project1/login' component={Login}/>
            </div>
        </Router>
        )
    }
}