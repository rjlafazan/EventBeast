import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import Landing from './Landing';
import Login from './Login';
import MainRouter from './MainRouter';
import registerServiceWorker from './registerServiceWorker';
import {Route, BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(<MainRouter />, document.getElementById('root'));
registerServiceWorker();
