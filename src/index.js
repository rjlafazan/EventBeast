import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Route, BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
<Router>
    <Route component={App} />
</Router>, 
document.getElementById('root'));
registerServiceWorker();
