import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import Calendar from './containers/Calendar';
import Flowers from './containers/Flowers';

import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';


ReactDOM.render(
	<Router>
	<div>
		<div className="nav-div">
		<Link to="/">Home </Link> 
        <Link to="/calendar">| Calendar</Link>
        <Link to="/flowers"> | Flowers</Link>

		</div>
	<Route exact path="/" component={ App } />
  	<Route path="/calendar" component={ Calendar } />
  	<Route path="/flowers" component={ Flowers } />
	</div>
	</Router>,
	 document.getElementById('root'));
registerServiceWorker();
