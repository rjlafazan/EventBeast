import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import Landing from './Landing';
import registerServiceWorker from './registerServiceWorker';
import {Route, BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
<Router>
    <div>
        <Route exact path='/project1' component={Landing} />
        <Route path='/project1/search' component={App} />
        <Route path='/project1/login' />
    </div>
</Router>, 
document.getElementById('root'));
registerServiceWorker();
